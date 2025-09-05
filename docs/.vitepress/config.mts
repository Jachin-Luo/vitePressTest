import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jachin Personal Blog",
  description: "Jachin Personal Blog",
  themeConfig: {
     outline: [1, 6], // 只显示 h2 和 h3 标题
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'test', link: '/test' },
      {
        text: "资料分析",
        items: [
          {
            items: [
              { text: "资料20250703", link: "/资料分析/资料20250703" },
              { text: "资料20250704", link: "/资料分析/资料20250704" },
              { text: "资料20250705", link: "/资料分析/资料20250705" },
              { text: "资料20250707", link: "/资料分析/资料20250707" },
              { text: "资料20250708", link: "/资料分析/资料20250708" },
              { text: "资料20250709", link: "/资料分析/资料20250709" },
              { text: "资料20250710", link: "/资料分析/资料20250710" },
              { text: "资料20250712", link: "/资料分析/资料20250712" },
              { text: "资料20250713", link: "/资料分析/资料20250713" },
              { text: "资料20250716", link: "/资料分析/资料20250716" },
              { text: "资料20250719", link: "/资料分析/资料20250719" },
              { text: "资料20250727", link: "/资料分析/资料20250727" },

            ],
          },
          {
            items: [
              { text: "资料刷题20250717", link: "/资料分析/资料刷题20250717" },
              { text: "资料刷题20250718", link: "/资料分析/资料刷题20250718" },
              { text: "资料刷题20250721", link: "/资料分析/资料刷题20250721" },
              { text: "资料刷题20250722", link: "/资料分析/资料刷题20250722" },
              { text: "资料刷题20250724", link: "/资料分析/资料刷题20250724" },
            ],
          },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
