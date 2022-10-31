<template>
  <div>
    <ul>
      <li v-for="(item, index) in data" :key="index" @click="toNews(item.url)">
        <div class="img-box">
          <img :src="item.thumbnail_pic_s" alt="" />
        </div>
        <div class="text-box">
          <h3>{{ item.title | titleFilter }}</h3>
          <p>{{ item.author_name }} {{ item.date }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    toNews(url) {
      console.log(url);
      location.href = url;
    },
  },
  filters: {
    titleFilter(value) {
      if (value.length > 24) {
        value = value.substr(0, 24) + "...";
      }
      return value;
    },
  },
};
</script>

<style scoped>
ul {
  width: 100%;
}
ul li {
  box-sizing: border-box;
  padding: 6px;
  width: 100%;
  height: 93px;
  display: flex;
  border-bottom: dashed 1px #aaa;
  user-select: none;
  cursor: pointer;
}
ul li .img-box {
  flex: 0 0 100px;
  height: 80px;
}
ul li .img-box img {
  width: 100px;
  height: 80px;
}
ul li .text-box {
  flex: 1;
  box-sizing: border-box;
  padding-left: 10px;
}
ul li .text-box h3 {
  font-size: 16px;
  font-weight: 300;
}
ul li .text-box p {
  font-size: 14px;
  text-align: right;
}
</style>