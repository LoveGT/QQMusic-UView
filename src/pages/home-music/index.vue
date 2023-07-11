<template>
	<view class="home-music">
		<!-- <van-search
			shape="round"
			background="#fafafa"
			placeholder="歌曲搜索"
			@clickInput="handleClick"
		></van-search> -->
		<van-field
			left-icon="search"
			disabled
			placeholder="歌曲搜索"
			input-class="inputClass"
			@click-input="handleClick"
		/>
		<!-- 轮播图 -->
		<swiper
			class="swiper"
			circular
			indicator-dots
			autoplay
			:style="{ height: swiperHeight + 'px' }"
		>
			<template v-for="item in banners" :key="item.encodeId">
				<swiper-item flex>
					<image
						mode="widthFix"
						:src="item.imageUrl"
						class="swiper-image"
						@load="handleSwiperImageLoaded"
					></image>
				</swiper-item>
			</template>
		</swiper>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { throttle } from 'lodash-es'
import { queryRectInfo } from '@/utils'
import { getBannerApi } from '@/service/api/music'
// const throttleQueryRect = throttle(queryRectInfo, 500)
// 定义自定义的时间戳函数
const customNow = Date.now.bind(Date)
const banners = ref([])
const swiperHeight = ref<NodeInfo['height']>(0)

const handleClick = () => {
	uni.navigateTo({
		url: '/pages/detail-search/index'
	})
}

const getPageData = () => {
	getBannerApi({}).then((res) => {
		console.log(res)
		banners.value = res.banners
	})
}
const handleSwiperImageLoaded = () => {
	// 在页面中获取图片高度
	throttle(queryRectInfo, 500, {
		leading: true,
		trailing: false,
		'leading-edge': customNow
	})()
	return
	queryRectInfo('.swiper-image').then((rect: NodeInfo) => {
		console.log('first')
		swiperHeight.value = rect.height
	})
}
onLoad(() => {
	getPageData()
})
</script>

<style scoped>
/* :deep(.van-search__content) {
	background: #fff;
} */
.swiper-image {
	width: 750rpx;
}
</style>
