<template>
  <div class="mynav">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <router-link to="/admin">考勤管理</router-link>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <router-link to="/honor">荣誉宿舍</router-link>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <router-link to="/repair">维修工单</router-link>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <router-link to="/person">个人信息</router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style>
.mynav {
  position: relative;
  top: 5px;
  margin-bottom: 20px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  position: relative;
  top: 5px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.grid-content {
  position: relative;
  font-size: 24px;
  color: black;
}
.grid-content a {
  text-decoration: auto;
  color: black;
}
.router-link-active {
  text-decoration: auto;
  color: black;
}
</style>
<script>
export default {
  name: "mynav",
  data() {},
};
</script>
