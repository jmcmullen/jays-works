<template>
  <header class="navbar container">
    <h5 :class="brandStyle">
      <g-link to="/">
        Jay
        <br />McMullen
      </g-link>
    </h5>

    <button
      :class="hamburgerStyle"
      type="button"
      @click="toggleMenu"
      aria-label="open menu"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>

    <nav :class="menuStyle">
      <div class="navbar__menu-container container">
        <div class="navbar__link" @click="closeMenu('/')" >
          <g-link class="navbar__link-btn" to="/">Home</g-link>
        </div>
        <div class="navbar__link" @click="closeMenu('/portfolio/')" >
          <g-link class="navbar__link-btn" to="/portfolio/">Portfolio</g-link>
        </div>
        <div class="navbar__link" @click="closeMenu('/services/')" >
          <g-link class="navbar__link-btn" to="/services/">Services</g-link>
        </div>
        <div class="navbar__link" >
          <g-link
            class="navbar__link-btn"
            href="https://jaymcmullen.typeform.com/to/l2NuGf"
            rel="noreferrer"
            >Contact</g-link
          >
        </div>
      </div>
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
    brandStyle() {
      return {
        navbar__brand: true,
        'navbar__brand--is-active': this.isMenuOpen,
      };
    },
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
    closeMenu(link) {
      if(link === this.$router.currentRoute.path) {
        this.isMenuOpen = false;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin: 1rem auto;

  &__hamburger {
    padding: 0;
    width: 32px;
    z-index: 10;
  }

  &__menu {
    display: flex;
    position: fixed;
    top: 100vh;
    left: 0;
    height: 0;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    background-color: $color-black;
    padding: 8rem 2rem;
    transition: all 0.3s ease 0s;
    z-index: 5;

    &--is-active {
      top: 0;
      height: 100vh;
    }

    &-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  &__link {
    text-align: center;
    margin: 1rem 0;

    &-btn {
      color: $color-white;
      font-family: $font-catamaran;
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1.35;
      text-transform: uppercase;
      opacity: 0.7;
      transition: opacity 0.3s ease 0s;

      @include tablet {
        font-size: 2rem;
        margin: 2rem 0;
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  &__brand {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    margin: 0;
    z-index: 10;
    transition: all 0.3s ease 0s;

    &--is-active {
      a {
        color: $color-white;
      }
    }
  }
}
</style>

<style lang="scss">
.hamburger {
  outline: none;
  width: 24px;

  &:hover {
    opacity: 1 !important;
  }

  &.is-active {
    .hamburger-inner,
    .hamburger-inner:after,
    .hamburger-inner:before {
      background-color: $color-white;
    }
  }
}

.hamburger-inner,
.hamburger-inner:after,
.hamburger-inner:before {
  width: 24px;
  border-radius: 0;
  height: 2px;
}
</style>
