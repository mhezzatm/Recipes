<template>
  <div class="component">
    <div class="main-nav p-5 grid grid-cols-12 grid-rows-1">
      <div
        class="main-nav--logo"
        :style="{ display: !mobileView || !displayMobileSearch ? 'block' : 'none' }"
      >
        <RouterLink :to="{ name: 'home' }">
          <img src="/images/logos/pngaaa.com-4761408.png" alt="" class="image cursor-pointer" />
        </RouterLink>
      </div>
      <div
        class="main-nav-search inline-block bg-gray-400 p-2 rounded-lg border-2 border-gray-300 col-start-2 col-end-12 relative"
        :style="{ display: !mobileView || displayMobileSearch ? 'block' : 'none' }"
      >
        <div class="rounded-lg border-2 border-gray-300 text-4xl flex">
          <input
            type="text"
            name=""
            id=""
            placeholder="keywords, ingredient, dish"
            class="main-nav--input py-5 px-6 text-4xl font-medium"
            v-model="searchValue"
            @input="getAutoComplete"
            list="autoComplete-box"
          />
          <datalist id="autoComplete-box" class="py-5 px-6 bg-white">
            <option class="option" v-for="name in autoCompleteList" :value="name" :key="name">
              {{ name }}
            </option>
          </datalist>

          <button
            class="main-nav--button py-5 px-6 bg-orange-500 text-4xl font-medium cursor-pointer"
            @click.prevent="
              $router.push({
                name: 'search',
                params: { type: 'name', value: searchValue ? searchValue : 'salad' },
              })
            "
          >
            Search
          </button>
        </div>
      </div>
      <div
        class="search-icon__search"
        :style="{ display: mobileView && !displayMobileSearch ? 'block' : 'none' }"
        @click="displaySearch"
      >
        <ion-icon name="search"></ion-icon>
      </div>
      <div
        class="search-icon__close"
        :style="{ display: mobileView && displayMobileSearch ? 'block' : 'none' }"
        @click="closeSearch"
      >
        <ion-icon name="close-circle"></ion-icon>
      </div>
    </div>
    <hr style="border-top: dashed 1px; margin-bottom: 9px" />
  </div>
</template>

<script>
import { autoComplete } from "@/includes/queries";
export default {
  data() {
    return {
      searchValue: "",
      mobileView: window.innerWidth < 601,
      displayMobileSearch: false,
      autoCompleteList: [],
    };
  },
  computed: {},
  methods: {
    displaySearch() {
      this.displayMobileSearch = true;
    },
    closeSearch() {
      this.displayMobileSearch = false;
    },
    async getAutoComplete() {
      this.autoCompleteList = await autoComplete(this.searchValue);
      console.log(this.autoCompleteList);
    },
  },
};
</script>

<style scoped>
.component {
  padding-bottom: 2rem;
}
.main-nav {
  align-items: center;
  justify-items: center;
  /* border-bottom: 0.1rem dashed black; */
  padding-bottom: 2rem;
}

.main-nav--input {
  width: 38.4rem;
}

.option {
  transition: all 0.3s;
}

.option:hover {
  background-color: cornflowerblue;
}

/**************************/
/* BELOW 864px */
/**************************/
@media (max-width: 54em) {
  .main-nav-search {
    grid-column: 2/-1;
  }
}
/**************************/
/* BELOW 600px */
/**************************/
@media (max-width: 37.5em) {
  .main-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    line-height: 1rem;
  }

  .image {
    height: 10rem;
    line-height: 1rem;
  }

  .search-icon__search {
    font-size: 10rem;
    line-height: 1rem;
  }
  .search-icon__close {
    font-size: 5rem;
    line-height: 1rem;
  }
  .main-nav-search {
    width: auto;
    line-height: 1rem;
  }
  .main-nav--input {
    width: auto;
    font-size: 1.5rem;
    line-height: 1rem;
    padding: 0.5rem;
  }
  .main-nav--button {
    font-size: 1.5rem;
    line-height: 1rem;
    padding: 0.5rem;
  }
}
</style>
