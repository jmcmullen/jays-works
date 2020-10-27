<template>
  <section class="hero container">
    <div class="hero__image">
      <g-image
        class="hero__photo"
        src="../../../assets/images/jay-mcmullen.jpg"
        alt
      />
      <Socials />
    </div>
    <div class="hero__text">
      <h1 class="hero__title">
        I make fast, secure, scalable sites and web applications.
      </h1>
      <p class="hero__copy">
        Over the last {{ experience }} years, I've gained a ton of experience
        working with ecommerce, media & tech related businesses across Sydney,
        Australia and London, UK.
      </p>
      <p class="hero__copy">
        I can provide high quality features to existing applications or work
        with you to architect something from the ground up.
      </p>
      <nav class="hero__links">
        <a
          href="https://jaymcmullen.typeform.com/to/l2NuGf"
          rel="noreferrer"
          target="_blank"
          class="hero__link btn btn--primary"
          to="/contact/"
        >
          <span>Contact Me</span>
        </a>
        <!-- <g-link class="hero__link btn" to="/portfolio/">Portfolio</g-link> -->
      </nav>
    </div>
  </section>
</template>

<script>
import Socials from './Socials';

export default {
  computed: {
    experience() {
      const now = new Date();
      const start = new Date('March 1, 2014 00:00:00');
      let diff = (now.getTime() - start.getTime()) / 1000;
      diff /= 60 * 60 * 24;
      return Math.abs(Math.ceil(diff / 365.25));
    },
  },
  components: {
    Socials,
  },
};
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;

  @include desktop {
    margin-top: 5rem;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  &__title {
    margin-bottom: 1rem;
    margin-top: 1.6rem;
  }

  &__copy {
    margin-bottom: 1rem;
  }

  &__image {
    display: grid;
    grid-template-columns: 1fr 2rem;
  }

  &__photo {
    padding-right: 1rem;
    max-width: 500px;
  }

  &__text {
    margin-bottom: 2rem;

    @include desktop {
      max-width: 560px;
      padding-right: 6rem;
      margin-bottom: 0;
      align-self: center;
    }
  }

  &__links {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  &__link {
    width: 100%;
  }
}
</style>
