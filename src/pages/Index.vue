<template>
  <Layout>
    <Hero />
    <Brands />
    <Services :button="true" />
  </Layout>
</template>

<script>
import Hero from '../components/pages/home/Hero';

export default {
  components: {
    Hero,
    Brands: () => import('../components/pages/home/Brands'),
    Services: () => import('../components/pages/home/Services'),
  },
  metaInfo: {
    title: 'Software Engineer',
    meta: [
      { name: 'application-name', content: 'Jay McMullen' },
      {
        name: 'description',
        content:
          'Sydney based web developer with over 6 years experience. I can provide high quality features to existing applications or work with you to architect something from the ground up.',
        id: 'desc',
      },
      {
        name: 'twitter:title',
        content: 'Jay McMullen - Software Engineer',
      },
      {
        n: 'twitter:description',
        c:
          'Sydney based web developer with over 6 years experience. I can provide high quality features to existing applications or work with you to architect something from the ground up.',
      },
      { itemprop: 'name', content: 'Jay McMullen - Software Engineer' },
      {
        itemprop: 'description',
        content:
          'Sydney based web developer and software engineer with over 6 years experience. I can provide high quality features to existing applications or work with you to architect something from the ground up.',
      },
      {
        property: 'og:title',
        content: 'Jay McMullen - Software Engineer',
      },
      { property: 'og:image', content: 'https://jays.works/jay-mcmullen.png' },
    ],
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
