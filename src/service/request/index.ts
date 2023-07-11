const BASE_URL = 'https://coderwhy-music.vercel.app/'

class HYRequest {
	request(url: string, method: 'GET' | 'POST', data: any) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: BASE_URL + url,
				method,
				data,
				success: function (res) {
					resolve(res.data)
				},
				fail: function (err) {
					reject(err)
				}
			})
		})
	}

	get(url: string, data: any) {
		return this.request(url, 'GET', data)
	}
	post(url: string, data: any) {
		return this.request(url, 'POST', data)
	}
}

const hyRequest = new HYRequest()

export default hyRequest
