export default {
  '*.{ts,astro,js,mjs,cjs}': ['prettier --write', 'eslint'],
  '*.md': ['textlint'],
}
