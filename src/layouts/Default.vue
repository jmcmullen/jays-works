<template>
  <div class="layout">
    <div class="layout__fixed-nav">
      <Navbar />
    </div>

    <transition name="fade" appear>
      <div class="layout__content">
        <slot />
        <Footer />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import('../components/partials/Navbar'),
    Footer: () => import('../components/partials/Footer'),
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  &__fixed-nav {
    position: fixed;
    width: 100%;
    background-color: #fff;
    z-index: 5;
  }

  &__content {
    margin-top: 100px;
  }
}

.fade-enter-active {
  transition: opacity 0.3s;
}

.fade-enter {
  opacity: 0;
}
</style>
