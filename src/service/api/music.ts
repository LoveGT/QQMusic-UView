import hyRequest from '../request'

export function getBannerApi(data: any) {
	return hyRequest.get('/banner', data)
}
