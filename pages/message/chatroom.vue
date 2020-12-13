<template>
	<view class="info-1">
		<!-- 布局 -->
		<view style="margin-bottom:70px;">
			<!-- 自身回答模式 -->
			<view v-for="(item, key) in list" :key="key">
				<view v-if="item.faname == myname" class="right">
					<view>
						<view style="font-size:12px;color:#999;text-align:right;">{{item.faname}}</view>
						<view class="langcon">{{item.msg}}</view>
					</view>
					<view style="margin-left:10px;"><image src="../../static/youkeer.png" 
						style="width:40px;height:40px;border-radius:50%;border:1px solid #aaa;" /></view>
				</view>
				<view v-else class="left">
					<view><image src="../../static/youkeer.png" 
						style="width:40px;height:40px;border-radius:50%;border:1px solid #aaa;" /></view>
					<view style="margin-left:10px;">
						<view style="font-size:12px;color:#999;">{{item.faname}}</view>
						<view class="langcon">{{item.msg}}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 输入框 -->
		<view class="bottom">
			<view><input type="text" placeholder="请输入你要发送的内容" 
			cursor-spacing="10" v-model="value" /></view>
			<view @click="clickRequest">发送</view>
		</view>
	</view>
</template>
<script>
	
export default {
	data() {
		return {
			send:{},
			myname:'陈霖',
			value: '',
			toid:'2222',
			id:'1111',
			faname:'陈霖',
			shouname:'钟柯杰',
			list: [],
			start: true
		};
	},
	methods: {
		connectSocketInit() {
			var that = this;
			uni.connectSocket({
				url: 'ws://119.29.196.165:5000/test',
				// url :'ws://localhost:5000/test',
				success(){
					that.send['msg']="hello";
					that.send['faname']=that.faname;
					that.send['shouname']=that.shouname;
					that.send['id']=that.id;
					that.send['toid']=that.toid;
					uni.onSocketOpen(function(res) {
						// uni.showToast({
						// 	icon: 'none',
						// 	position: 'bottom',
						// 	title: 'Socket连接已打开！'
						// });
						uni.sendSocketMessage({
							data:JSON.stringify(that.send),
							success() {
								uni.onSocketMessage(function(res){
									var s = res.data;
									console.log(that.send)
									console.log(JSON.parse(s));
									that.list.push(JSON.parse(s));
									console.log(that.list)
									
									// that.tableData.push({ con: s.msg, ss: s.name });
									// console.log("tabledata:"+that.list)
									// uni.showToast({
									// 	icon: 'none',
									// 	position: 'bottom',
									// 	title: '接受到服务器传来的数据'
									// });
								});
							},
							fail() {
								uni.showToast({
									icon: 'none',
									position: 'bottom',
									title: '服务器连接失败'
								});
							}
						});
					});
				},
				fail() {
					console.log("服务器连接失败")
				}
			});
		},
		clickRequest() {
			if (this.value == '') {
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '不能发送空白消息'
				});
			} else {
				var _self = this;
				_self.send['msg']=_self.value;
				_self.send['faname']=_self.faname;
				_self.send['shouname']=_self.shouname;
				_self.send['toid']=_self.toid;
				uni.sendSocketMessage({
					data: JSON.stringify(_self.send),
					success: function() {
						_self.list.push({msg:_self.value,faname:_self.faname,toid:_self.toid,shouname:_self.shouname})
						uni.onSocketMessage(function(res) {
							var ret = res.data;
							_self.list.push(JSON.parse(ret));
							//初始化
							_self.value = '';
						});
					},
					fail: function() {
						uni.showToast({
							icon: 'none',
							position: 'bottom',
							title: '数据发送失败'
						});
					}
				});
			}
		},
		// 关闭socket
		closeSocket() { 
			uni.closeSocket(function(res) {
				console.log('WebSocket 已关闭！');
			});
		}
	},
	onLoad() {
		 this.connectSocketInit();
	},
	// computed: {
	// 	getname() {
	// 		return uni.getStorageSync('name');
	// 	}
	// },
	//关闭socket
	beforeDestroy() {
		this.closeSocket();
	}
};
</script>

<style>
.bottom {
	position: fixed;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
	height: 50px;
	background: #f1f1f1;
	padding-top: 10px;
}
.bottom view {
	height: 30px;
}
.bottom view:nth-child(1) {
	width: 80%;
	margin-left: 10px;
	background-color: #ffffff;
	border-radius: 40px;
	padding: 7px 0 0 10px;
}
.bottom view:nth-child(2) {
	width: 20%;
	font-size: 14px;
	text-align: center;
	height: 37px;
	margin-right: 10px;
	border-radius: 40px;
	color: #ffffff;
	background: #25b0f3;
	line-height: 37px;
}
.center {
	text-align: center;
	font-size: 12px;
	color: #aaa;
	margin-top: 10px;
	letter-spacing: 1px;
}
.left {
	display: flex;
	flex-wrap: nowrap;
	justify-content: flex-start;
	margin-left: 10px;
	margin-top: 10px;
}
.right {
	display: flex;
	flex-wrap: nowrap;
	justify-content: flex-end;
	margin-right: 10px;
	margin-top: 10px;
}
.langcon {
	border: 1px solid #333333;
	font-size: 14px;
	color: #414141;
	height: 30px;
	line-height: 30px;
	border-radius: 7px;
	margin-top: 5px;
	text-align: right;
	padding: 3px 10px 3px 10px;
	background: #f8f8f8;
}
.zs{font-size:12px;letter-spacing:1px;color:#AAAAAA;margin-top:5px;text-align:center;}
</style>
