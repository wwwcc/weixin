<template>
  <div id="app">
    <!-- 进入微信的界面时出现的地球 -->
     <!-- <welcome></welcome> -->
     <div class="outter" :class="{'hideLeft':$route.path.split('/').length>2}">
       <!-- 界面里的公用微信的头部 -->
        <header class="app-header" :class="{'header-hide':!$store.state.headerStatus}">
            <wx-header :pageName="pageName"></wx-header>
        </header>
        <!-- 微信与通讯录公用的搜索框 -->
        <wx-search v-show="$route.path.indexOf('find')===-1&&$route.path.indexOf('self')===-1"></wx-search>

        <section class="app-content">
          <router-view/>        
        </section>

        <footer class="app-footer">
            <wx-nav></wx-nav>
        </footer>
     </div>
     <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
        <router-view name="subPage" class="sub-page"></router-view>
     </transition>
  </div>
</template>

<script>
import Welcome from './components/share/Welcome'
import WxHeader from './components/share/WxHeader'
import WxNav from './components/share/WxNav'
import WxSearch from './components/share/WxSearch'
 import mixin from "./vuex/mixin.js"

 window.mixin = mixin
export default {
  name: 'app',
  components:{
    'welcome':Welcome,
    'wx-header':WxHeader,
    'wx-nav':WxNav,
    'wx-search':WxSearch,
  },
  data() {
        return {
            "pageName": "",
            "routerAnimate": false,
            "enterAnimate": "", //页面进入动效
            "leaveAnimate": "" //页面离开动效
        }
    },
  watch: {
       // 监听 $route 为店内页设置不同的过渡效果
       "$route" (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            if (toDepth === 2) {
                this.$store.commit("setPageName", to.name)
            }
          //同一级页面无需设置过渡效果
            if (toDepth === fromDepth) {
                return;
            }
            this.enterAnimate = toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft"
            this.leaveAnimate = toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight"
                // 从店面页进入店内页 需要对店内页重新设置离开动效 因为他们处于不同 name 的 router-view
            if (toDepth === 3) {
                this.leaveAnimate = "animated fadeOutRight"
            }
        }
    }
}
</script>

<style>
    @import "assets/css/base.css";
    @import "assets/css/common.css";
    @import "assets/css/lib/iconfont.css";

    /*过渡效果需要的动画库，跳转到另一页面的滑动效果*/
    @import "assets/css/lib/animate.css";
    /*weui 样式库 非常适合高仿微信*/
    /* //控制的样式 除了微信页面的其他页的样式*/
    @import "assets/css/lib/weui.min.css"; 
</style>
