<template>
  <div class="main-bg"></div>
  <MainView />
</template>

<script setup>
import MainView from "@/views/MainView.vue";
</script>

<style scoped>
.main-bg {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -50;
  background-image: url("/images/background/vegetables_lots_sauce_82838_1920x1080.jpg");
  background-size: cover;
  background-position: right bottom;
  overflow: hidden;
}
</style>
