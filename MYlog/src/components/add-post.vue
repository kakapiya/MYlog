<template>
  <div class="add-post">
    <!-- 表单部分 -->
    <el-form>
      <el-form-item>
        <el-form-item label="文章标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item label="文章分类">
        <el-select v-model="form.categories" placeholder="请选择活动区域">
          <el-option label="生活" value="life"></el-option>
          <el-option label="学习" value="study"></el-option>
          <el-option label="技术" value="tech"></el-option>
          <el-option label="兴趣" value="interest"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="添加标签">
        <el-checkbox-group v-model="form.tags">
          <el-checkbox label="代数" name="tags"></el-checkbox>
          <el-checkbox label="算法" name="tags"></el-checkbox>
          <el-checkbox label="图论" name="tags"></el-checkbox>
          <el-checkbox label="数论" name="tags"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        accept=".md"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传mardown(.md)文件，且不超过500kb</div>
      </el-upload>

      <el-form-item label="文章简介">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    {{form.info}}
  </div>
</template>

<script>
import { request } from "../network/request";

export default {
  name: "add-post",
  data() {
    return {
      form: {
        title: "",
        categories: {},
        tags: [],
        desc: "",
        info: "",
      },
    };
  },
  methods: {
    onSubmit() {
      request({ url: "/posts" })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
@import "../assets/css/style.less";
</style>