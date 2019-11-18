<template>
  <section class="hero">
    <div class="hero__image">
      <g-image
        class="hero__photo"
        src="../../../assets/images/jay-mcmullen.jpg"
        alt
      />
      <Socials />
    </div>
    <div class="hero__text">
      <h2 class="hero__title">
        I make fast, secure, scalable sites and web applications.
      </h2>
      <p class="hero__copy">
        Over the last 5 years, I've gained a ton of experience working with
        ecommerce, media & tech related businesses across Sydney, Australia and
        London, UK.
      </p>
      <p class="hero__copy">
        I can provide high quality features to existing applications or work
        with you to architect something from the ground up.
      </p>
    </div>
    <nav class="hero__links">
      <g-link class="hero__link btn btn--primary" to="/">Contact Me</g-link>
      <g-link class="hero__link btn" to="/portfolio/">Portfolio</g-link>
    </nav>
  </section>
</template>

<script>
import Socials from './Socials';

export default {
  components: {
    Socials,
  },
};
</script>

<style lang="scss" scoped>
.hero {
  &__title {
    font-size: 24px;
    margin-bottom: 1rem;
    margin-top: 1.6rem;
  }

  &__copy {
    margin-bottom: 1rem;
  }

  &__image {
    max-width: 100%;
    display: flex;
    padding-right: 2rem;
  }

  &__photo {
    padding-right: 1rem;
  }

  &__text {
    margin-bottom: 1rem;
  }

  &__links {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  &__link {
    width: 100%;
    margin-bottom: 1rem;

    &:first-of-type {
      margin-right: 1rem;
    }
  }
}
</style>
