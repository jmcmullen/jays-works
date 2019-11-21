<template>
  <section class="brands">
    <h5 class="brands__title container">
      Some of the brands I've previously worked with include...
    </h5>
    <div class="brands__container container">
      <div class="brands__brand" v-for="brand in brands" :key="brand.name">
        <g-image :src="brand.logo" :alt="brand.name" />
      </div>
    </div>
  </section>
</template>

<script>
  import koalaLogo from '../../../assets/images/koala-logo.png';
  import triplejLogo from '../../../assets/images/triplej-logo.png';
  import isobarLogo from '../../../assets/images/isobar-logo.png';
  import footlockerLogo from '../../../assets/images/footlocker-logo.png';
  import mettrrLogo from '../../../assets/images/mettrr-logo.png';
  import woolworthsLogo from '../../../assets/images/woolworths-logo.png';
  import allianzLogo from '../../../assets/images/allianz-logo.png';
  import abcLogo from '../../../assets/images/abc-logo.png';

  export default {
    data() {
      return {
        brands: [
          { name: 'Koala', logo: koalaLogo },
          { name: 'Triple J', logo: triplejLogo },
          { name: 'Isobar', logo: isobarLogo },
          { name: 'Footlocker', logo: footlockerLogo },
          { name: 'Mettrr', logo: mettrrLogo },
          { name: 'Woolworths', logo: woolworthsLogo },
          { name: 'Allianz', logo: allianzLogo },
          { name: 'ABC', logo: abcLogo },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .brands {
    margin: 0 0;
    padding: 2rem 0 2rem;
    background-color: $color-dirty;

    @include desktop {
      margin: 6rem 0;
      padding: 6rem 0 2rem;
    }

    &__title {
      color: #777;
      text-align: center;
      font-size: 1.2rem;
      padding: 0 2rem;
      margin-bottom: 1rem;

      @include tablet {
        padding: 0 4rem;
      }
    }

    &__container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    &__brand {
      width: 50%;

      @include tablet {
        width: 25%;
      }
    }
  }
</style>
