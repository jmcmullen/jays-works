<template>
  <header class="navbar">
    <h5 class="navbar__brand">
      <g-link to="/">Jay<br />McMullen</g-link>
    </h5>

    <button :class="hamburgerStyle" type="button" @click="toggleMenu">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>

    <!-- <svg
      class="shape-overlays"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path class="shape-overlays__path"></path>
      <path class="shape-overlays__path"></path>
      <path class="shape-overlays__path"></path>
    </svg> -->

    <nav :class="menuStyle">
      <g-link class="navbar__link" to="/">Home</g-link>
      <g-link class="navbar__link" to="/about/">About</g-link>
      <g-link class="navbar__link" to="/portfolio/">Portfolio</g-link>
      <g-link class="navbar__link" to="/contact/">Contact</g-link>
    </nav>
  </header>
</template>

<script>
import 'hamburgers/dist/hamburgers.min.css';

export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  computed: {
    hamburgerStyle() {
      return {
        navbar__hamburger: true,
        hamburger: true,
        'hamburger--collapse': true,
        'is-active': this.isMenuOpen,
      };
    },
    menuStyle() {
      return {
        navbar__menu: true,
        'navbar__menu--is-active': this.isMenuOpen,
      };
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin: 1rem 0;

  &__hamburger {
    padding: 0;
    width: 32px;
    z-index: 10;
  }

  &__menu {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    background-color: $color-white;
    transition: all 0.3s ease-in-out;
    padding: 8rem 2rem;

    &--is-active {
      display: flex;
      opacity: 1;
    }
  }

  &__link {
    font-family: $font-catamaran;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.35;
    text-transform: uppercase;
    margin: 0.5rem 0;
    opacity: 0.7;
  }

  &__brand {
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    margin: 0;
  }
}
</style>

<style lang="scss">
.hamburger {
  outline: none;
  width: 24px;
}
.hamburger-inner,
.hamburger-inner:after,
.hamburger-inner:before {
  width: 24px;
  border-radius: 0;
  height: 2px;
}
</style>
