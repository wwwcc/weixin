<template>

  <div id="search">
      <div class="weui-search-bar" id="search_bar">
          <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" v-model="searchIpt" class="weui-search-bar__input" id="search_input" placeholder="搜索"/>
                    <a class="weui-icon-clear" v-on:click="searchClear"></a>
                </div>
                <label for="search_input" class="weui-search-bar__label" id="search_text">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
          </form> 
      </div>
   

  </div>
</template>

<script>
export default {
  name: "WxSearch",
  data(){
      return {
          searchIpt:''
      }
    },
    methods:{
        searchClear(){
            this.searchIpt=""
        }
    }
};
</script>

  <style scoped>
        #search {
            position: relative
        }
        #search .weui-search-bar__label {
            line-height: 1.8,
        }
        #search.search-open article{display:block}
        #search input{
           font-family:Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, Arial, sans-serif}
        #search article{
            background:#eee;
            position:absolute;
            height:800px;
            display:none;
            z-index:3;
            overflow:hidden;
            padding-top:30px;width:100%;opacity:0.99
        }
        #search article h3{text-align:center}
        #search article .tag{margin:20px 0}
        #search article .tag span{
            font-size:14px;text-align:center;
            width:33.33%;display:inline-block;
            box-sizing:border-box;color:#09bb07;
            border-right:1px solid rgba(220,220,220,0.67);
            margin-bottom:15px
        }
        #search article .tag span:nth-child(3n){
            border-right-color:transparent
        }
        #search article .weui-cells{background-color:transparent;
            width:85%;margin:0 auto
        }
        #search article .weui-cells .weui-cell{
            padding:15px
        }

  </style>

