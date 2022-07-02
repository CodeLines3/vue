import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeRoutes from "./modules/home";
const routes = [
  HomeRoutes
];
//创建路由实例并传递 `routes` 配置
export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE),
  routes, 
});

// setup router
export function setupRouter(app: App) {
  // 路由守卫
  router.beforeEach((to, from, next) => {
    // console.log("全局前置守卫");
    next();
  });
  router.afterEach((to, from) => {
    // console.log("全局后置钩子");
  });
  app.use(router);
}
