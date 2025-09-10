import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Jachin Personal Blog',
	description: 'Jachin Personal Blog',
	lastUpdated: true,
	search: {
		provider: 'local',
	},
	themeConfig: {
		outline: [1, 6], // 只显示 h2 和 h3 标题
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/markdown-examples' },
			{
				text: '思维导图',
				items: [
					{ text: '总览', link: '/思维导图/总览' },
					{ text:'言语理解' , link: '/思维导图/言语理解' },
					{ text: '判断推理', link: '/思维导图/判断推理' },
					{ text: '资料分析', link: '/思维导图/资料分析' }
				],
			},
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
							{ text: '判断20250804', link: '/判断推理/判断20250804' },
						],
					},
					{
						items: [
							{ text: '判断刷题20250731', link: '/判断推理/判断刷题20250731' },
							{ text: '判断刷题20250803', link: '/判断推理/判断刷题20250803' },
							{ text: '判断刷题20250804', link: '/判断推理/判断刷题20250804' },
							{ text: '判断刷题20250805', link: '/判断推理/判断刷题20250805' },
							{ text: '判断刷题20250807', link: '/判断推理/判断刷题20250807' },
							{ text: '判断刷题20250808', link: '/判断推理/判断刷题20250808' },
							{ text: '判断刷题20250810', link: '/判断推理/判断刷题20250810' },
						],
					},
					{
						items: [
							{ text: '图推20250728', link: '/判断推理/图推20250728' },
							{ text: '图推20250729', link: '/判断推理/图推20250729' },
							{ text: '图推20250730', link: '/判断推理/图推20250730' },
							{ text: '图推20250731', link: '/判断推理/图推20250731' },
							{ text: '图推20250804', link: '/判断推理/图推20250804' },
						],
					},
					{
						items: [
							{ text: '定义20250805', link: '/判断推理/定义20250805' },
							{ text: '定义20250806', link: '/判断推理/定义20250806' },
						],
					},
					{
						items: [{ text: '类比20250807', link: '/判断推理/类比20250807' }],
					},
					{
						items: [{ text: '图推类比总结20250809', link: '/判断推理/图推类比总结20250809' }],
					},
				],
			},
			{
				text: '综合应用',
				items: [
					{ text: '各名师总结', link: '/综合应用/各名师总结' },
					{ text: '天晓综应A', link: '/综合应用/天晓综应A' },
					{ text: '规范词表达', link: '/综合应用/规范词表达' },
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
	markdown:{
		image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true
    }
	}
})
