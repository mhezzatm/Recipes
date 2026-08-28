<template>
  <div>
    <div class="top">
      <div class="flex justify-between items-center text-5xl">
        <h1>Today top recipe</h1>
        <ion-icon name="fast-food-outline" class="text-green-600"></ion-icon>
      </div>
      <hr style="border-top: dashed 1px; margin-bottom: 0.5rem; margin-top: 2.5rem" />
      <RouterLink :to="{ name: 'recipe', params: { id: 3998 } }">
        <div class="top-title green">
          <h1 class="text-emerald-600 text-4xl py-4">Chicken Teriyaki Chow Mein</h1>
        </div>
        <img
          src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d7f0a66959f544f5b885f3bd993f072f/BFV43733_ChowMein4Ways_FB1080SQ.jpg"
          alt=""
        />
      </RouterLink>
    </div>
    <div class="bottom">
      <div class="bottom-title">
        <hr style="border-top: dashed 1px; margin-bottom: 0.5rem; margin-top: 9px" />
        <div class="flex justify-between items-center text-4xl py-4">
          <h1>Popular recipes today</h1>
          <ion-icon name="podium-outline" class="text-green-600"></ion-icon>
        </div>
        <hr style="border-top: dashed 1px; margin-bottom: 9px" />
      </div>
      <ol class="green">
        <li>
          <RouterLink :to="{ name: 'recipe', params: { id: 667 } }">
            Fluffy Jiggly Japanese Cheesecake</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'recipe', params: { id: 1477 } }"> Banana Pancakes</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'recipe', params: { id: 3600 } }">
            Super Fluffy Omelet</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'recipe', params: { id: 2431 } }">
            Southwestern-Style Quinoa Salad</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'recipe', params: { id: 3034 } }">
            3-Ingredient Banana Oat Smoothie</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'recipe', params: { id: 1415 } }">
            blueberry-banana-pancakes</RouterLink
          >
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ol {
  list-style-type: decimal;
  list-style-position: inside;
}

li,
li a {
  color: #059669;
  font-size: 1.5rem;
}
</style>
