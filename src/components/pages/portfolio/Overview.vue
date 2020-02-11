<template>
  <section class="overview container">
    <div class="overview__text">
      <h2 class="overview__title">Some projects I've worked on</h2>
      <p class="overview__description">
        I take pride in delivering projects on schedule with high-quality work.
        All the frontend work is responsive and built mobile-first to present a
        great user experience.
      </p>
      <p
        class="overview__description"
      >I'm familar with most of the website development technology around. My favourite technology to use is - Vue, Nuxt, Serverless, Node &amp; Netlify. However, I can also work with React, Angular, Docker, Heroku, AWS, &amp; Ruby on Rails.</p>
    </div>
    <div class="overview__screenshots">
      <Screenshot v-for="project in work" :key="project.id" :project="project" />
    </div>
  </section>
</template>

<script>
import Screenshot from "./Screenshot";

export default {
  components: {
    Screenshot
  },
  props: {
    work: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.overview {
  padding: 3rem 2rem;

  &__title {
    font-size: 3rem;
  }

  &__description {
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 19px;
  }

  &__screenshots {
    padding: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
}
</style>
