<template>
  <div class="component">
    <div class="main-nav p-5 grid grid-cols-12 grid-rows-1">
      <div class="main-nav--logo">
        <RouterLink :to="{ name: 'home' }">
          <img src="/images/logos/pngaaa.com-4761408.png" alt="" class="cursor-pointer" />
        </RouterLink>
      </div>
      <div
        class="main-nav-search inline-block bg-gray-400 p-2 rounded-lg border-2 border-gray-300 col-start-2 col-end-12"
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="keywords, ingredient, dish"
          class="main-nav--input py-5 px-6 rounded-l-lg border-l-2 border-y-2 border-gray-300 text-4xl font-medium"
          v-model="searchValue"
        />
        <span
          ><button
            class="main-nav--button bg-orange-500 py-5 px-6 rounded-r-lg border-r-2 border-y-2 border-gray-300 text-4xl font-medium cursor-pointer"
            @click.prevent="
              $router.push({
                name: 'search',
                params: { type: 'name', value: searchValue ? searchValue : 'salad' },
              })
            "
          >
            Search
          </button></span
        >
      </div>
    </div>
    <hr style="border-top: dashed 1px; margin-bottom: 9px" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
