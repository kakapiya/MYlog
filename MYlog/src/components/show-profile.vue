<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>个人资料</span>
    </div>
    <div>地址：{{this.user}}</div>
    <div>地址：{{this.user}}</div>
    <div>地址：{{this.user}}</div>
    <div>地址：{{this.user}}</div>
  </el-card>
</template>

<script>
import { request } from "../network/request";
export default {
  name: "show-profile",
  created() {
    request({ url: "/users" })
      .then((res) => {
        this.user = res.data[0].address.city;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      user: "",
    };
  },
  methods: {},
};
</script>

<style>
@import "../assets/css/style.less";
</style>