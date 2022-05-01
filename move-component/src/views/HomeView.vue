<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8" :offset="8">
        <div style="height: 100px"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8" :offset="8">
        <el-card shadow="always">
          <h3>欢迎来到广州城市理工学院学生宿舍管理系统</h3>
          <h1>请先登录</h1>
          <el-divider></el-divider>
          <el-form
            :model="info"
            ref="info"
            label-width="100px"
            class="demo-ruleForm"
          >
            <!-- 学号输入框 -->
            <el-form-item
              label="账号"
              prop="username"
              :rules="[
                { required: true, message: '账号不能为空' },
                { type: 'string' },
              ]"
            >
              <el-input
                v-model="info.username"
                placeholder="请输入你的账号"
                type="text"
                clearable
              ></el-input>
            </el-form-item>
            <!-- 密码输入框 -->
            <el-form-item
              label="密码"
              prop="userpassword"
              :rules="[
                { required: true, message: '密码不能为空' },
                { type: 'anthing' },
              ]"
            >
              <el-input
                placeholder="请输入密码"
                type="password"
                v-model="info.userpassword"
                show-password
              ></el-input>
            </el-form-item>

            <!-- 登录重置按钮 -->
            <el-form-item>
              <el-button type="primary" @click="onPostBtn">登录</el-button>
              <el-button type="primary" @click="reset">重置</el-button>
              <el-button type="primary" @click="userregistered">注册</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
//导入组件
import axios from "axios";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      info: {
        username: "",
        userpassword: "",
      },
    };
  },
  methods: {
    onPostBtn: function () {
      axios({
        url: "http://127.0.0.1:3000/login", //进行请求的接口
        method: "POST", //是用POST的方式请求
        data: {
          account: this.info.username, //通过双向绑定，能够将前端的数据赋值给后端
          password: this.info.userpassword,
        },
      }).then((res) => {
        // //要是成功查询到，就进行路由的跳转

        console.log("成功登录"); //在控制台打印出来登录成功，方便排查bug

        if (res.data.say === "1") {
          //后端返回的json数据，进行判断后台的数据库是否存在相应的账号密码
          this.$router.push("/admin");
        } else {
          alert(res.data.say);
        }
      });
    },
    reset() {
      this.info.username = null;
      this.info.userpassword = null;
    },

    userregistered() {
      if (true) {
        this.$router.push("/registered");
      }
    },
  },
};
</script>
<style></style>
