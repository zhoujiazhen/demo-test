<template>
  <div>
    <div style="height: 120px">
      <myhead />
      <mynav />
    </div>
    <div>
      <el-descriptions title="管理员信息">
        <el-descriptions-item label="管理员名字：">张无忌</el-descriptions-item>
        <el-descriptions-item label="联系电话："
          >100860000</el-descriptions-item
        >
        <el-descriptions-item label="性别：">男</el-descriptions-item>
        <el-descriptions-item label="所属楼层管理员："
          >广州城市理工学院C16宿舍管理员</el-descriptions-item
        >
        <el-descriptions-item label="身份:">
          <el-tag size="small" label="">管理员</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="地址:"
          >广东省广州市花都区秀全街道学府路一号广州城市理工学院</el-descriptions-item
        >
      </el-descriptions>
    </div>

    <div>
      <el-calendar v-model="value"></el-calendar>
    </div>
    <Footer />
  </div>
</template>
<script>
const value = ref(new Date());
import { ref } from "vue";
import Myhead from "../components/myhead.vue";
import Mynav from "../components/mynav.vue";
import Footer from "../components/footer.vue";
export default {
  components: {
    Myhead,
    Mynav,
    Footer,
  },
};
</script>
<style scoped>
.infoimg {
  width: 200px;
  height: 200px;
  background-image: url(../../public/3.jpg);
  position: relative;
}
</style>
