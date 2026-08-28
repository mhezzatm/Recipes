<template>
  <div class="component grid grid-cols-3 gap-x-20 gap-y-7 justify-between h-full">
    <VerticalCardA v-for="cardData in cardsData" :data="cardData" :key="cardData.title" />
    <RouterLink
      :to="{
        name: 'search',
        params: { type: 'name', value: 'healthy' },
      }"
      class="row-start-2 row-end-3 col-start-1 col-end-4 relative cursor-pointer"
    >
      <img src="/images/background/heart-healthy-food-1580231690.jpg" alt="" class="bottom-card" />
      <p class="absolute right-14 bottom-7 p-7 text-4xl Healthy-recipe">Healthy recipes</p>
    </RouterLink>
  </div>
</template>

<script>
import VerticalCardA from "../UI/VerticalCardA.vue";

export default {
  data() {
    return {
      cardsData: [
        {
          title: "Need Breakfast?",
          url: "/images/background/Full-Irish-Breakfast-with-Bread.jpg",
          description:
            "Breakfast fills you up and serves as a fantastic prelude for a productive day (which is why it’s so vital!)",
          color: "#34d399",
          cardRouter: "breakfast",
        },
        {
          title: "Lunch break",
          url: "/images/background/pizza-g4fc16f97f_640.jpg",
          description:
            "The lunch break helps you stay focused and energized throughout the day by recharging both your body and your mind.",
          color: "#eab308",
          cardRouter: "lunch",
        },
        {
          title: "Dinner",
          url: "/images/background/grilled-chicken-gf1c556ac4_640.jpg",
          description:
            "There should be no rules at your dinner party except for people to eat a lot and enjoy a long night where they feel like they could fall asleep at the dinner table at the end.",
          color: "#4c0519",
          cardRouter: "dinner",
        },
      ],
    };
  },
  components: { VerticalCardA },
};
</script>

<style scoped>
.Healthy-recipe {
  background-color: #34d39988;
  color: white;
}

/**************************/
/* over 1072px */
/**************************/
@media (max-width: 67em) {
  .component {
    display: flex;
    flex-direction: column;
  }
}
</style>
