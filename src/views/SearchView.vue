<template>
  <div class="bg-white">
    <div class="px-8">
      <div class="component">
        <SearchMain />
        <RecipeOfMonth class="recipe-of-month" />
      </div>
    </div>
  </div>
</template>

<script>
import RecipeOfMonth from "@/components/multi/RecipeOfMonth.vue";
import SearchMain from "@/components/search/SearchMain.vue";
export default {
  components: { RecipeOfMonth, SearchMain },
};
</script>

<style scoped>
.component {
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 2rem;
}

/**************************/
/* blow 1072px */
/**************************/
@media (max-width: 67em) {
  .component {
    display: block;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
  }
}
</style>
