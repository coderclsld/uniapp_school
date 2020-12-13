<template>
	<!-- <view>
		<view v-if="showmessage==true" class="login-forward">
			<image src="../../static/logo.png" class="login-f-img"></image>
			<button class='button' type='primary' open-type="getUserInfo" 
			withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">
			微信授权登录</button>
		</view> -->
	<!-- <view v-else> -->
	<view>
		<image :src="avatarUrl" class="login-img"></image>
		<view class="nickname">
			<text>{{nickName}}</text>
		</view>
		<uni-list>
			<navigator url="mys/changeMessage">
			<uni-list-item  :show-badge="true">修改资料</uni-list-item></navigator>
		
			<navigator url="mys/relation">
			<uni-list-item  :show-badge="true">联系客服</uni-list-item>
			</navigator>
			<navigator url="mys/aboutOur">
			</navigator>
			<uni-list-item  :show-badge="true">关于我们</uni-list-item>
		</uni-list>
	</view>
	</view>
</template>

<script>
	import uniListItem from "../../components/uni-list-item/uni-list-item.vue"
	import uniList from "../../components/uni-list/uni-list.vue"
	export default{	
			data(){
				return {
				coupon:'无',
				nickName:'未登录',
				avatarUrl:'',
				code:'',
				SessionKey: '',
				showmessage:false,
				isCanUse:uni.getStorageSync('iscanUse')||true,
				iflogin:''
				}
		},
		onLoad(options) {
			let self = this;
			uni.getStorage({
				key:'isCanUse',
				success:function(res){
						console.log(res.data)
						self.showmessage = false
						},
						fail(res){
						self.showmessage = true;
						}
			}),
			wx.login({
				success: function(res){
					self.code = res.code
					console.log(self.code)
					}}),
			uni.getUserInfo({
				provider: 'weixin',
				success: function(infoRes) {
					
					console.log(infoRes)
					self.nickName= infoRes.userInfo.nickName; //昵称
				    self.avatarUrl = infoRes.userInfo.avatarUrl; //头像
					 console.log(infoRes)
					 },
					})
				},
		methods: {
			 wxGetUserInfo() {
				let _this = this;
				uni.getUserInfo({
					provider: 'weixin',
					success: function(infoRes) {
						console.log(infoRes)
						_this.nickName= infoRes.userInfo.nickName; //昵称
					    _this.avatarUrl = infoRes.userInfo.avatarUrl; //头像
						 console.log(infoRes)
						 uni.request({
						 	url:'http://localhost:5000',
							method: 'POST',
							data:{
								id: _this.Openid.openid,
								name: infoRes.userInfo.nickName,
								home: infoRes.userInfo.city,
								phoneNumber: ""
							},
							header: {
							        'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
							    },
								success(res) {
								console.log(res);
								},fail() {
								console.log("fail")
							}
						 })
						try {
							uni.setStorageSync('isCanUse', false);//记录是否第一次授权  false:表示不是第一次授权
							uni.getStorage({
								key:'isCanUse',
								success:function(res){
									console.log(res.data)
									console.log("测试")
									if(res.data==false){
									_this.showmessage = false;
									}
								}
							})
						} catch (e) {}
					},
					fail(res) {}
				});
				
			},

			
		},
		components: {
			uniList,
			uniListItem
			}
	} 
</script>

<style lang="scss">
	
.login-f-img{
	// border: 1rpx solid #000000;
	margin-left: 280rpx;
	margin-top: 200rpx;
	padding: 0rpx;
	margin-bottom: 150rpx;
}

.button{
	width: 500rpx;
	border-radius: 40rpx;
}
.login-forward{
	// border: 1rpx #000000 solid;
	margin-top: 100rpx;
}

.nickname{
	border: 1rpx #FFFFFF solid;
	text-align: center;
	
	text{
		font-size:40rpx;
		color: #6D6D72;
		border: #FFFFFF 1rpx solid;
	}	
}

image{
	margin: 0 auto;
	// border: #007AFF 1rpx solid;
	justify-content: center;
	height: 200rpx;
	width: 200rpx;
	border-radius: 100rpx;
}

.login-img{
	margin-top: 50rpx;
	margin-bottom: 20rpx;
	margin-left: 280rpx;
}

.money{
	margin: auto;
}

.coupon{
	margin: auto;
}

.money-coupon{
	// border: 1rpx #C8C7CC solid;
	height: 200rpx;
	width: 100%;
	text-align: center;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-around;
}

</style>
