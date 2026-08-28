<template>
  <div>
    <div class="relative mb-24">
      <div class="bg-orange-100 px-10 py-12 rounded-2xl relative mb z-10">
        <h1 class="text-6xl text-emerald-600">{{ mainTitle }}</h1>
        <hr style="border-top: dashed 1px; margin: 1.5rem 0px" />
        <p class="text-3xl">{{ title }}</p>
      </div>
      <div class="triangle bg-orange-100"></div>
    </div>
    <div v-if="isLoading">
      <div v-for="recipe in recipeList" :key="recipe.id" class="cards">
        <RouterLink :to="{ name: 'recipe', params: { id: recipe.id } }">
          <HorizontalCardA :recipe="{ ...recipe }" />
        </RouterLink>
      </div>
      <div class="buttons" v-if="viewBtns">
        <button v-if="btnP" @click="prePage">Previous</button>
        <button v-if="btnCM" @click="prePage">{{ currentPage - 1 }}</button>
        <button v-if="btnC">{{ currentPage }}</button>
        <button v-if="btnCP" @click="nextPage">{{ currentPage + 1 }}</button>
        <button v-if="btnN" @click="nextPage">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import { searchRecipesByName, searchRecipesByTag } from "@/includes/queries";
import HorizontalCardA from "@/components/UI/HorizontalCardA.vue";
export default {
  data() {
    return {
      recipeList: [],
      count: 0,
      title: "",
      isLoading: false,
      currentPage: 1,
      itemsPerPage: 10,
      btnP: false,
      btnCM: false,
      btnC: false,
      btnCP: false,
      btnN: false,
      viewBtns: false,
      mainTitle: "",
    };
  },
  methods: {
    async getData() {
      if (this.$route.params.type === "tag") {
        return await searchRecipesByTag(
          this.$route.params.value,
          this.currentPage,
          this.itemsPerPage,
        );
      } else if (this.$route.params.type === "name") {
        return await searchRecipesByName(
          this.$route.params.value.replaceAll(" ", "%20"),
          this.currentPage,
          this.itemsPerPage,
        );
      }
    },
    initializeBtns() {
      if (this.currentPage === 1 && this.count < 10) {
        this.btnP = false;
        this.btnCM = false;
        this.btnC = false;
        this.btnCP = false;
        this.btnN = false;
      }
      if (this.currentPage === 1 && this.count > 10) {
        this.btnP = false;
        this.btnCM = false;
        this.btnC = true;
        this.btnCP = true;
        this.btnN = true;
      } else if (this.currentPage > Math.floor(this.count / this.itemsPerPage) && this.count > 10) {
        this.btnP = true;
        this.btnCM = true;
        this.btnC = true;
        this.btnCP = false;
        this.btnN = false;
      } else if (this.currentPage > 1 && this.count > 10) {
        this.btnP = true;
        this.btnCM = true;
        this.btnC = true;
        this.btnCP = true;
        this.btnN = true;
      }
    },
    async prePage() {
      if (this.currentPage === 1) return;
      this.currentPage -= 1;
      this.initializeBtns();
      const data = await this.getData();
      this.recipeList = data.recipes;
      this.count = 98;
      this.title = data.count + " Recipes";
      this.isLoading = true;
      this.viewBtns = true;
    },
    async nextPage() {
      if (this.currentPage === Math.floor(this.count / this.itemsPerPage) + 1) return;
      this.currentPage += 1;
      this.initializeBtns();
      const data = await this.getData();
      this.recipeList = data.recipes;
      this.count = 98;
      this.title = data.count + " Recipes";
      this.isLoading = true;
      this.viewBtns = true;
    },
  },
  components: { HorizontalCardA },
  async created() {
    if (this.$route.params.type !== "name" && this.$route.params.type !== "tag") {
      this.$router.push({ name: "home" });
    }

    const data = await this.getData();
    if (data.count) {
      this.recipeList = data.recipes;
      this.count = data.count;
      this.title = data.count + " Recipes";
      this.isLoading = true;
      this.viewBtns = true;
    } else {
      this.title = "No recipe has been found";
    }

    if (this.$route.params.type === "name") {
      this.mainTitle = this.$route.params.value;
    } else if (this.$route.params.type === "tag") {
      this.mainTitle = this.$route.params.tagname;
    }

    this.initializeBtns(data.count);
  },
};
</script>

<style scoped>
.cards {
  margin: 0 2rem;
}
.cards:nth-child(even) {
  background-color: #fafafa;
}
.triangle {
  position: absolute;
  width: 8rem;
  height: 8rem;
  overflow: hidden;
  display: inline-block;
  bottom: 0;
  left: 10%;
  transform: rotate(55deg) translate(20%, 30%);
}

.buttons {
  display: flex;
  align-items: center;
  padding: 2rem;
}

button {
  font-size: 1.875rem;
  line-height: 2.25rem;
  --tw-text-opacity: 1;
  color: rgb(5 150 105 / var(--tw-text-opacity));
  padding: 0.5rem 0.5rem;
  border: 2px solid #fff;
  transition: all 0.3s;
}

button:hover,
button:active {
  border: 2px solid rgb(5 150 105 / var(--tw-text-opacity));
  transform: translateY(-0.3rem);
}
</style>
