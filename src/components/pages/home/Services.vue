<template>
  <section class="services container" id="services">
    <h5 class="services__title">Some of the things that I'm good at:</h5>
    <div class="services__text">
      <div class="services__item">
        <h4 class="services__heading">Front End Development</h4>
        <p class="services__description">
          I'll bring your visuals to life through custom code written in HTML,
          CSS, and Javascript. Ensuring that your designs are responsive to all
          screen sizes, flexible to fit all device types, and compatible with
          all modern browsers. The end result is always pixel perfect.
        </p>
      </div>
      <div class="services__item">
        <h4 class="services__heading">Back End Development</h4>
        <p class="services__description">
          Although it’s invisible to the end user, this is one of the most
          important steps in any web-based project. The backend is in charge of
          powering all of the features on a website. Backend work will typically
          be built as Serverless micro-services using Node.
        </p>
      </div>
      <div class="services__item">
        <h4 class="services__heading">Fully Managed Website Hosting</h4>
        <p class="services__description">
          Once you have something made, we need to find a place for it to live.
          I'll manage your infrastructure and ensure your applications are
          secure, high performing and stay online for your users. I leverage
          static websites and micro-services to ensure low cost scalability.
        </p>
      </div>
    </div>
    <g-link class="services__btn btn" to="/services">More details</g-link>
  </section>
</template>

<style lang="scss" scoped>
.services {
  padding: 4rem 0 2rem;

  @include desktop {
    padding: 0 0 6rem;
  }

  &__title {
    font-size: 2rem;
    padding: 0 2rem;

    @include desktop {
      font-size: 1.5rem;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    font-size: 19px;

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
    font-size: 2rem;
    color: $color-dark-grey;
    margin-bottom: 0.5rem;

    @include desktop {
      font-size: 2.3rem;
    }
  }

  &__btn {
    display: block;
    margin: 2rem auto 0;

    @include tablet {
      max-width: 200px;
    }
  }
}
</style>
