<template>
  <Layout>
    <Hero />
  </Layout>
</template>

<script>
import Hero from "../components/pages/home/Hero";

export default {
  components: {
    Hero
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
