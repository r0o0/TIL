const sidebar = require('./sidebar');

console.log('', sidebar);

const title = 'TIL';
const port = 9090;

module.exports = () => ({
  dest: 'docs/dist',
  title,
  port,
  themeConfig: {
    editLinks: true,
    docsDir: 'docs',
    sidebar,
    nav: [{ text: 'Github', link: 'https://github.com/r0o0/TIL' }]
  },
  plugins: [
    ['demo-code', {
      minHeight: 500,
      onlineBtns: { codepen: false, jsfiddle: false, codesandbox: false },
      styleStr: 'text-decoration: underline; background-color: yellow',
    }],
    ['vuepress-plugin-clean-urls', {
      normalSuffix: '/',
      indexSuffix: '/',
      notFoundPath: '/404.html'
    }]
  ]
});