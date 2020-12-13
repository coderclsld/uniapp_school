<template>
  <ul class="wrapper">
    <!-- 遍历 router 菜单数据 -->
    <menuitem :key="index" v-for="(item, index) in router">
      <!-- 对于没有 children 子菜单的 item -->
      <span class="item-title" v-if="!item.children">{{item.name}}</span>

      <!-- 对于有 children 子菜单的 item -->
      <template v-else>
        <span @click="handleToggleShow">{{item.name}}</span>
        <!-- 递归操作 -->
        <menu :router="item.children" v-if="toggleShow"></menu>
      </template>
    </menuitem>
  </ul>
</template>

<script>
  import MenuItem from "./menuItem";

  export default {
    name: "Menu",
    props: ["router"], // Menu 组件接受一个 router 作为菜单数据
    components: { MenuItem },
    data() {
      return {
        toggleShow: false // toggle 状态
      };
    },
	onLoad() {
		console.log(router)
	},
    methods: {
      handleToggleShow() {
        // 处理 toggle 状态的是否展开子菜单 handler
        this.toggleShow = !this.toggleShow;
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .wrapper {
    cursor: pointer;

    .item-title {
      font-size: 16px;
    }
  }
</style>
