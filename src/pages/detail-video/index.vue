<template>
	<view class="detail-video h-screen flex flex-col">
		<video class="w-750 flex-shrink-0" loop :src="mvUrlInfo.url"></video>
		<view class="related-box flex-1 overflow-auto">
			<view
				v-for="item in 200"
				:key="item"
				class="pt-2.5 b-b-solid b-1 text-green-300"
				>{{ item }}</view
			>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import {
	getMvUrlApi,
	getRelatedVideoApi,
	getMvDetailApi
} from '@/service/api/video'

const mvUrlInfo = ref({})
const mvDetail = ref({})
const relatedVideos = ref({})
onLoad((options) => {
	const { id } = options as any
	getPageData(id)
})
const getPageData = (id) => {
	// 获取请求播放地址
	getMvUrlApi({ id }).then((res: any) => {
		mvUrlInfo.value = res.data
	})
	// 请求视频信息
	getMvDetailApi({ id }).then((res: any) => {
		mvDetail.value = res.data
	})
	// 获取相关视频
	getRelatedVideoApi({ id }).then((res: any) => {
		relatedVideos.value = { ...res.data }
	})
}
</script>

<style scoped></style>
