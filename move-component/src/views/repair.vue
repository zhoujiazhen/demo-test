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
        <el-table-column prop="why" label="故障原因"></el-table-column>
        <el-table-column prop="dsc" label="状态"></el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template #default>
            <el-button type="text" size="small">完成</el-button>
            <el-button type="text" size="small">更换</el-button>
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
          date: "2019-05-03",
          name: "C16-229",
          dsc: "已完成",
          why: "水管爆裂",
        },
        {
          date: "2011-05-04",
          name: "C16-228",
          dsc: "需要更换",
          why: "空调外机异响",
        },
        {
          date: "2019-05-05",
          name: "C16-555",
          dsc: "已完成",
          why: "瓷砖破裂",
        },
        {
          date: "2019-05-06",
          name: "C16-234",
          dsc: "已完成",
          why: "厕所堵了",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
