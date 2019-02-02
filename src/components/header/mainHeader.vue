<template>
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">商品列表页</el-menu-item>
      <el-menu-item index="3">购物车</el-menu-item>
      <el-menu-item index="4">
        <router-link to="/about" target="_blank">关于我们</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'MainHeader',
  data() {
    return {
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if (key == 1) {
        this.$router.push({
          name: 'index'
        });
      } else if (key == 2) {
        this.$router.push({
          name: 'product'
        });
      } else if (key == 3) {
        this.$router.push({
          name: 'car'
        });
      } else if (key == 4) {
        // this.$router.push({
        //   name: 'about'
        // });
      }
    }
  }
};
</script>
<style lang="scss">
</style>