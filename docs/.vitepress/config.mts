import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Jachin Personal Blog',
	description: 'Jachin Personal Blog',
	themeConfig: {
		outline: [1, 6], // 只显示 h2 和 h3 标题
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/markdown-examples' },
			{
				text: '资料分析',
				items: [
					{
						items: [
							{ text: '资料20250703', link: '/资料分析/资料20250703' },
							{ text: '资料20250704', link: '/资料分析/资料20250704' },
							{ text: '资料20250705', link: '/资料分析/资料20250705' },
							{ text: '资料20250707', link: '/资料分析/资料20250707' },
							{ text: '资料20250708', link: '/资料分析/资料20250708' },
							{ text: '资料20250709', link: '/资料分析/资料20250709' },
							{ text: '资料20250710', link: '/资料分析/资料20250710' },
							{ text: '资料20250712', link: '/资料分析/资料20250712' },
							{ text: '资料20250713', link: '/资料分析/资料20250713' },
							{ text: '资料20250716', link: '/资料分析/资料20250716' },
							{ text: '资料20250719', link: '/资料分析/资料20250719' },
							{ text: '资料20250727', link: '/资料分析/资料20250727' },
						],
					},
					{
						items: [
							{ text: '资料刷题20250717', link: '/资料分析/资料刷题20250717' },
							{ text: '资料刷题20250718', link: '/资料分析/资料刷题20250718' },
							{ text: '资料刷题20250721', link: '/资料分析/资料刷题20250721' },
							{ text: '资料刷题20250722', link: '/资料分析/资料刷题20250722' },
							{ text: '资料刷题20250724', link: '/资料分析/资料刷题20250724' },
						],
					},
				],
			},
			{
				text: '判断推理',
				items: [
					{
						items: [
							{ text: '判断20250714', link: '/判断推理/判断20250714' },
							{ text: '判断20250715', link: '/判断推理/判断20250715' },
							{ text: '判断20250716', link: '/判断推理/判断20250716' },
							{ text: '判断20250717', link: '/判断推理/判断20250717' },
							{ text: '判断20250718', link: '/判断推理/判断20250718' },

							{ text: '判断20250720', link: '/判断推理/判断20250720' },
							{ text: '判断20250721', link: '/判断推理/判断20250721' },
							{ text: '判断20250722', link: '/判断推理/判断20250722' },
							{ text: '判断20250723', link: '/判断推理/判断20250723' },
							{ text: '判断20250724', link: '/判断推理/判断20250724' },

							{ text: '判断20250726', link: '/判断推理/判断20250726' },
							{ text: '判断20250803', link: '/判断推理/判断20250803' },
						],
					},
					{
						items: [
							{ text: '判断刷题20250731', link: '/判断推理/判断刷题20250731' },
							{ text: '判断刷题20250803', link: '/判断推理/判断刷题20250803' },
						],
					},
					{
						items: [
							{ text: '图推20250728', link: '/判断推理/图推20250728' },
							{ text: '图推20250729', link: '/判断推理/图推20250729' },
							{ text: '图推20250730', link: '/判断推理/图推20250730' },
							{ text: '图推20250731', link: '/判断推理/图推20250731' },
						],
					},
				],
			},
			{
				text: '综合应用',
				items: [
					{ text: '各名师总结', link: '/综合应用/各名师总结' },
					{ text: '天晓综应A', link: '/综合应用/天晓综应A' },
				],
			},
		],

		// sidebar: [
		//   {
		//     text: 'Examples',
		//     items: [
		//       { text: 'Markdown Examples', link: '/markdown-examples' },
		//       { text: 'Runtime API Examples', link: '/api-examples' }
		//     ]
		//   }
		// ],

		socialLinks: [{ icon: 'github', link: 'https://github.com/Jachin-Luo/vitePressTest' }],
	},
})
