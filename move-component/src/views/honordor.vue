<template>
  <div>
    <div style="height: 120px">
      <myhead />
      <mynav />
    </div>
    <div>
      <el-table
        :data="tableData"
        height="500"
        style="width: 100%"
        empty-text="暂无数据"
        bord
      >
        <el-table-column
          fixed
          prop="date"
          label="时间"
          width="500"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="宿舍号码"
          width="580"
        ></el-table-column>
        <el-table-column prop="dsc" label="荣誉名称"></el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template #default>
            <el-button type="text" size="small">删除</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="btn">
      <el-button type="primary" plain>增加</el-button>
    </div>
    <Footer />
  </div>
</template>
<script>
import Myhead from "../components/myhead.vue";
import Mynav from "../components/mynav.vue";
import Footer from "../components/footer.vue";
export default {
  components: {
    Myhead,
    Mynav,
    Footer,
  },
  data() {
    return {
      tableData: [
        {
          date: "2021-09",
          name: "C16-229",
          dsc: "院级文明宿舍",
        },
        {
          date: "2021-10",
          name: "C16-229",
          dsc: "校级文明宿舍",
        },
        {
          date: "2021-11",
          name: "C16-228",
          dsc: "院级文明宿舍",
        },
        {
          date: "2021-12",
          name: "C9-346",
          dsc: "校级文明宿舍",
        },
        {
          date: "2022-01",
          name: "C16-777",
          dsc: "院级文明宿舍",
        },
        {
          date: "2022-02",
          name: "C15-346",
          dsc: "校级文明宿舍",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
