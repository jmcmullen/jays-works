<template>
  <div class="layout">
    <Navbar />
    <slot />
  </div>
</template>

<script>
  import Navbar from '../components/partials/Navbar';
  export default {
    components: {
      Navbar,
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

<style>
  body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
      Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }
</style>
