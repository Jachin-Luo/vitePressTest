依赖说明

```json
{
	"devDependencies": {
		"medium-zoom": "^1.1.0",
		"vitepress": "^1.6.4",
		"vitepress-sidebar": "^1.33.1" //自动侧边栏
	},
	"dependencies": {
		"markdown-it-mathjax3": "^4.3.2", //识别数学公式
		"vitepress-markmap-preview": "^0.2.0" //渲染思维导图
	}
}
```

## 1.巨坑：数学公式不展示

### 1.1 安装插件

```cmd
pnpm install markdown-it-mathjax3@^4.3.2
```

### 2.1 使用插件 config 配置

```ts
import mathjax3 from 'markdown-it-mathjax3'
export default defineConfig({
	markdown: {
		config: (md) => {
			md.use(mathjax3)
		},
	},
})
```

## 2.思维导图展示

### 1.1 安装插件

```cmd
pnpm install vitepress-markmap-preview
```

### 2.1 使用插件 config 配置

```ts
import { vitepressMarkmapPreview } from 'vitepress-markmap-preview'
export default defineConfig({
	markdown: {
		config: (md) => {
			vitepressMarkmapPreview(md)
		},
	},
})
```

### 3.自动侧边栏

快速开始
https://vitepress-sidebar.cdget.com/zhHans/guide/getting-started

配置项说明
https://vitepress-sidebar.cdget.com/zhHans/guide/options
