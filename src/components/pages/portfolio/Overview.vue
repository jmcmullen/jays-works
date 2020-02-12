<template>
  <section class="overview container">
    <div class="overview__text">
      <h2 class="overview__title">Some projects I've worked on</h2>
      <p class="overview__description">
        I take pride in delivering high-quality projects on schedule. All the
        frontend work is responsive and built mobile-first to present a great
        user experience. All the backend work is built to be scalable and
        perform quickly.
      </p>
      <p class="overview__description">
        I'm familiar with most of the website development technology around. My
        preferred stack to use is - Vue, Serverless, Node &amp; Netlify.
        However, I'm across all modern development technologies including React,
        Angular, Ruby on Rails, Python, Docker, Heroku, AWS, &amp; and many
        more.
      </p>
    </div>
    <div class="overview__screenshots">
      <Screenshot
        v-for="project in work"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script>
import Screenshot from './Screenshot';

export default {
  components: {
    Screenshot,
  },
  props: {
    work: {
      type: Array,
      required: true,
    },
  },
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
    grid-template-columns: 1fr;
    grid-gap: 1rem;

    @include tablet {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
</style>
