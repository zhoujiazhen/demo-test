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
        <el-table-column prop="name" label="名字" width="580"></el-table-column>
        <el-table-column prop="dsc" label="状态"></el-table-column>
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
          date: "2019-05-03",
          name: "张无忌",
          dsc: "夜不归宿",
        },
        {
          date: "2011-05-04",
          name: "杨过",
          dsc: "不在宿舍",
        },
        {
          date: "2019-05-05",
          name: "小龙女",
          dsc: "使用大功率电器",
        },
        {
          date: "2019-05-06",
          name: "黄蓉",
          dsc: "熄灯还在大声喧哗",
        },
        {
          date: "2019-05-07",
          name: "张三丰",
          dsc: "聚众赌博",
        },
        {
          date: "2019-05-08",
          name: "燕破岳",
          dsc: "熄灯还在锻炼身体",
        },
        {
          date: "2019-05-10",
          name: "张良",
          dsc: "熄灯跑去吓唬别人",
        },
        {
          date: "2019-05-11",
          name: "后羿",
          dsc: "违规使用大功率电器",
        },
        {
          date: "2019-05-12",
          name: "李太白",
          dsc: "打麻将喝酒",
        },
        {
          date: "2019-06-13",
          name: "法外狂徒张三",
          dsc: "夜不归宿",
        },
        {
          date: "2019-05-12",
          name: "李太白",
          dsc: "打麻将喝酒",
        },
        {
          date: "2019-05-12",
          name: "黄药大师",
          dsc: "夜不归宿",
        },
      ],
    };
  },
};
</script>
