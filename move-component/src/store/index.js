import { createStore } from "vuex";

export default createStore({
  state: {
    account: [
      {
        id: "",
      },
    ],
    list: [
      {
        label: "首页",
      },
      {
        label: "宿舍管理员管理",
      },
      {
        label: "学生管理",
      },
      {
        label: "宿舍荣誉列表",
      },
      {
        label: "缺勤记录",
      },
      {
        label: "报修记录",
      },
      {
        label: "退出系统",
      },
    ],
    isShow: false,
    username: "张无忌",
  },
  // 可以在getters中定义属性
  getters: {},
  mutations: {
    change(state) {},
  },
  actions: {},
  modules: {},
});
