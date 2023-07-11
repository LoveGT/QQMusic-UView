/**
 *
 * @param selector 选择器
 * @returns
 * @description  在页面中获取dom信息（如宽高）
 */
export const queryRectInfo = (selector: string) => {
	console.log('inner')
	return new Promise((resolve) => {
		uni
			.createSelectorQuery()
			.select(selector)
			.boundingClientRect(function (rect: NodeInfo) {
				resolve(rect)
			})
			.exec()
	})
}
