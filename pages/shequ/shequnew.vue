<template>
	<view>
		<view v-for="(res, index) in commentList" class="bview">
			<view class="comment"  :key="res.issueid">
				<view class="left"><image :src="res.url" mode="aspectFill"></image></view>
				<view class="right">
					<view class="top">
						<view class="name">{{ res.name }}</view>
						<view class="like" :class="{highlight: res.isLike }">
							<view class="num">{{ res.likeNum }}</view>
							<u-icon v-if="!res.isLike" name="thumb-up" :size="30" color="#9a9a9a" @click="getLike(index)"></u-icon>
							<u-icon v-if="res.isLike" name="thumb-up-fill" :size="30" @click="getLike(index)"></u-icon>
						</view>
					</view>
				</view>
			</view>
			<view class="content" @click="">
				<u-read-more ref="uReadMore" show-height="200" :toggle="true" class="uReadMore">
					<rich-text :nodes="res.contentText"></rich-text>
				</u-read-more>
			</view>
			<view class="foot" slot="foot">
				<u-row gutter="16" >
					<u-col span="3" offset="1">	
						<view class="demo-layout bg-purple" @click="reply(index)"><u-icon name="chat-fill" size="34" color="" label="评论"></u-icon></view>
					</u-col>
					<u-col span="3" offset="1">
						<view class="demo-layout bg-purple-light"><u-icon name="chat-fill" size="34" color="" label="喜欢"></u-icon></view>
					</u-col>
					<u-col span="3" offset="1">
						<view class="demo-layout bg-purple-dark"><u-icon name="chat-fill" size="34" color="" label="收藏"></u-icon></view>
					</u-col>
				</u-row>
				<view class="comment" >
					<view class="right" v-if="isreply==index">
						<view class="reply-box">
							<view v-for="(item, index) in pl" :key="item.index" >
								<view class="username" v-if="item.pplid==''" >{{item.plid}}评论问题:{{item.plconnent}}</view>
								<view v-if="item.pplid==''"  v-for="(item1,index1) in pl" class="right" :key="item1.index1">
									<view v-if="item1.pplid!=''&&item.plid == item1.pplid"  class="username">{{item1.plid}}评论{{item1.pplid}}:{{item1.plconnent}}</view>
									<!-- <view v-for="(item2,index2) in pl">
									<view v-if="item2.pplid == item1.plid"  class="right" :key="item2.index2">
										<view v-if="item2.pplid==item1.plid"  class="username">{{item2.plid}}评论{{item2.pplid}}</view>
										<view v-if="item2.pplid == item1.plid" class="text">评论内容为：{{item2.plconnent}}</view>
									</view>
								<!-- </view> -->
									</view>
							</view>
							<!-- <view class="all-reply" @tap="toAllReply" v-if="res.replyList != undefined">
								共{{ res.allReply }}条回复
								<u-icon class="more" name="arrow-right" :size="26"></u-icon>
							</view> -->
						</view>
						<u-row class="urow1">
							<u-col span="10"><u-input :border="border"></u-input></u-col>
							<u-col span="2" ><u-button type="primary" size="mini">评论</u-button></u-col>
						</u-row>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			commentList: [],
			pl:[],
			pl1:[],
			isreply:null
		};
			
	},
	onLoad() {
		var that =this;
		this.getComment();
		// uni.request({	
		// 	url:"http://172.16.168.18:8001/getissues/1",
		// 	success(e) {
		// 		console.log(e.data[0])
				
		// 			console.log(e.data)
		// 		that.commentList = e.data
		// 	},fail(e) {
		// 		console.log("请求失败!")
		// 	}
		// })
		uni.request({
			url:"http://172.16.168.18:8001/getpls/4",
			success(e) {
				console.log(e.data)
				console.log(e.data[0])
				that.pl = e.data
				that.pl1 = e.data
			},fail(e) {
				console.log("请求失败!")
			}
		})
	},
	methods: {
		reply(index){
			if(this.isreply == index){
				this.$nextTick(()=>{
					this.isreply = null;
				})
			}else{
				this.$nextTick(()=>{
					this.isreply = index;
				})
			}
			console.log(this.isreply)
			
		},
		// 跳转到全部回复
		toAllReply() {
			uni.navigateTo({
				url: '/pages/template/comment/reply'
			});
		},
		// 点赞
		getLike(index) {
			this.commentList[index].isLike = !this.commentList[index].isLike;
			if (this.commentList[index].isLike == true) {
				this.commentList[index].likeNum++;
			} else {
				this.commentList[index].likeNum--;
			}
		},
		// 评论列表
		getComment() {
			this.commentList = [
				{
					id: 1,
					name: '叶轻眉',
					date: '12-25 18:58',
					contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价',
					url: 'https://cdn.uviewui.com/uview/template/SmilingDog.jpg',
					allReply: 12,
					likeNum: 33,
					isLike: false,
					replyList: [
						{
							name: 'uview',
							contentStr: 'uview是基于uniapp的一个UI框架，代码优美简洁，宇宙超级无敌彩虹旋转好用，用它！'
						},
						{
							name: '粘粘',
							contentStr: '今天吃什么，明天吃什么，晚上吃什么，我只是一只小猫咪为什么要烦恼这么多'
						}
					]
				},
				{
					id: 2,
					name: '叶轻眉1',
					date: '01-25 13:58',
					contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
					allReply: 0,
					likeNum: 11,
					isLike: false,
					url: 'https://cdn.uviewui.com/uview/template/niannian.jpg',
				},
				{
					id: 3,
					name: '叶轻眉2',
					date: '03-25 13:58',
					contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的，我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
					allReply: 0,
					likeNum: 21,
					isLike: false,
					allReply: 2,
					url: '',
					replyList: [
						{
							name: 'uview',
							contentStr: 'uview是基于uniapp的一个UI框架，代码优美简洁，宇宙超级无敌彩虹旋转好用，用它！'
						},
						{
							name: '豆包',
							contentStr: '想吃冰糖葫芦粘豆包，但没钱5555.........'
						}
					]
				},
				{
					id: 4,
					name: '叶轻眉3',
					date: '06-20 13:58',
					contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
					url: 'https://cdn.uviewui.com/uview/template/SmilingDog.jpg',
					allReply: 0,
					likeNum: 150,
					isLike: false
				}
			];
		}
	}
};
</script>

