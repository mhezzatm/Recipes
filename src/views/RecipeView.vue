<template>
  <div>
    <div class="component">
      <div class="hero">
        <p class="hero-title">{{ recipe.name }}</p>

        <img class="hero-image" :src="recipe.thumbnail_url" alt="" />

        <div class="hero-rating-timing">
          <div>
            <p class="Rating hero-text-sub" v-if="recipe.user_ratings.score">
              Rating: {{ recipe.user_ratings.score }}
            </p>
            <div v-if="recipe.credits">
              <p class="hero-text-sub" v-for="credit in recipe.credits" :key="credit">
                By {{ credit.name }}
              </p>
            </div>
          </div>
          <div>
            <div class="hero-timing">
              <div class="hero-time">
                <p class="hero-text-sub hero-box-top">Time</p>
                <p class="hero-text-sub hero-box-bottom">{{ recipe.cook_time_minutes }} min</p>
              </div>
              <div class="hero-serve">
                <p class="hero-text-sub hero-box-top">Serving</p>
                <p class="hero-text-sub hero-box-bottom">.....</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tags-box">
        <RouterLink
          class="btn-tag hero-text-sub"
          v-for="tag in recipe.tags"
          :key="tag.id"
          :to="{
            name: 'search',
            params: { type: 'tag', value: tag.id, tagname: tag.display_name },
          }"
        >
          {{ tag.display_name }}
        </RouterLink>
      </div>
      <div class="recipe-body">
        <div class="recipe-body--top flex justify-between w-4/5">
          <div class="ingredients w-1/2">
            <p class="ingredients-title">Ingredients</p>
            <ul>
              <li
                v-for="ingredient in recipe.sections[0].components"
                :key="ingredient.id"
                class="ingredient-text"
              >
                - {{ ingredient.raw_text }}
              </li>
            </ul>
          </div>
          <div class="ingredients">
            <p class="ingredients-title nutrition-title">Nutrition</p>
            <div class="flex">
              <ul>
                <li v-for="nutrition in nutritious" :key="nutrition[0]" class="ingredient-text">
                  {{ nutrition[0] }}
                </li>
              </ul>
              <ul>
                <li v-for="nutrition in nutritious" :key="nutrition[1]" class="ingredient-text">
                  {{ nutrition[1] }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="instructions-box">
        <div>
          <p class="instructions-title">Instructions</p>
          <ol>
            <li
              v-for="instruction in recipe.instructions"
              :key="instruction.id"
              class="instruction-text"
            >
              {{ instruction.display_text }}
            </li>
          </ol>
        </div>
      </div>

      <div class="video-box" v-if="recipe.original_video_url">
        <video class="video" controls>
          <source :src="recipe.original_video_url" type="video/mp4" />
          Your browser does not support videos.
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import recipe from "@/assets/lists/tags/singleRecipe/recipe";
import { getRecipeById } from "@/includes/queries.js";

export default {
  data() {
    return {
      recipe: {},
      nutritious: [],
    };
  },
  name: ["RecipeView"],

  async created() {
    try {
      this.recipe = await getRecipeById(this.$route.params.id);
      console.log(this.recipe.id);
      console.log(this.recipe);
    } catch (err) {
      this.$router.push({ name: "home" });
    }
    if (!this.recipe.id) {
      this.$router.push({ name: "home" });
    }

    const keys = Object.keys(recipe.nutrition);
    const values = Object.values(recipe.nutrition);

    keys.forEach((k, index) => {
      if (k !== "updated_at") {
        this.nutritious.push([keys[index], values[index]]);
      }
    });
  },
};
</script>

<style scoped>
.component {
  background-color: white;
  padding: 0 2rem;
}

.hero {
  background-color: rgb(255 237 213);
  padding: 3rem 4rem 0 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.hero-image {
  width: 100%;
  border: 1rem solid white;
}

.hero-title {
  font-size: 4rem;
  --tw-text-opacity: 1;
  color: rgb(5 150 105 / var(--tw-text-opacity));
  align-self: flex-start;
  border-bottom: 3px dashed #999;
  margin-bottom: 2rem;
  margin-left: 2rem;
}

.hero-rating-timing {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
}

.hero-text-sub {
  font-size: 2rem;
}

.hero-text-small {
  font-size: 1.7rem;
}

.hero-timing {
  display: flex;
  gap: 2rem;
}
.hero-time,
.hero-serve {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-box-top {
  --tw-bg-opacity: 1;
  background-color: rgb(249 115 22 / var(--tw-bg-opacity));
  color: #fff;
  padding: 0.5rem 1rem;
  border: 1px solid #999;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
}

.hero-box-bottom {
  padding: 0.5rem 1rem;
  border: 1px solid #999;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}
.nutrition-box {
  grid-column: 1/-1;
}
.hero-nutrition-all {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.tags-box {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
}

.btn-tag {
  --tw-bg-opacity: 1;
  background-color: rgb(255 237 213 / var(--tw-bg-opacity));
  line-height: 1rem;
  transition: all 0.3s;
  padding: 2rem 2.5rem;
  border: 2px solid #fff;
}

.btn-tag:hover,
.btn-tag:active {
  transform: scale(1.05, 1.2);
  background-color: #fff;
  border: 2px solid rgb(255 237 213);
}

.recipe-body {
  display: flex;
}

.ingredients {
  padding: 2rem;
}

.ingredients-title {
  font-size: 3rem;
  background-image: linear-gradient(To right, rgb(253 186 116), #fff);
  padding: 1rem;
}

.ingredient-text {
  font-size: 2rem;
  padding: 0.5rem;
}

.ingredient-text:nth-child(even) {
  background-color: rgb(255 247 237);
}

.instructions-box {
  background-color: rgb(255 237 213);
  padding: 3rem 4rem 0 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
}

.instructions-title {
  font-size: 3rem;
  margin: 1rem;
  border-bottom: 3px dashed #999;
}

.instruction-text {
  font-size: 2rem;
  padding: 0.5rem;
}

.instruction-text:nth-child(odd) {
  background-color: rgb(255 247 237);
}
.instructions-box ol {
  list-style: inside decimal;
}

.video-box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55rem;
}

.video {
  height: 50rem;
}

/**************************/
/* BLOW 768px */
/**************************/
@media (max-width: 48em) {
  .video-box {
    height: auto;
    padding: 1rem 0;
  }
  .video {
    height: auto;
    width: 100%;
  }
  .recipe-body {
    padding: 0;
  }

  .recipe-body--top {
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0rem;
    width: 100%;
  }

  .ingredients {
    width: 100%;
  }
  .nutrition-title {
    width: 18rem;
  }
}

/**************************/
/* BLOW 640px */
/**************************/
@media (max-width: 40em) {
  .hero-rating-timing {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
}
</style>
