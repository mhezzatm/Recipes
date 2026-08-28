<template>
  <div class="body-box ml-auto mr-auto pt-4">
    <div class="body-box--items bg-white w-full h-full rounded-t-3xl">
      <MainNav />
    </div>
    <div class="main-view--box">
      <RouterView />
    </div>
    <div><FooterView /></div>
  </div>
</template>

<script>
import MainNav from "@/components/header/MainNav.vue";
import FooterView from "./FooterView.vue";

export default {
  data() {
    return {
      d: [],
      isLoading: false,
    };
  },
  components: { MainNav, FooterView },

  async created() {},
};
</script>

<style scoped>
.body-box {
  width: 114rem;
  overflow: hidden;
}

/**************************/
/* BELOW 1168px */
/**************************/
@media (max-width: 73em) {
  .body-box {
    width: 100%;
    padding: 0;
    overflow: hidden;
  }

  .body-box--items {
    border-radius: 0;
    overflow: hidden;
  }
}
</style>
