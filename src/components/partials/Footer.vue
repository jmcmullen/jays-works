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
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    &__cta {
      background-color: $color-black;
      padding: 2rem 0;

      &-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        @include desktop {
          flex-direction: row;
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
  }
</style>
