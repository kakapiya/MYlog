<template>
  <div class="show-blogs">
    <el-card class="box-card" v-for="post in posts" :key="post.title">
      <div slot="header" class="clearfix">
        <span>{{ post.title }}</span>
      </div>

      <div class="text item">{{ post.body }}</div>
    </el-card>
  </div>
</template>

<script>
import { request } from "../network/request";
export default {
  name: "show-blogs",
  data() {
    return {
      posts: [],
    };
  },
  created() {
    request({ url: "/posts" })
      .then((res) => {
        this.posts = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {},
};
</script>

<style>
@import "../assets/css/style.less";
</style>