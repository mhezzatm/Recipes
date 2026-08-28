<template>
  <RouterLink
    :to="{
      name: 'search',
      params: { type: 'name', value: data.cardRouter ? data.cardRouter : 'salad' },
    }"
    class="relative cursor-pointer"
  >
    <div
      class="card"
      :style="{ 'box-shadow': !hover ? '3px 6px 0px ' + data.color : '5px 8px 5px ' + data.color }"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <h1 class="title text-3xl" :style="{ 'background-color': data.color }">{{ data.title }}</h1>
      <div class="title-after" :style="{ 'background-color': data.color }"></div>
      <div class="title-before" :style="{ 'background-color': data.color }"></div>
      <div class="body text-3xl p-4">
        <img :src="data.url" alt="" class="image mb-4 h-48 object-cover" />
        <div class="text-2xl">
          {{ data.description }}
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
    };
  },
  props: ["data"],
};
</script>

<style scoped>
.card {
  box-shadow: 5px 10px 9px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  position: relative;
  height: 100%;
  transition: all 0.3s;
}

.card:hover {
  transform: translate(-2px, -2px);
}
.title {
  color: #fff;
  width: 90%;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.6rem;
}

.title-after {
  content: "";
  position: absolute;
  height: 7.7rem;
  width: 3.1rem;
  left: 0;
  top: 0;
  transform: translateX(-100%);
  border-top-left-radius: 50%;
  border-bottom-left-radius: 40%;
}

.title-before {
  content: "";
  filter: brightness(55%);
  position: absolute;
  height: 3.85rem;
  width: 3.1rem;
  left: 0;
  top: 0;
  transform: translate(-100%, 100%);
  z-index: 1;
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
}

/**************************/
/* BELOW 1072px */
/**************************/
@media (max-width: 67em) {
  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .image {
    width: 100%;
    height: auto;
  }

  .title-after {
    display: none;
  }

  .title-before {
    display: none;
  }
}
</style>
