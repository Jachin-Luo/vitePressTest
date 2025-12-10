import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

import { vitepressMarkmapPreview } from 'vitepress-markmap-preview'
import { generateSidebar, withSidebar } from 'vitepress-sidebar'
// https://vitepress.dev/reference/site-config

const vitePressConfigs = {
	title: 'Jachin Personal Blog',
	description: 'Jachin Personal Blog',
	lang: 'zh-CN',
	lastUpdated: true,
	search: {
		provider: 'local',
	},
	themeConfig: {
		outline: [1, 6], // 只显示 h2 和 h3 标题
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: '总结', link: '/总结/思维导图/总览' },
			{ text: '申论', link: '/申论' },
			{ text: '行测', link: '/行测' },
			{
				text: '综合应用',
				link: '/综合应用/各名师总结',
			},
		],
		sidebar: {},

		socialLinks: [{ icon: 'github', link: 'https://github.com/Jachin-Luo/vitePressTest' }],
	},
	markdown: {
		image: {
			// 默认禁用；设置为 true 可为所有图片启用懒加载。
			lazyLoading: true,
		},
		config: (md) => {
			md.use(mathjax3)
			vitepressMarkmapPreview(md)
		},
	},
}

export default defineConfig(
	withSidebar(vitePressConfigs, [
		//useTitleFromFrontmatter: false, //如果值为true,则根据文件Frontmatter中title的值显示标题。如果无法解析该值,则如果useTitleFromFileHeading选项为true,则从h1标签中获取该值,如果失败,则从文件名中获取该值。
		//useTitleFromFileHeading: false, //如果值为 true，则显示带有 .md 文件中 h1 标题内容的标题。如果文件中不存在 h1 标题，则显示 Unknown。
		{
			documentRootPath: 'docs',
			scanStartPath: '申论',
			basePath: '/申论/',
			resolvePath: '/申论/',
			useTitleFromFileHeading: false,
			collapsed: true,
		},
		{
			documentRootPath: 'docs',
			scanStartPath: '行测',
			resolvePath: '/行测/',
			useTitleFromFrontmatter: false,
			collapsed: true,
		},
		{
			documentRootPath: 'docs',
			scanStartPath: '总结',
			resolvePath: '/总结/',
			useTitleFromFrontmatter: false,
			collapsed: true,
		},
		{
			documentRootPath: 'docs',
			scanStartPath: '综合应用',
			resolvePath: '/综合应用/',
			useTitleFromFrontmatter: false,
			collapsed: true,
		},
	])
)
