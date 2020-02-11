<template>
  <Layout>
    <Overview :work="$page.work.edges" />
  </Layout>
</template>

<script>
import Overview from '../components/pages/portfolio/Overview';

export default {
  components: {
    Overview,
  },
  metaInfo: {
    title: 'Portfolio',
  },
};
</script>

<page-query>
query Portfolio {
  work: allPortfolio {
    edges {
      node {
        title
        technology
        mobile(width: 95)
        desktop(width: 300)
      }
    }
  }
}
</page-query>
