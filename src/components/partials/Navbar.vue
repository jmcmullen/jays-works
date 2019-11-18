<template>
  <header class="navbar">
    <h5 class="navbar__brand">
      <g-link to="/">Jay<br />McMullen</g-link>
    </h5>

    <button :class="menuStyle" type="button" @click="toggleMenu">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>

    <nav class="navbar__menu">
      <g-link class="navbar__link" to="/">Home</g-link>
      <g-link class="navbar__link" to="/about/">About</g-link>
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
    menuStyle() {
      return {
        navbar__hamburger: true,
        hamburger: true,
        'hamburger--collapse': true,
        'is-active': this.isMenuOpen,
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
  }

  &__menu {
    display: none;
  }

  &__link {
    margin-left: 20px;
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
