<template>
	<view>
		<view class="comment" v-for="(res, index) in commentList" :key="res.id">
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
				<view class="content">
				<u-read-more ref="uReadMore" show-height="150" :toggle="true">
					<rich-text :nodes="res.contentText"></rich-text>
				</u-read-more></view>
				<view class="reply-box">
					<view class="item" v-for="(item, index) in res.replyList" :key="item.index">
						<view class="username">{{ item.name }}</view>
						<view class="text">{{ item.contentStr }}</view>
					</view>
					<view class="all-reply" @tap="toAllReply" v-if="res.replyList != undefined">
						共{{ res.allReply }}条回复
						<u-icon class="more" name="arrow-right" :size="26"></u-icon>
					</view>
				</view>
				<view class="bottom">
					{{ res.date }}
					<view class="reply">回复</view>
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
			isreply:null
		};
			
	},
	onLoad() {
		this.getComment();
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
				padding: 20rpx;
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
</style>
