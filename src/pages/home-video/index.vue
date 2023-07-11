<template>
	<view class="video flex justify-around flex-wrap">
		<template v-for="item in topMVs" :key="item.id">
			<VideoItem :item="item" @click="onClickItem(item)"></VideoItem>
		</template>
	</view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { onReachBottom, onPullDownRefresh, onReady } from '@dcloudio/uni-app'
import { getTopMvApi } from '@/service/api/video'
import VideoItem from '@/components/video/video-item.vue'
import { IRoot, IData } from './types'
const topMVs = ref<IData[]>([])
const params = reactive({
	offset: 0,
	limit: 10
})
const hasMore = ref(true)
const getList = () => {
	getTopMvApi(params).then((res: IRoot) => {
		topMVs.value = [...topMVs.value, ...res.data]
		hasMore.value = res.hasMore
	})
}
const onClickItem = (item: IData) => {
	console.log(item.id)
	uni.navigateTo({
		url: '/pages/detail-video/index?id=' + item.id
	})
}
onReady(() => {
	getList()
})
onReachBottom(() => {
	if (!hasMore.value) return
	console.log('first')
	params.offset++
	getList()
})
onPullDownRefresh(() => {
	params.offset = 0
	topMVs.value = []
	getList()
})
</script>

<style scoped></style>
