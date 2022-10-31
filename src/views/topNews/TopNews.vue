<template>
  <div>
    <img src="../../assets/logo.png" alt="" />
    <news-list :data="newsList" />
  </div>
</template>

<script>
// 第三方插件实例对象

// 自定义组件
import NewsList from "../../components/NewsList.vue";

// 网络请求
import { getTopNews } from "../../network/topNews";

export default {
  name: "TopNews",
  data() {
    return {
      newsList: [],
    }
  },
  created() {
    this.getTopNews();
  },
  methods: {
    getTopNews() {
      getTopNews().then((res) => {
        this.newsList = res.result.data;
      });
    },
  },
  components: {
    NewsList,
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100px;
  display: block;
}
</style>