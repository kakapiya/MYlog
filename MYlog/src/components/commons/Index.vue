<template>
  <div class="index" @click="tohome" title="点击进入博客"></div>
</template>

<script>
export default {
  created() {},
  components: {},
  methods: {
    tohome() {
      this.$router.replace("/home");
    },
  },
};
</script>

<style>
@import "../../assets/css/index.css";
</style>