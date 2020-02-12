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
    title: 'About us',
  },
};
</script>
