<template>
  <div id="app">
    <el-container>
      <el-header>
        <router-view name="header"></router-view>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        footer
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
