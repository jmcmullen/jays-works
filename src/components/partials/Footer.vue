<template>
  <footer class="footer">
    <div class="footer__cta">
      <div class="footer__cta-container container">
        <h4 class="footer__title">Got a project for me?</h4>
        <a
          href="https://jaymcmullen.typeform.com/to/l2NuGf"
          target="_blank"
          class="footer__btn btn btn--primary"
        >
          <span>Let's chat</span>
        </a>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="footer__content container">
        <div class="footer__copyright">
          &copy; {{ new Date().getFullYear() }} Jay McMullen. This website is made using Vue and
          Gridsome. Hosted via Netlify. You can
          <a class="footer__link" href="https://github.com/jmcmullen/jays-works" target="_blank"
            >see the source code here</a
          >.
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    &__cta {
      background-color: $color-light-black;
      padding: 2rem 0;

      &-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @include desktop {
          flex-direction: row;
          align-items: center;
        }
      }
    }

    &__title {
      font-size: 2rem;
      color: $color-white;
      margin: 0;
    }

    &__btn {
      background-color: $color-white !important;
      color: $color-black !important;
      height: 40px;
      margin: 1rem 0 0.5rem;
    }

    &__link {
      color: $color-white !important;
      text-decoration: underline;
    }

    &__bottom {
      color: $color-grey;
      background-color: $color-black;
    }

    &__content {
      padding: 2rem;

      @include desktop {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
