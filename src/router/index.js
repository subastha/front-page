import Vue from 'vue';
import Router from 'vue-router';
import Base from '@/components/base/Base';
import Test from '@/components/test/Test';
import Login from '@/components/login/Login';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/base',
      name: 'Base',
      component: Base,
      // beforeEnter: (to, from, next) => {
      //   // ...
      // }
    },
    {
      path: '/',
      name: 'Root',
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

// https://router.vuejs.org/en/advanced/navigation-guards.html
// router.afterEach((to, from) => {
//   // ...
// })

export default router;
