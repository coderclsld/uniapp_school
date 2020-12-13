<template>
	<view class="steps">
		<view class="steps_list">
			<view class="node" :class="{'active-node':item.activity == item.index}" ></view>
			<view class="tail" :class="{'active-tail':item.activity == item.index}" :hidden="item.index == 0"></view>
		</view>
		<view class="wrapper">
			<view class="date">
				{{item.date}}
			</view>
			<view class="content">
				<view class="content_l">
					<image :src="item.src" mode="aspectFill"></image>
				</view>
				<view class="content_r">
					<view class="name">
						<text>人员进出-</text>{{item.name}}
					</view>
					<view class="scan_time">
						扫码时间：2020/20/20 15：15：15
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	/*
	item：没条记录详情
	activity: 当前进度条状态
	wrapperStatus：流程状态对应字段
	wrapperTitle：详情对应字段
	index：进度条排列序号 index == 0代表最后一个没有竖立进度条
	date：时间
	 */
	export default {
		name: 'm-steps',
		data() {
			return {

			}
		},
		props: {
			item: {
				type: Object,
			},

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.steps {
		display: flex;
		background-color: #eee;
		
		.steps_list {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 0 10px;
		}

		.date {
			color: #AAAAAA;
			text-align: left;
			padding-bottom: 10px;
		}
		.wrapper {
			width: 100%;
		}
		.tail {
			height: calc(100% - 15px);;
			width: 2px;
			background-color:  #eee;
		}
		.active-tail {
			width: 2px;
			background-color:  #F87362 !important;
		}

		.active-node {
			background-color: #F87362 !important;
		}

		.node {
			width: 15px;
			height: 15px;
			background-color: #aaa;
			border-radius: 50%;
		}
		.content {
			width: 95%;
			background-color: #fff;
			border-radius: 5px;
			display: flex;
			padding: 10px 0;
			margin-bottom: 10px;

		}

		.content_l {
			width: 25%;
			display: flex;
			align-items: center;
			justify-content: center;

			image {
				width: 50px;
				height: 50px;
				border-radius: 5px;
			}
		}

		.content_r {
			width: 70%;
			
			.name {
				font-weight: 800;
				font-size: 16px;
			}

			.scan_time {
				font-size: 12px;
				color: #aaa;
				margin: 8px 0 0;
			}
		}
	}
</style>
