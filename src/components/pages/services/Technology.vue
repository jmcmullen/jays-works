<template>
  <section class="tech">
    <div class="tech__container container">
      <div class="tech__left">
        <h2 class="tech__title">I develop premium web experiences</h2>
        <p class="tech__description">
          As well as crafting beautiful and user-friendly websites, I work
          mostly with open source technologies meaning there are never any
          hidden vendor lock-ins, expensive licenses or bloated dependencies.
        </p>
        <p class="tech__description">
          I am enthusiastic about tech and always stay ahead of the curve on
          implementing the latest technologies such as TypeScript, ES2019, PWA,
          HTML5, CSS3, and developing on robust frameworks like Vue, React,
          Webpack &amp; Netlify.
        </p>
      </div>
      <div class="tech__right">
        <div class="tech__col">
          <g-image
            class="tech__image"
            src="~/assets/images/vue-tech.png"
            alt=""
          />
          <g-image
            class="tech__image"
            src="~/assets/images/netlify-tech.png"
            alt=""
          />
          <g-image
            class="tech__image"
            src="~/assets/images/nuxt-tech.png"
            alt=""
          />
          <g-image
            class="tech__image"
            src="~/assets/images/react-tech.png"
            alt=""
          />
        </div>
        <div class="tech__col">
          <g-image
            class="tech__image"
            src="~/assets/images/gatsby-tech.png"
            alt=""
          />
          <g-image
            class="tech__image"
            src="~/assets/images/gridsome-tech.png"
            alt=""
          />
          <g-image
            class="tech__image"
            src="~/assets/images/aws-tech.png"
            alt=""
          />
        </div>
        <div class="tech__col">
          <g-image
            class="tech__image"
            src="~/assets/images/pwa-tech.png"
            alt=""
          />
          <g-image
            class="tech__image"
            src="~/assets/images/node-tech.png"
            alt=""
          />
          <g-image
            class="tech__image"
            src="~/assets/images/next-tech.png"
            alt=""
          />
          <g-image
            class="tech__image"
            src="~/assets/images/webpack-tech.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.tech {
  margin: 2rem 0 0;

  @include tablet {
    margin: 4rem 0;
    background-color: $color-white;
  }

  &__container {
    display: grid;

    @include tablet {
      grid-template-columns: 1fr auto;
    }
  }

  &__title {
    font-size: 2rem;
  }

  &__description {
    margin-bottom: 1rem;
    font-size: 19px;
  }

  &__left {
    display: flex;
    flex-direction: column;

    @include tablet {
      align-self: center;
      padding-right: 5rem;
    }
  }

  &__right {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;

    @include tablet {
      grid-template-columns: repeat(3, 128px);
      margin-top: -60px;
      margin-bottom: -68px;
    }
  }

  &__col {
    @include mobile {
      display: flex;
      justify-content: center;
    }

    &:nth-of-type(2) {
      @include tablet {
        margin-top: 64px;
      }
    }
  }

  &__image {
    background-color: $color-true-white;
    margin-top: 10px;

    @include mobile {
      width: 64px;
      height: 64px;
    }
  }
}
</style>
