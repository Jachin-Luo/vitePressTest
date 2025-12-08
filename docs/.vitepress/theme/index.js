import DefaultTheme from 'vitepress/theme'
import './custom.css'
import MyLayout from './Layout.vue'

import { initComponent } from 'vitepress-markmap-preview/component'
import 'vitepress-markmap-preview/dist/index.css'

import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

// import 'markdown-it-mathjax3/mathjax3.css'

export default {
	extends: DefaultTheme,
	// 使用注入插槽的包装组件覆盖 Layout
	Layout: MyLayout,
	enhanceApp({ app }) {
		initComponent(app)
	},
	setup() {
		const route = useRoute()
		const initZoom = () => {
			// mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
			mediumZoom('.main img', { background: 'var(--vp-c-bg)' }) // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
		}
		onMounted(() => {
			initZoom()
		})
		watch(
			() => route.path,
			() => nextTick(() => initZoom())
		)
	},
}
