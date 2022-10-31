<template>
  <div>
    <div class="news-img">
      <a :href="news.url"></a>
    </div>
    <div class="type-news">
      <ul>
        <li
          v-for="(item, index) in typeList"
          :class="{ typeinit: isAlive == item.id }"
          @click="change(item.id)"
          :key="index"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <NewsList :data="newsList"></NewsList>
  </div>
</template>

<script>
import NewsList from "../../components/NewsList.vue";
import { getTypeNews } from "../../network/typeNews";
export default {
  name: "TypeNews",
  data() {
    return {
      typeList: [
        { id: "shehui", name: "社会" },
        { id: "guonei", name: "国内" },
        { id: "guoji", name: "国际" },
        { id: "yule", name: "娱乐" },
        { id: "tiyu", name: "体育" },
        { id: "junshi", name: "军事" },
        { id: "keji", name: "科技" },
        { id: "caijing", name: "财经" },
        { id: "shishang", name: "时尚" },
      ],
      isAlive: "shehui",
      newsList: [],
      news: {},
    };
  },
  created() {
    this.getTypeNews('shehui');
  },
  methods: {
    getTypeNews(type) {
      getTypeNews(type).then((res) => {
        this.newsList = res.result.data;
        this.news = this.newsList[Math.floor(Math.random() * this.newsList.length)];
      });
    },
    change(id) {
      this.isAlive = id;
      this.getTypeNews(id);
    },
  },
  components: {
    NewsList,
  },
};
</script>

<style scoped>
.news-img img{
        width: 100%;
        height: 200px;
        display: block;
    }
    .type-news{
        width: 100%;
        margin-top: 8px;
    }
    .type-news ul{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .type-news ul li{
        box-sizing: border-box;
        width: 48px;
        height: 22px;
        border: solid 1px #E03D3E;
        border-radius: 11px;
        margin: 5px 10px;
        font-size: 14px;
        color: #E03D3E;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .typeinit{
        background-color: #E03D3E;
        color: #fff !important;     /*!important：将优先级提升最高*/
    }
</style>