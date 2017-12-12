// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import normalize from 'normalize.css';
import bootstrap from 'bootstrap';
import Vue from 'vue';
import App from './App';
import router from './router';
import customComponents from './components/components';
// import style from './style';

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  normalize,
  bootstrap,
  customComponents,
  // style,
  template: '<App/>',
  components: { App },
});

