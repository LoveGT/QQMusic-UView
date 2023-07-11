// uno.config.ts
import presetWeapp from 'unocss-preset-weapp'
import {
	extractorAttributify,
	transformerClass
} from 'unocss-preset-weapp/transformer'

const { presetWeappAttributify, transformerAttributify } =
	extractorAttributify()
import { defineConfig } from 'unocss'

export default defineConfig({
	presets: [
		// https://github.com/MellowCo/unocss-preset-weapp
		presetWeapp(),
		// attributify autocomplete
		presetWeappAttributify()
	],
	shortcuts: [
		{
			'border-base': 'border border-gray-500_10',
			center: 'flex justify-center items-center'
		}
	],

	transformers: [
		// https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
		transformerAttributify(),

		// https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
		transformerClass()
	]
})
