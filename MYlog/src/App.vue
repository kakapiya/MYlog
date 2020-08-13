<template>
  <div id="app">
    <Galaxy>
      <template v-slot:index>
        <Index></Index>
      </template>
    </Galaxy>
  </div>
</template>

<script>
import Galaxy from "./components/commons/Galaxy";
import Header from "./components/commons/Header";
import Index from "./components/commons/Index";

export default {
  name: "App",
  components: {
    Galaxy,
    Index,
    Header,
  },
  data() {
    return {
      message: "我是APP组件",
      counter: 0,
    };
  },
  methods: {},
};
</script>
  
<style>
</style>


