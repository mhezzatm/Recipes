<template>
  <div v-if="isLoading" class="component-box overflow-hidden relative">
    <SingleSlide
      v-for="(recipe, index) in recipes"
      :mainRecipe="recipe.mainRecipe"
      :subRecipes="recipe.subRecipes"
      :title="recipe.title"
      :index="index"
      :key="recipe.id"
      :xPosition="xPosition"
      :style="{ transform: 'translateX(' + xPosition[index] + '%)' }"
      class="absolute top-0 left-0 w-full component"
    />
    <div class="left" @click="goLeft">&gt;</div>
    <div class="right" @click="goRight">&lt;</div>
  </div>
</template>

<script>
import SingleSlide from "./SingleSlide.vue";
import {
  getMainLunchRecipes,
  getMainMeatRecipes,
  getMainBreakfastRecipes,
  getMainDinnerRecipes,
  getMainHealthyRecipes,
} from "@/includes/queries";

export default {
  data() {
    return {
      recipes: [],
      isLoading: false,
      xPosition: [0, 100, 200, 300, 400],
      state1: [0, 100, 200, 300, 400],
      state2: [-100, 0, 100, 200, 300],
      state3: [-200, -100, 0, 100, 200],
      state4: [-300, -200, -100, 0, 100],
      state5: [-400, -300, -200, -100, 0],
      statesArr: [],
      stateIndex: 0,
      timeIntervalId: 0,
    };
  },
  methods: {
    getRecipes() {
      this.recipes.push(getMainBreakfastRecipes());
      this.recipes.push(getMainLunchRecipes());
      this.recipes.push(getMainDinnerRecipes());
      this.recipes.push(getMainMeatRecipes());
      this.recipes.push(getMainHealthyRecipes());
    },
    initializeStates() {
      this.statesArr.push(this.state1);
      this.statesArr.push(this.state2);
      this.statesArr.push(this.state3);
      this.statesArr.push(this.state4);
      this.statesArr.push(this.state5);
      this.timeIntervalId = setInterval(() => {
        this.increaseStateIndex();
      }, 5000);
    },
    goLeft() {
      this.increaseStateIndex();
      try {
        clearInterval(this.timeIntervalId);
        this.timeIntervalId = setInterval(() => {
          this.increaseStateIndex();
        }, 5000);
      } catch (err) {
        console.log("");
      }
    },
    goRight() {
      this.decreaseStateIndex();
      try {
        clearInterval(this.timeIntervalId);
        this.timeIntervalId = setInterval(() => {
          this.increaseStateIndex();
        }, 5000);
      } catch (err) {
        console.log("");
      }
    },
    increaseStateIndex() {
      this.stateIndex += 1;
      if (this.stateIndex > 4) this.stateIndex = 0;
      if (this.stateIndex < 0) this.stateIndex = 4;
      this.xPosition = this.statesArr[this.stateIndex];
    },
    decreaseStateIndex() {
      this.stateIndex -= 1;
      if (this.stateIndex > 4) this.stateIndex = 0;
      if (this.stateIndex < 0) this.stateIndex = 4;
      this.xPosition = this.statesArr[this.stateIndex];
    },
  },
  created() {
    this.getRecipes();
    this.initializeStates();
    this.isLoading = true;
  },

  unmounted() {
    try {
      clearInterval(this.timeIntervalId);
    } catch (err) {
      console.log("");
    }
  },
  components: { SingleSlide },
};
</script>

<style scoped>
.component-box {
  width: 100%;
  height: 50rem;
}
.component {
  transition: all 0.5s;
}

.left,
.right {
  width: 12rem;
  position: absolute;
  background-color: white;
  border-radius: 6rem;
  font-size: 7.2rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s;
  line-height: 130%;
  color: #34d399;
}
.left {
  padding-left: 2rem;
  top: 50%;
  right: 0;
  transform: translate(43%, -50%);
}
.left:hover {
  transform: translate(35%, -50%);
}

.right {
  padding-right: 2rem;
  top: 50%;
  left: 0;
  transform: translate(-43%, -50%);
  text-align: right;
}
.right:hover {
  transform: translate(-35%, -50%);
}

/**************************/
/* BELOW 992px */
/**************************/
@media (max-width: 62em) {
  .component-box {
    width: 100%;
  }
}
</style>
