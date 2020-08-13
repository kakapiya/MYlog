<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">文章分类</template>
        <el-menu-item index="2-1">生活</el-menu-item>
        <el-menu-item index="2-2">学习</el-menu-item>
        <el-menu-item index="2-3">兴趣</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">工作</template>
          <el-menu-item index="2-4-1">前端开发</el-menu-item>
          <el-menu-item index="2-4-2">计算机网络</el-menu-item>
          <el-menu-item index="2-4-3">算法</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">项目经验</template>
        <el-menu-item index="3-1">
          <a href="https://kakapiya.github.io/demo/" target="_blank">demo1</a>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="4">关于我</el-menu-item>
      <el-menu-item index="5" id="login">登录</el-menu-item>
    </el-menu>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      path: {
        "1": "/",
        "4": "/about",
        "5": "/login",
      },
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.replace(this.path[key]);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login {
  float: right;
}
</style>
