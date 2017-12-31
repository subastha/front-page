// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import normalize from 'normalize.css';
// import bootstrap from 'bootstrap';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
// import Muuri from 'muuri';

// import BootstrapVue from 'bootstrap-vue';
import { MdButton, MdField } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.css';

import store from './store';
import App from './App';
import router from './router';
import customComponents from './components/components';
// import style from './style';

// Vue.use(BootstrapVue);
Vue.use(MdButton);
Vue.use(MdField);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  normalize,
  store,
  // bootstrap,
  MdButton,
  MdField,
  // BootstrapVue,
  customComponents,
  // Muuri,
  // style,
  template: '<App/>',
  components: { App },
  // mounted() {
  //   this.$nextTick(
  //     () => {
  //       const grid = new Muuri('.grid');
  //       console.log(grid);
  //     },
  //   );
  // },
});

