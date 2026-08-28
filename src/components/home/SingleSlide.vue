<template>
  <div>
    <div class="component flex">
      <div
        class="slide-box slide-box-1 overflow-hidden relative"
        :style="{ backgroundImage: 'url(' + mainRecipe.thumbnail_url + ')' }"
        @click="$router.push({ name: 'recipe', params: { id: mainRecipe.id } })"
      >
        <p class="main-recipe--text absolute left-16 bottom-14 p-7 text-5xl">
          {{ mainRecipe.name }}
        </p>
      </div>

      <div class="main-sub-box-1 justify-between right-16 flex flex-col p-5">
        <p class="text-white pb-4 text-3xl">{{ title }}</p>
        <div>
          <div
            class="sub-meal-box-1--main overflow-hidden relative"
            :style="{ backgroundImage: 'url(' + subRecipes[1].thumbnail_url + ')' }"
            @click="$router.push({ name: 'recipe', params: { id: subRecipes[1].id } })"
            :alt="subRecipes[1].name"
          ></div>
          <p class="sub-meal-text-1 text-white py-4">{{ subRecipes[1].name }}</p>
        </div>
        <div class="flex items-center justify-between gap-4">
          <div class="left h-full w-1/2">
            <div
              class="bg-cover h-52 bg-bottom"
              :style="{ backgroundImage: 'url(' + subRecipes[0].thumbnail_url + ')' }"
              @click="$router.push({ name: 'recipe', params: { id: subRecipes[0].id } })"
              :alt="subRecipes[0].name"
            ></div>
            <p class="sub-meal-text-1 text-white py-4 text-center">
              {{ subRecipes[0].name }}
            </p>
          </div>
          <div class="right h-full w-1/2">
            <div
              class="bg-cover h-52 bg-bottom"
              :style="{ backgroundImage: 'url(' + subRecipes[2].thumbnail_url + ')' }"
              @click="$router.push({ name: 'recipe', params: { id: subRecipes[2].id } })"
              :alt="subRecipes[2].name"
            ></div>
            <p class="sub-meal-text-1 text-white py-4 text-center">
              {{ subRecipes[2].name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mainRecipe", "subRecipes", "title", "index", "xPosition"],
  created() {},
};
</script>

<style scoped>
.slide-box {
  height: 50rem;
  background-size: cover;
  background-position: bottom;
  width: 70%;
}

.main-recipe--text {
  background-color: rgba(255, 255, 255, 0.8);
}

.main-sub-box-1 {
  background-color: rgba(0, 0, 0, 0.8);
  width: 30%;
}

.sub-meal-box-1--main {
  height: 18rem;
  background-size: cover;
  background-position: bottom;
}

.sub-meal-text-1 {
  font-size: 1.8rem;
}

/**************************/
/* BELOW 992px */
/**************************/
@media (max-width: 62em) {
  .component {
    flex-direction: column;
  }

  .slide-box {
    background-size: cover;
    background-position: center;
    width: 100%;
  }

  .main-sub-box-1 {
    background-color: rgba(0, 0, 0, 0.8);
    display: none;
  }
}

/**************************/
/* BELOW 640px */
/**************************/
@media (max-width: 40em) {
  .main-recipe--text {
    width: 100%;
    left: 0;
    padding: 1rem;
  }
}
</style>
