const sidebar = require('./sidebar');

console.log('', sidebar);

const title = "r0o0's Blog";
const description = "r0o0's Programming blog";
const port = 9090;

module.exports = () => ({
	dest: 'docs/dist',
	title,
	description,
	port,
	themeConfig: {
		editLinks: true,
		lastUpdated: 'Last Updated',
		docsDir: 'docs',
		sidebar,
    nav: [{ text: 'Github', link: 'https://github.com/r0o0/TIL' }],
    smoothScroll: true
	},
	plugins: [
		['demo-code', {
			minHeight: 250,
			onlineBtns: { codepen: false, jsfiddle: false, codesandbox: false }
		}],
		['vuepress-plugin-clean-urls', {
			normalSuffix: '/',
			indexSuffix: '/',
			notFoundPath: '/404.html'
		}]
	]
});
