import Router from 'vue-router';
import Base from '@/components/base/Base';
import Test from '@/components/test/Test';
import Login from '@/components/login/Login';
// import store from '@/store';

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
    // {
    //   path: '*',
    //   redirect: '/',
    //   component: Base,
    // },
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

router.beforeEach((to, from, next) => {
  console.log('to from', to, from);
  switch (to.name) {
    case 'Login':
    case 'Base':
    case 'Root':
    case 'Test': next();
      break;
    default: router.push(Login);
      break;
  }
});

// https://router.vuejs.org/en/advanced/navigation-guards.html
// router.afterEach((to, from) => {
//   // ...
// })

export default router;
