import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Login from '@/views/login/login.vue';

Vue.use(Router);
/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path     : '/login',
    name     : 'Login',
    component: Login
  }
]
export default new Router({
  mode  : 'history',
  base  : process.env.BASE_URL,
  routes: [
    {
      path     : '/',
      name     : 'login',
      component: Login,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    ...frameOut
  ],
});
