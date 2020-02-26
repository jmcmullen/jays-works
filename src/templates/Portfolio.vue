<template>
  <Layout>
    <div class="folio container">
      <div class="folio__top">
        <div class="folio__left">
          <h1 class="folio__title">{{ $page.portfolio.title }}</h1>
          <h4 class="folio__subtitle">Technology</h4>
          {{ $page.portfolio.technology }}
        </div>
        <div class="folio__right">
          <g-link class="folio__btn btn" to="/portfolio">&larr; Go Back</g-link>
          <a
            class="folio__btn btn btn--primary"
            target="_blank"
            :href="$page.portfolio.link"
            rel="noreferrer"
            >View Live</a
          >
        </div>
      </div>
    </div>
    <div class="folio">
      <div class="folio__images">
        <g-image
          class="folio__images-desktop"
          v-if="$page.portfolio.desktop"
          :src="$page.portfolio.desktop"
        />
        <g-image
          class="folio__images-mobile"
          v-if="$page.portfolio.mobile"
          :src="$page.portfolio.mobile"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: 'Portfolio',
};
</script>

<style lang="scss" scoped>
.folio {
  @include tablet {
    padding: 2rem 0 0;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;

    @include tablet {
      flex-direction: row;
    }
  }

  &__left {
    margin-bottom: 1rem;
  }

  &__right {
    display: flex;
    flex-direction: column;
  }

  &__images {
    width: 100%;
    display: flex;
    flex-basis: auto;
    align-items: flex-start;
    justify-content: center;
    background: $color-white;
    padding: 4rem 2rem;

    @include tablet {
      padding: 4rem 0;
    }

    &-desktop {
      display: none;

      @include tablet {
        display: block;
        box-shadow: 0 13px 34px 0 rgba(0, 0, 0, 0.1);
      }
    }

    &-mobile {
      display: none;

      @include mobile {
        display: block;
        box-shadow: 0 13px 34px 0 rgba(0, 0, 0, 0.1);
      }
    }
  }

  &__title {
    font-size: 2rem;
  }

  &__subtitle {
    font-size: 1.2rem;
    margin-bottom: 0;
  }

  &__btn {
    margin-bottom: 1rem;
  }

  &.container {
    padding: 2rem 2rem 0;
  }
}
</style>

<page-query>
  query Portfolio ($id: ID!) {
    portfolio(id: $id) {
      title
      technology
      mobile(width: 375)
      desktop(width: 900)
      link
      slug
    }
  }
</page-query>
