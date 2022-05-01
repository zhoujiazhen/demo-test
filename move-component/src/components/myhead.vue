<template>
  <div>
    <el-container>
      <el-header>
        <div>
          <router-link to="/">
            <h2 style="color: white">
              广州城市理工学院学生宿舍管理系统
            </h2></router-link
          >
        </div>
        <div id="user">
          当前用户:
          <el-tag>{{ $store.state.username }}</el-tag>
          <router-link to="/"> <el-tag> 注销</el-tag></router-link>
        </div>
      </el-header>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "myhead",
  data() {},
};
</script>
