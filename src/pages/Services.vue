<template>
  <Layout>
    <Technology />
    <Services />
  </Layout>
</template>

<script>
import Services from '../components/pages/home/Services';
import Technology from '../components/pages/services/Technology';

export default {
  components: {
    Services,
    Technology,
  },
  metaInfo: {
    title: 'Services',
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
        content: 'Jay McMullen - Services',
      },
      { itemprop: 'name', content: 'Jay McMullen - Services' },
      {
        itemprop: 'description',
        content:
          'Sydney based web developer with over 6 years experience. I can provide high quality features to existing applications or work with you to architect something from the ground up.',
      },
      {
        property: 'og:title',
        content: 'Jay McMullen - Services',
      },
      { property: 'og:image', content: 'https://jays.works/jay-mcmullen.png' },
    ],
  },
};
</script>
