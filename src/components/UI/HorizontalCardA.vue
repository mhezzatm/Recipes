<template>
  <div>
    <div class="component">
      <div class="card">
        <div class="image">
          <img :src="recipe.thumbnail_url" alt="" />
        </div>
        <div class="data">
          <h1 class="text-3xl text-emerald-600">{{ recipe.name }}</h1>
          <p class="text-2xl">{{ recipe.description?.length < 200 ? recipe.description : "" }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["recipe"],
  created() {
    // console.log(this.recipe);
    // console.log(this.recipe.description);
    // console.log();
  },
};
</script>

<style scoped>
.component {
  border-bottom: 1px dashed #ccc;
  padding: 2rem;
}
.card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  height: 18.3rem;
}

.image img {
  background-size: cover;
  border-radius: 1rem;
  height: 17.5rem !important;
}

.data {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

/**************************/
/* blow 600px */
/**************************/
@media (max-width: 67em) {
  .card {
    grid-template-columns: 1fr;
    height: auto;
  }
  .image {
    overflow: hidden;
    justify-self: center;
  }

  .data {
    align-items: center;
  }
}
</style>
