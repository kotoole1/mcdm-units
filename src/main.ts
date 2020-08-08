import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
// @ts-ignore
import VTooltip from 'v-tooltip';
// @ts-ignore
import VueShortkey from 'vue-shortkey';

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    btn: (extra?: string) => {
      return ['mu-btn', 'mdl-button', 'mdl-js-button', 'mdl-button--raised', extra ? 'mdl-button--' + extra : ''];
    },
    btnFlat: (extra?: string) => {
      return ['mu-btn', 'mdl-button', 'mdl-js-button', 'mdl-js-ripple-effect', extra ? 'mdl-button--' + extra : ''];
    },
  },
});

Vue.use(VueShortkey);
Vue.use(VTooltip, {
  defaultBoundariesElement: document.body
});

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');
