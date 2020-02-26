// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import WebFont from 'webfontloader';
import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/styles/theme.scss';

export default function(Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout);

  if (isClient) {
    WebFont.load({
      google: {
        families: ['Catamaran:n4,n7'],
      },
    });
  }
}
