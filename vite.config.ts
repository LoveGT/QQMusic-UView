import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [uni(), UnoCSS()]
// })

export default defineConfig(({ command, mode }) => {
	return {
		plugins: [uni(), UnoCSS()]
	}
})
