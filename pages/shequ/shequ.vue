<template>
	<view>
		<view v-for="(item,num) in list"  class="u-padding-20"	>
			<u-grid :col="1">
				<u-avatar :src="src" class="img1">	</u-avatar>
				<u-avatar :text="text" class="text1"></u-avatar>
			</u-grid>
			<!-- <u-card :title="item.id" :sub-title="subTitle" :thumb="thumb"> -->
				<view class="u-line-1 u-font-30 cl-font" slot="body">
					{{item.title}}}
				</view>
				<view class="" slot="body">
					<u-read-more ref="uReadMore" show-height="200" :toggle="true">
						<!-- <u-parse :html="item.content" @load="parseLoaded"></u-parse> -->
						<rich-text :nodes="item.content"></rich-text>
					</u-read-more>	
				</view>
				<view class="" slot="foot">	
					<u-row gutter="16" >
						<u-col span="3" offset="1">	
							<view class="demo-layout bg-purple"><u-icon name="chat-fill" size="34" color="" label="评论"></u-icon></view>
						</u-col>
						<u-col span="3" offset="1">
							<view class="demo-layout bg-purple-light"><u-icon name="chat-fill" size="34" color="" label="喜欢"></u-icon></view>
						</u-col>
						<u-col span="3" offset="1">
							<view class="demo-layout bg-purple-dark"><u-icon name="chat-fill" size="34" color="" label="收藏"></u-icon></view>
						</u-col>
					</u-row>
				</view>
			<!-- </u-card> -->
		</view>
	</view>
</template>
<script>
	export default {
		components: {},
		data() {	
			return {
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
								text: '无头像',
				content: `山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
				苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
				无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`,
				list: [{
					id: 0,
					title: '盐究一下 | 《玩物》根据“张紫妍”事件改编，讲述娱乐圈的丑闻风暴！！',
					content: '“她”香消玉殒，“她”的死撕开了娱乐圈的光鲜表皮。一个女明星的死亡令整个社会哗然，寻着她离去的轨迹，一幅幅丑陋的面孔和事件浮出水面...查该案件的热血警察和女检察官逐渐深入到事件的敏感核心，却收到来自现实各个方面的压力，困阻重重。真相即将曝光，由此而起的风波也来势凶猛…',
					shadow: true,
					note: '',
					extra: '',
					thumbnail: ''

				}, {
					id: 1,
					title: '大家学习 Java ，是看书学习快，还是看视频学习快呢 ？',
					content: '大家学习 Java ，是看书学习快，还是看视频学习快呢 ？',
					shadow: true,
					note: '',
					extra: '额外信息',
					thumbnail: ''
				}, {
					id: 2,
					title: '魅族17，小米10，一加8买哪台，希望大佬们解答，学生党，不想被坑?',
					content: "可以负责的说，无论你买哪一台，都不会被坑，因为你选的3个机型都没什么特别大的槽点。最重要是知道自己需要什么样的手机先从小米10说起吧:在这几台当中，小米10的配置是最均衡，也是我最推荐的。",
					shadow: true,
					note: 'Tips',
					extra: '额外信息',
					thumbnail: ''
				}, {
					id: 3,
					title: '计算机专业必读哪些经典书籍？',
					content: '黑皮书不用我多说了吧，我相信几乎不管是哪个方向，是在校生还是工作了1年3年5年甚至大龄程序员，你都或多或少的接触过黑皮书，但是我这几天偶然有兴趣搜了一下回答，不管是知乎也好还是其他各大平台排名前几的文章，知乎看到了一个高赞也就推荐了大概十本左右的黑皮书，链接如下',
					shadow: true,
					note: 'Tips',
					extra: '额外信息',
					thumbnail: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
				}],
				Tips: ['喜欢', '评论', '分享'],
				kebiao:[],
			}
		},
		methods: {
			parseLoaded() {
				this.$refs.uReadMore.init();
			},
			clickCard() {
				uni.showToast({
					title: '点击卡片',
					icon: 'none'
				})
			},
			footerClick(types) {
				uni.showToast({
					title: types,
					icon: 'none'
				})
			},
			connectspider(){
				var that = this;
				uni.request({
					url:'http://172.16.168.175:8000/kebiao?username=1840915119&password=110120',
					methods:'GET',
					success(res){
						that.kebiao = res.data;
						console.log(that.kebiao)
					},
					fail(){
						console.log("fail")
					}
				})
		}
	},
	onLoad() {
		this.connectspider();
	}
}
</script>

<style>
	.u-card-wrap { 
			background-color: $u-bg-color;
			padding: 1px;
		}
		
		.u-body-item {
			font-size: 32rpx;
			color: #333;
			padding: 20rpx 10rpx;
		}
			
		.u-body-item image {
			width: 120rpx;
			flex: 0 0 120rpx;
			height: 120rpx;
			border-radius: 8rpx;
			margin-left: 12rpx;
		}
		/* .wrap {
				padding: 0rpx;
			}
		
			.u-row {
				margin: 0rpx 0;
			}
		
			.demo-layout {
				height: 80rpx;
				border-radius: 8rpx;
			} */
			.cl-font{
				font-weight: 700;
				padding: 5rpx;
			}
			.text1{
				/* border: #000000 1rpx solid; */
			}
			.img1{
				/* border: #000000 1rpx solid; */
			}
</style>