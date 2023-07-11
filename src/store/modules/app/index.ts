import { defineStore } from 'pinia'

interface AppStore {
	counter: number
}
export const useAppStore = defineStore('app-store', {
	state: (): AppStore => ({
		counter: 0
	}),
	actions: {
		increment(n: number) {
			this.counter += n
		},
		decrement(n: number) {
			this.counter -= n
		}
	}
})
