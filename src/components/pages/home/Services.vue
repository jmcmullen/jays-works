<template>
  <section class="services container" id="services">
    <h3 class="services__title">Some of the things that I'm good at:</h3>
    <div class="services__text">
      <div class="services__item">
        <h2 class="services__heading">Front End Development</h2>
        <p class="services__description">
          I'll bring your visuals to life through custom code written in HTML,
          CSS, and Javascript. Ensuring that your designs are responsive to all
          screen sizes, flexible to fit all device types, and compatible with
          all modern browsers. The end result is always pixel perfect.
        </p>
      </div>
      <div class="services__item">
        <h2 class="services__heading">Back End Development</h2>
        <p class="services__description">
          Although it’s invisible to the end user, this is one of the most
          important steps in any web-based project. The backend is in charge of
          powering all of the features on a website. Backend work will typically
          be built as Serverless micro-services using Node.
        </p>
      </div>
      <div class="services__item">
        <h2 class="services__heading">Managed Website&nbsp;Hosting</h2>
        <p class="services__description">
          Once you have something made, we need to find a place for it to live.
          I'll manage your infrastructure and ensure your applications are
          secure, high performing and stay online for your users. I leverage
          static websites and micro-services to ensure low cost scalability.
        </p>
      </div>
    </div>
    <g-link
      v-if="button"
      class="services__btn btn"
      to="/services"
      aria-label="more details"
      >More details</g-link
    >
  </section>
</template>

<script>
export default {
  props: {
    button: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.services {
  padding: 4rem 0 2rem;

  @include desktop {
    padding: 0 0 6rem;
  }

  &__title {
    padding: 0 2rem;
  }

  &__text {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;

    @include desktop {
      justify-content: space-between;
      flex-direction: row;
    }
  }

  &__item {
    margin-bottom: 2rem;

    @include desktop {
      width: 30%;
    }
  }

  &__heading {
    color: $color-dark-grey;
    margin-bottom: 0.5rem;
  }

  &__btn {
    display: block;
    margin: 2rem 2rem 0;

    @include tablet {
      max-width: 200px;
      margin: 2rem auto 0;
    }
  }
}
</style>
