import { createRouter, createWebHistory } from "vue-router";
const Home = () => import('@/views/home/home.vue');
const routes = [
    { path: "/", component: Home }
];
//创建路由实例并传递 `routes` 配置
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE),
  routes, 
});

router.beforeEach((to, from, next) => {
  // console.log("全局前置守卫");
  next();
});
router.afterEach((to, from) => {
  // console.log("全局后置钩子");
});

export default router
