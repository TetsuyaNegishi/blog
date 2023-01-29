---
external: false
title: GatsbyJSでmarkdownファイル内のscriptタグを正しく動作させる方法
date: 2020-07-03
---

GatsbyJSでmarkdownファイルをparseするには[gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)が一般的だろう。
本ブログもgatsby-transformer-remarkを使用している。

gatsby-transformer-remarkを使うとmarkdownファイルからHTMLのテキストを取得できる。
取得したHTMLのテキストを`dangerouslySetInnerHTML`propsにわたすことで、HTMLのテキストをHTMLDOMとして表示させる。

- 参考：[GatsbyJs公式ドキュメント-Adding Markdown Pages](https://www.gatsbyjs.org/docs/adding-markdown-pages/)

このとき`dangerouslySetInnerHTML`に渡されたHTMLのテキストに`<script>`タグが含まれていた場合は無視するしようになっている。
そのため、markdownファイルに記載した`<script>`タグは正しく動作しない。

どうやってこれを回避するかというと[react-helmet](https://github.com/nfl/react-helmet)を使う。
react-helmetを使うと`<head>`内の要素を動的に変えることができる。
`<script>`タグをHTMLのテキストから抽出して、抽出した`<script>`タグをreact-helmetを使って動的に`<head>`内に挿入すればよい。

```tsx
console.log(html) // htmlファイルのテキスト
const scriptTagRegExp = /<script.*>.*<\/script>/g // <script>タグにマッチする正規表現
const scriptTagList = html.match(scriptTagRegExp) // htmlからscriptタグのリストを取得
const htmlExcludingScriptTag = html.replace(scriptTagRegExp, '') // <scriptタグ>をhtmlから排除する

return (
	<>
		<Helmet> {/* <head>に<script>タグを追加 */}
  	  {scriptTagList?.map(stringScriptTag => {
    	  return parse(stringScriptTag))
			})}
    </Helmet>
		<div dangerouslySetInnerHTML={htmlExcludingScriptTag} />
	</>
```

これ以外のやり方も色々試したが、画面が遷移すると正しく動かなかったりscriptが重複して読まれたりとうまく動作する事ができなかった。
react-helmetを使った上のやり方なら不具合なく動作させることができた。
