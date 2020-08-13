<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-none"></div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col
        :xs="{span:0,offset:0}"
        :sm="{span:0,offset:0}"
        :md="{span:4,offset:0}"
        :lg="{span:4,offset:2}"
      >
        <div class="grid-content bg-purple">
          <show-profile></show-profile>
        </div>
      </el-col>

      <el-col
        :xs="{span:24,offset:0}"
        :sm="{span:24,offset:0}"
        :md="{span:20,offset:0}"
        :lg="{span:16,offset:0}"
      >
        <div class="post-content bg-none">
          <el-row>
            <el-col offset="10">
              <h1>文章列表</h1>
            </el-col>
          </el-row>
          <el-row>
            <show-blogs></show-blogs>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

import showBlogs from "../components/show-blogs";
import showProfile from "../components/show-profile";

export default {
  name: "Home",
  components: {
    showBlogs,
    showProfile,
  },
};
</script>


<style>
@import "../assets/css/layout.less";
</style>
