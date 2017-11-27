<template>
  <div class="wx-nav">
     <nav>
         <!-- <router-link> 组件支持用户在具有路由功能的应用中（点击）导航。 通过 to 属性指定目标地址，默认渲染成带有正确链接的 <a> 标签，可以通过配置 tag 属性生成别的标签.。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名。 -->
         <router-link to="/" tag="dl" exact>
            <dd class="iconfont icon-wechat" >
                  <!-- //微信下边有对话时显示的泡泡 -->
                 <i class="new-msg-count" v-show="$store.state.newMsgCount">{{$store.state.newMsgCount}}</i>
            </dd>
            <p>微信</p>
         </router-link>
         <router-link to="/contact" tag="dl">
            <dd class="iconfont icon-contact" >
                <!-- <i class="new-msg-count">2</i> -->
            </dd>
            <p>通讯录</p>
         </router-link>
         <router-link to="/find" tag="dl">
            <dd class="iconfont icon-find" >
                <i class="new-msg-dot"></i>
            </dd>
            <p>发现</p>
         </router-link>
         <router-link to="/self" tag="dl">
            <dd class="iconfont icon-me" >
                 <!-- <i class="new-msg-count">3</i> -->
            </dd>
            <p>我</p>
         </router-link>
     </nav>
  </div>
</template>


<script>
 export default {
  name: "WxNav",
  data(){
      return{}
  },
  mounted() {
        for (var i in this.$store.state.msgList.baseMsg) {
            if (this.$store.state.msgList.baseMsg[i].read === false && this.$store.state.msgList.baseMsg[i].quiet === false) {
                this.$store.commit('addNewMsg')
            }
        }
    }
 };
</script>

 <style scoped>
    .wx-nav nav{
        /* border: 3px solid rebeccapurple; */
        display: flex;
        width: 100%;
        height: 50px;
        padding-top: 8px;
        font-size: 12px;
        overflow: hidden;
        background:#f9f9f9;
    }
    .wx-nav nav dl{
        cursor: pointer;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        -webkit-flex-grow: 1;
        flex-grow: 1;
        text-align: center;
        line-height: 1;
    }
    .wx-nav nav dl.router-link-active p,
    .wx-nav nav dl.router-link-active dd{
        color: #0bb908;
    }
    .wx-nav nav dd {
        position: relative;
        width: 28px;
        height: 28px;
        margin: 0 auto;
        font-size: 30px;
        color: #797979;
        margin-bottom: 3px;
    }
    .wx-nav nav p{
        color: #797979;
        -webkit-transform-origin:50% 0;
        -ms-transform-origin:50% 0;
        transform-origin:50% 0;
        -webkit-transform:scale(0.9);
        -ms-transform:scale(0.9);
        transform:scale(0.9)
    }
 </style>

