import hyRequest from '../request'

export function getTopMvApi(data: any = { offset: 0, limit: 10 }) {
	return hyRequest.get('/top/mv', data)
}

export function getMvUrlApi(data: any) {
	return hyRequest.get('/mv/url', data)
}

export function getMvDetailApi(data: any) {
	return hyRequest.get('/mv/detail', data)
}

export function getRelatedVideoApi(data: any) {
	return hyRequest.get(`/related/allvideo`, data)
}
