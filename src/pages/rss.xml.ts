import rss from '@astrojs/rss'
import { blog } from '../lib/markdoc/frontmatter.schema'
import { read } from '../lib/markdoc/read'
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '../config'
import { globby } from 'globby'

export const get = async () => {
  const paths = await globby('content/blog/*/*.md')
  const posts = await Promise.all(paths.map(async path => {
    const post = await read({ filepath: path, schema: blog })
    const year = path.split('/')[2]
    return { ...post, year }
  }))

  const sortedPosts = posts
    .filter((p) => !p.frontmatter.draft)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).valueOf() -
        new Date(a.frontmatter.date).valueOf()
    )

  let baseUrl = SITE_URL
  // removing trailing slash if found
  // https://example.com/ => https://example.com
  baseUrl = baseUrl.replace(/\/+$/g, '')

  const rssItems = sortedPosts.map(({ frontmatter, slug, year }) => {
    if (frontmatter.external) {
      const title = frontmatter.title
      const pubDate = frontmatter.date
      const link = frontmatter.url

      return {
        title,
        pubDate,
        link
      }
    }

    const title = frontmatter.title
    const pubDate = frontmatter.date
    const description = frontmatter.description
    const link = `${baseUrl}/${year}/${slug}`

    return {
      title,
      pubDate,
      description,
      link
    }
  })

  return await rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: baseUrl,
    items: rssItems
  })
}
