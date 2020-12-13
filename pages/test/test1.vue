<template>
	<view>
	<view v-for="(item,index) in router1">
		<view v-if="!item.children">{{item.name}}</view>
		<view v-else>{{item.name}}
		<Menu :router="item.children"></Menu>
		</view>
	</view>
	</view>
</template>

<script>
  import Menu from './menu.vue'
  export default {
    name: 'home',
	props: ["children"], 
    components: {
      Menu
    },
    data () {
      return {
        router1: [
		  {
			name: "About",
			path: "/about",
			children: [
			  {
				name: "About US",
				path: "/about/us"
			  },
			  {
				name: "About Comp",
				path: "/about/company",
				children: [
				  {
					name: "About Comp A",
					path: "/about/company/A",
					children: [
					  {
						name: "About Comp A 1",
						path: "/about/company/A/1"
					  }
					]
				  }
				]
			  }
			]
		  },
		  {
			name: "Link",
			path: "/link"
		  }
		],// ... 省略菜单数据
      }
    }
  }
</script>
<style>
</style>
