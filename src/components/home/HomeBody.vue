<template>
  <div class="pt-8 bg-white">
    <div class="home-body p-8 pl-16">
      <div class="left">
        <HomeBodyGrid />
      </div>
      <div class="right">
        <RecipeOfMonth />
      </div>
    </div>
  </div>
</template>

<script>
import HomeBodyGrid from "./HomeBodyGrid.vue";
import RecipeOfMonth from "@/components/multi/RecipeOfMonth.vue";

export default { components: { HomeBodyGrid, RecipeOfMonth } };
</script>

<style scoped>
.home-body {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

/**************************/
/* BELOW 1072px */
/**************************/
@media (max-width: 67em) {
  .home-body {
    display: flex;
    padding: 2rem;
    flex-direction: column;
  }
}
</style>
