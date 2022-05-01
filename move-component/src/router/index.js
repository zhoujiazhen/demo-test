import { createRouter, createWebHistory } from "vue-router";
// 需要在这里引入组件才能进行路由的跳转
import HomeView from "../views/HomeView.vue";
import Admin from "../views/admin.vue";
import Registered from "../views/registered.vue";
import Honordor from "../views/honordor.vue";
import Repair from "../views/repair.vue";
import Person from "../views/person.vue";

const routes = [
  {
    //默认页面
    path: "/",
    name: "home",
    // 下面这个Home就是上面引入组件的名字
    // component: HomeView,
    redirect: "/login",
  },
  {
    path: "/login",
    name: "登录页",
    component: HomeView,
  },
  {
    //管理员界面跳转
    path: "/admin",
    name: "admin",
    component: Admin,
  },
  {
    //注册界面跳转
    path: "/registered",
    name: "registered",
    component: Registered,
  },
  {
    //荣誉宿舍界面跳转
    path: "/honor",
    name: "Honordor",
    component: Honordor,
  },
  {
    //维修工单界面跳转
    path: "/repair",
    name: "Repair",
    component: Repair,
  },
  {
    //维修工单界面跳转
    path: "/person",
    name: "Person",
    component: Person,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//暴露路由出去
export default router;
