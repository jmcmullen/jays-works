// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/styles/theme.scss';

export default function(Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout);

  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css?family=Catamaran:400,700&display=swap',
  });

  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: `Freelance web developer based in Sydney, Australia with over 6 years of professional experience available for hire.`,
  });

  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    content: `Freelance web developer based in Sydney, Australia with over 6 years of professional experience available for hire.`,
  });

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    });
    next();
  });
}
