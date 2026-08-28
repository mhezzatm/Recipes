<template>
  <div class="relative">
    <SlideShow />
    <HomeBody />
  </div>
</template>

<script>
import HomeBody from "@/components/home/HomeBody.vue";
import SlideShow from "@/components/home/SlideShow.vue";

export default {
  components: { SlideShow, HomeBody },
};
</script>

<style scoped></style>
