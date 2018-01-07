import Router from 'vue-router';
import Base from '@/components/base/Base';
import Test from '@/components/test/Test';
import Login from '@/components/login/Login';

// store router guards in applications store
// after every route make at least one api call that needs authorization

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
  // check if its default route
  // yes - let through
  // no - check applications store
  switch (to.name) {
    case 'Login': next();
      break;
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
