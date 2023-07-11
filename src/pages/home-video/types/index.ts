export interface IRoot {
	code: number
	data: IData[]
	hasMore: boolean
	updateTime: number
}

export interface IData {
	id: number
	cover: string
	name: string
	playCount: number
	briefDesc?: string
	desc?: string
	artistName: string
	artistId: number
	duration: number
	mark: number
	lastRank: number
	score: number
	subed: boolean
	alias?: string[]
	[props: string]: any
}
