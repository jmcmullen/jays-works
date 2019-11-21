<template>
  <Layout>
    <Hero />
    <Brands />
  </Layout>
</template>

<script>
  import Hero from '../components/pages/home/Hero';
  import Brands from '../components/pages/home/Brands';

  export default {
    components: {
      Hero,
      Brands,
    },
    metaInfo: {
      title: 'Freelance Web Developer',
      description:
        'Sydney based web developer with over 5 years experience. I can provide high quality features to existing applications or work with you to architect something from the ground up.',
    },
  };
</script>

<style>
  .home-links a {
    margin-right: 1rem;
  }
</style>
