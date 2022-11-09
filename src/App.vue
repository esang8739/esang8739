<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Index from "./views/Index.vue";

export default {
  name: "Index",
  components: {
    Index,
  },
};
</script>

<style></style>
