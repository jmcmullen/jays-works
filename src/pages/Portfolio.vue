<template>
  <Layout>
    <Overview :work="$page.work.edges" />
  </Layout>
</template>

<script>
export default {
  components: {
    Overview: () => import('../components/pages/portfolio/Overview'),
  },
  metaInfo: {
    title: 'Portfolio',
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
        content: 'Jay McMullen - My Portfolio',
      },
      {
        n: 'twitter:description',
        c:
          'Sydney based web developer with over 6 years experience. I can provide high quality features to existing applications or work with you to architect something from the ground up.',
      },
      { itemprop: 'name', content: 'Jay McMullen - My Portfolio' },
      {
        itemprop: 'description',
        content:
          'Sydney based web developer with over 6 years experience. I can provide high quality features to existing applications or work with you to architect something from the ground up.',
      },
      {
        property: 'og:title',
        content: 'Jay McMullen - My Portfolio',
      },
      { property: 'og:image', content: 'https://jays.works/jay-mcmullen.png' },
    ],
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
        link
        slug
      }
    }
  }
}
</page-query>