<style lang="scss" scoped>
.comment {
	display: flex;
	padding: 20rpx;
	padding-bottom: 0rpx;
	.left {
		image {
			width: 64rpx;
			height: 64rpx;
			border-radius: 50%;
			background-color: #f2f2f2;
		}
	}
	.right {
		flex: 1;
		padding-left: 20rpx;
		font-size: 30rpx;
		.top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 5rpx;
			.name {
				color: #5677fc;
			}
			.like {
				display: flex;
				align-items: center;
				color: #9a9a9a;
				font-size: 26rpx;
				.num {
					margin-right: 4rpx;
					color: #9a9a9a;
				}
			}
			.highlight {
				color: #5677fc;
				.num {
					color: #5677fc;
				}
			}
		}
		.content {
			margin-bottom: 10rpx;
		}
		.reply-box {
			background-color: rgb(242, 242, 242);
			border-radius: 12rpx;
			.item {
				padding: 0rpx;
				border-bottom: solid 2rpx $u-border-color;
				.username {
					font-size: 24rpx;
					color: #999999;
				}
			}
			.all-reply {
				padding: 20rpx;
				display: flex;
				color: #5677fc;
				align-items: center;
				.more {
					margin-left: 6rpx;
				}
			}
		}
		.bottom {
			margin-top: 20rpx;
			display: flex;
			font-size: 24rpx;
			color: #9a9a9a;
			.reply {
				color: #5677fc;
				margin-left: 10rpx;
			}
		}
	}
}
.bview{
	padding: 10rpx;
	margin: 10rpx;
	border: 1rpx #F0F0F0 solid;
	border-radius: 10%;
}
.uReadMore{
	// padding: 20rpx;
}
.foot{
	margin: 10rpx;
	margin-bottom: 0px;
}
.urow1{
	margin: 10rpx;
}
.axc{
	height: 0px;
	width: 0px;
	margin: 0px;
	padding: 0rpx;
}
</style>
