<template>
	<view class="tabbar-1">
		<view class="box" @click="info" v-for="(item,num) in list" v-bind:key=num>
			<view><image src="../../static/morepeople.png" style="width:50px;height:50px;border-radius:50%;" /></view>
			<view style="margin-left:10px;">
				<view style="font-size:16px;margin:5px 0 0 0;">{{item.fromuser}}</view>
				<view style="font-size:14px;color:#999;">{{item.content}}日林</view>
			</view>
			<!-- <view class="top">
				<span>置顶</span>
			</view> -->
		</view>
		
		<!-- <view class="box" @click="info">
			<view><image src="../../static/morepeople.png" style="width:50px;height:50px;border-radius:50%;" /></view>
			<view style="margin-left:10px;">
				<view style="font-size:16px;margin:5px 0 0 0;">多人群聊</view>
				<view style="font-size:14px;color:#999;">点击进行会话</view>
			</view> -->
			<!-- <view class="top">
				<span>置顶</span>
			</view> -->
		<!-- </view> -->
		<!-- <view class="call">欢迎用户</view> -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			list:[
				{fromuser:"钟科杰",content:"你好",time:"2020-10-01",islook:"true"},
				{fromuser:"陈霖",content:"你好",time:"2020-10-01",islook:"true"},
				{fromuser:"叶勇",content:"你好",time:"2020-10-01",islook:"true"},
				{fromuser:"宝哥",content:"你好",time:"2020-10-01",islook:"true"}
			]
		};
	},
	methods: {
		// navigate
		info() {
			uni.navigateTo({
				url:"./chatroom"
			});
		}
	},
	onLoad() {
		this.name = uni.getStorageSync('name');
	}
};
</script>

<style>
.box {
	border-bottom: 1px solid #f8f8f8;
	padding: 5px 10px 5px 10px;
}
.box {
	display: flex;
	flex-wrap: nowrap;
	justify-content: start;
}
.call {
	font-size: 12px;
	color: #999;
	text-align: center;
	margin-top: 20px;
	letter-spacing: 1px;
}
.top{
	font-size:12px;
	color:#DD524D;
	width:50%;
	text-align:right;
}
.top span{
	border:1px solid #DD524D;
	display:inline-block;
	padding:2px 7px 2px 7px;
	border-radius:7px;
	margin-top:8px;
}
</style>