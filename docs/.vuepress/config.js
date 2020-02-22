const sidebar = require('./sidebar');
const title = "r0o0's Blog";
const description = "r0o0's Programming blog";
const port = 9090;

module.exports = () => ({
	base: '/TIL/',
	dest: 'docs/.vuepress/dist',
	title,
	description,
	port,
	themeConfig: {
		editLinks: true,
		lastUpdated: 'Last Updated',
		docsDir: 'docs',
		nav: [{ text: 'Github', link: 'https://github.com/r0o0/TIL' }],
		sidebar,
		smoothScroll: true
	},
	plugins: [
		[
			'demo-code',
			{
				minHeight: 250,
				onlineBtns: { codepen: false, jsfiddle: false, codesandbox: false }
			}
		],
		[
			'vuepress-plugin-clean-urls',
			{
				normalSuffix: '/',
				indexSuffix: '/',
				notFoundPath: '/404.html'
			}
		]
	]
});
