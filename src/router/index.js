import Vue from 'vue';
import Router from 'vue-router';
import Base from '@/components/base/Base';
import Test from '@/components/test/Test';
import Login from '@/components/login/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Base',
      component: Base,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
