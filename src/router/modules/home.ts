import { defineAsyncComponent } from "vue";
// // test suspense
// const Home = () => Promise.resolve(
//   defineAsyncComponent(() => import(/* webpackChunkName: "Home" */"@/views/home/home.vue"))
// ) 
const Home = () => import(/* webpackChunkName: "Home" */"@/views/home/home.vue")
const HomeRoutes = { 
  path: "/", component: Home
};
export default HomeRoutes;
