<template>
  <section class="footer">
    <div class="left">
      <RouterLink to="/">
        <img class="logo" alt="Recipes logo" src="/images/logos/pngaaa.com-4761408.png" />
      </RouterLink>
      <p class="Copyright-text">Copyright © {{ dateYear }} by Recipes, Inc. All rights reserved.</p>
    </div>
    <div class="right">
      <p class="Contact-text">Contact us</p>
      <ul class="social-links">
        <li>
          <a class="footer-link" href="#"
            ><ion-icon
              class="social-icon md hydrated"
              name="logo-instagram"
              role="img"
              aria-label="logo instagram"
            ></ion-icon
          ></a>
        </li>
        <li>
          <a class="footer-link" href="#"
            ><ion-icon
              class="social-icon md hydrated"
              name="logo-facebook"
              role="img"
              aria-label="logo facebook"
            ></ion-icon
          ></a>
        </li>
        <li>
          <a class="footer-link" href="#"
            ><ion-icon
              class="social-icon md hydrated"
              name="logo-twitter"
              role="img"
              aria-label="logo twitter"
            ></ion-icon
          ></a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dateYear: 0,
    };
  },
  created() {
    this.dateYear = new Date().getFullYear();
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  padding: 2rem;
  font-size: 5rem;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-top: 1px solid #eee;
  background-color: white;
}

.left {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.Copyright-text {
  margin-top: 1rem;
  text-align: center;
}

.logo {
  height: 7rem;
}

.social-links {
  padding: 0.5rem 1rem;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.footer-link {
  text-decoration: none;
  color: inherit;
  font-size: 5rem;
}

/**************************/
/* BELOW 620px */
/**************************/
@media (max-width: 38.75em) {
  .footer {
    padding: 0;
  }
  .left {
    flex-direction: column;
    gap: 0;
    margin: 1rem;
  }
}
</style>
