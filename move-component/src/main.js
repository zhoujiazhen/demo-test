import { createApp } from "vue"; //创建一个实例
import App from "./App.vue"; //引入写好的vue文件
import router from "./router";
import store from "./store";
import "./assets/style.css";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
import axios from "axios";

//这个是vue3的创建实例以及是使用部分功能和挂载点
createApp(App).use(store).use(ElementPlus).use(router).mount("#app");
//这种是vue2的挂载方式：
//el:'#app'
