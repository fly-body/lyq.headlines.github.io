<template>
  <div id="app">
    <header>新闻头条</header>
    <nav>
      <ul>
        <li :class="{navinit:isActive=='topNews'}" @click="changeNav('topNews')">头条新闻</li>
        <li :class="{navinit:isActive=='typeNews'}" @click="changeNav('typeNews')">分类新闻</li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isActive: "typeNews",
    };
  },
  created(){
    // lastIndexOf()方法可以返回某个子字符串在字符串中最后出现的位置。
    // substring是从中截取一段字符串，在组成一个新的字符串。
    // 这个作用是刚进来样式为空
    let path = location.href
    this.isActive = path.substring(path.lastIndexOf('/')+1);
  },
  methods:{
    changeNav(params){
      this.isActive = params;
      if(params == 'topNews'){
        this.$router.push('/topNews')
      }else if(params == 'typeNews'){
        this.$router.push('/typeNews')
      }
    }
  }
};
</script>

<style>
  html,body,div,header,nav,h1,h2,h3,h4,h5,h6,ul,li{
        margin: 0;
        padding: 0;
        font-family: "微软雅黑";
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    header{
        width: 100%;
        height: 48px;
        background-color: #E03D3E;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: #fff;
        /*设置字间距*/
        letter-spacing: 4px;
    }
    nav{
        width: 100%;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    nav ul{
        width: 160px;
        height: 26px;
        display: flex;
        justify-content: space-between;
    }
    nav ul li{
        width: 70px;
        height: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .navinit{
        color: #E03D3E;
        border-bottom: solid 2px #E03D3E;
    }
</style>>
