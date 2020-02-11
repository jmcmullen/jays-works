<template>
  <Layout>
    <br />
    <g-link to="/portfolio" class="link">&larr; Go Back</g-link>
    <div class="post-title">
      <h1 class="serif-font-face display-3">{{ $page.portfolio.title }}</h1>
      <p class="post-date">
        {{ $page.portfolio.technology }} | {{ $page.portfolio.screenshot }} min
        read
      </p>
    </div>
    <div class="post-content">
      <p v-html="$page.portfolio.content" />
    </div>
  </Layout>
</template>

<script>
export default {
  name: 'Portfolio',
};
</script>

<style scoped></style>

<page-query>
  query Portfolio ($id: ID!) {
    portfolio(id: $id) {
      title
      technology
      mobile
    }
  }
</page-query>
