import { App } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NProgress from "nprogress"; // progress bar
import HomeRoutes from "./modules/home";
import ErrorVue from "@/views/Error.vue";

const routes: RouteRecordRaw[] = [
  HomeRoutes,
  // 不识别的path自动匹配404
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: ErrorVue,
  },
];
// 禁⽤进度环 若为true右侧会出现一个进度环
NProgress.configure({ showSpinner: false });
//创建路由实例并传递 `routes` 配置
export const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.VITE_BASE),
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 };
  },
});

// setup router
export function setupRouter(app: App) {
  // 路由守卫
  router.beforeEach((to, from, next) => {
    NProgress.start(); // 开始进度条
    // console.log("全局前置守卫");
    next();
  });
  router.afterEach((to, from) => {
    // console.log("全局后置钩子");
    NProgress.done(); // 结束进度条
  });
  app.use(router);
}
