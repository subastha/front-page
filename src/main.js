// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import normalize from 'normalize.css';
// import bootstrap from 'bootstrap';
import Vue from 'vue';
import Router from 'vue-router';
import Vuelidate from 'vuelidate';

// import BootstrapVue from 'bootstrap-vue';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import { MdButton, MdField, MdDialog, MdDialogConfirm, MdTooltip }
  from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.css';
import router from './router';

import store from './store';
import App from './App';
import customComponents from './components/components';

Vue.use(Router);
// Vue.use(BootstrapVue);
Vue.use(MdButton);
Vue.use(MdField);
Vue.use(MdDialog);
Vue.use(MdDialogConfirm);
Vue.use(MdTooltip);
Vue.use(Vuelidate);
Vue.component('icon', Icon);
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
  MdDialog,
  MdDialogConfirm,
  MdTooltip,
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

