/**
 * 播放量格式化
 * @param count
 * @returns
 */
export function formatCount(count: number) {
	if (count > 100000000) {
		return (count / 100000000).toFixed(1) + '亿'
	} else if (count > 10000) {
		return (count / 10000).toFixed(1) + '万'
	} else {
		return count + ''
	}
}

// 12 -> 12
// 5 -> 05
function padLeftZero(time) {
	time = time + ''
	return time.padStart(2, '0')
	// return ('00' + time).slice(time.length)
}
/**
 * 播放时长格式化
 * @param duration
 * @returns
 */
export function formatDuration(duration) {
	duration = duration / 1000
	// 488s / 60 = 8.12
	const minute = Math.floor(duration / 60)
	// 488s % 60
	const second = Math.floor(duration) % 60

	return padLeftZero(minute) + ':' + padLeftZero(second)
}
