<template>
  <div class="">
    <el-row :gutter="20">
      <el-col :span="8" :offset="8">
        <div style="height: 100px"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8" :offset="8">
        <el-card shadow="always">
          <h3>欢迎来到广州城市理工学院学生宿舍管理系统</h3>
          <h1>请注册</h1>
          <el-divider></el-divider>
          <el-form
            :model="info"
            ref="info"
            status-icon
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
                placeholder="请输入你的账号"
                type="text"
                v-model="info.username"
                clearable
              ></el-input>
            </el-form-item>
            <!-- 密码输入框 -->
            <el-form-item
              label="密码"
              prop="pwd"
              :rules="[
                { required: true, message: '密码不能为空' },
                { type: 'string' },
              ]"
            >
              <el-input
                placeholder="请输入密码"
                type="password"
                v-model="info.pwd"
                show-password
              ></el-input>
            </el-form-item>
            <!-- 确认密码 -->
            <el-form-item
              label="确认密码"
              prop="confirmpwd"
              :rules="[
                { required: true, message: '密码不能为空' },
                { type: 'string' },
              ]"
            >
              <el-input
                placeholder="请重新输入密码"
                type="password"
                v-model="info.confirmpwd"
                show-password
              ></el-input>
            </el-form-item>

            <!-- 登录重置按钮 -->
            <el-form-item>
              <el-button type="primary" @click="registered">注册</el-button>
              <el-button type="primary" @click="reset">重置</el-button>
              <router-link to="/login" style="text-decoration: auto">
                <el-button type="primary" style="margin-left: 12px"
                  >回到登录</el-button
                ></router-link
              >
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Registered",
  components: {},
  data() {
    return {
      info: {
        username: "",
        pwd: "",
        confirmpwd: "",
      },
    };
  },
  methods: {
    //   把用户输入的信息赋予给store中的属性，方便注册完了还能使用改账号登录
    submit() {},
    reset() {
      this.info.User = "";
      this.info.pwd = "";
      this.info.confirmpwd = "";
    },
    registered: function () {
      axios({
        url: "http://127.0.0.1:3000/registered",
        method: "POST",
        data: {
          account: this.info.username,
          password: this.info.pwd,
        },
      }).then((res) => {
        console.log(res.data);
        // alert("成功注册，请返回登录界面进行登录");
        if (res.data.say === "1") {
          alert("您已经成功注册，请返回登录界面进行登录");
        } else {
          alert("注册失败，请联系管理员进行处理！管理员电话100861000101");
        }
      });
    },
  },
};
</script>
