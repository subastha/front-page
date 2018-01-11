<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import AuthService from './core/services/common/AuthService';
// import { HttpErrorHandler, HttpTokenValidationSuccessHandler }
// from './core/services/common/handlers';

export default {
  name: 'app',
  // methods: {
  //   ...mapMutations([
  //     'isLoggedIn',
  //   ]),
  // },
  beforeCreate() { // todo: do this before creating vue instance ??
    // AuthService.validateToken()
    //   .then(HttpTokenValidationSuccessHandler.bind(this), HttpErrorHandler.bind(this));
    // console.log('beforeCreate App');
  },
};
</script>

<style lang="scss">
  @import 'App.scss';
  @import './components/components.scss';


</style>
