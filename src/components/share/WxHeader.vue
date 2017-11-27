 <template>
  <!--复兴性高，数据交互比较频繁-->
  <div class="WxHeader">
    <!--右上角图标-->
    <div class="other">
      <!--只在“微信”页显示 更多图标-->
      <span class="iconfont icon-tips-jia" v-show="$route.path==='/'" v-on:click="$store.commit('toggleTipsStatus')"></span>
      <!--只在“通讯录”页显示 显示添加好友图标-->
      <router-link tag="span" to="#" class="iconfont icon-tips-add-friend" v-show="$route.path==='/contact'"></router-link>
      <!--只在“添加朋友”页显示 -->
      <!-- <span v-show="$route.path==='/contact/new-friends'">添加朋友</span> -->
      <!-- 微信页右上角"+"更多图标的菜单 附带过渡效果-->
      <ul class="tips-menu" :class="[$store.state.tipsStatus?'tips-open':'tips-close']" v-on:click="$store.commit('toggleTipsStatus', -1)">
        <li> 
          <span class="iconfont icon-tips-xiaoxi"></span>
          <div>发起群聊</div>
        </li>
        <router-link tag="li" to="/wehchat/add-friend"> 
          <span class="iconfont icon-tips-add-friend"></span>
          <div>添加朋友</div>
        </router-link>
        <li> <span class="iconfont icon-tips-saoyisao"></span>
          <div>扫一扫</div>
        </li>
        <li> <span class="iconfont icon-tips-fukuan"></span>
          <div>收付款</div>
        </li>
      </ul>
      <!--<div class="tips-masker" v-show="tips_isOpen"></div>-->
    </div>
    <div class="center">
      <!-- <transition name="fade">
          <div class="iconfont icon-return-arrow" style="left: 10px;position: absolute;font-size: 16px;" v-on:click="goBack" v-show="$route.path.split('/').length>2"><span>{{$store.state.backPageName}}</span></div> 
      </transition>-->
      <!--显示当前页的名字-->
      <span>{{$store.state.currentPageName}}</span>
    </div>
  </div>
</template>
 <script>
    export default {
        props: ["pageName"],
        data() {
            return {
                // 暂且用不到
                chatCount: true
            }
        },
        methods: {
            // 暂且用不到 先留着
            goBack() {
                this.$router.go(-1)
                    //保证返回操作后正确显示页面名称
                    // this.$store.commit("setPageName", this.$store.state.backPageName)
            }
        }
    }
</script>

 <style>
     .WxHeader {
            position: relative;
            z-index: 99;
            height: 45px;
            padding: 0 15px 0 10px;
            line-height: 45px;
            background: #1b1b1b;
            opacity: 1;
            color: #fff;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-user-select: none;
            -webkit-transition: all 0.3s linear;
            transition: all 0.3s linear
    }

    .WxHeader .center {
        margin: 0 auto;
        text-align: center;
        font-size: 17px
    }

    .WxHeader .center span {
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, Arial, sans-serif
    }

    .WxHeader .center .icon-return-arrow {
        left: 10px;
        position: absolute;
        font-size: 16px
    }

    .WxHeader .other {
        position: absolute;
        cursor: pointer;
        right: 10px
    }

    .WxHeader .other>span {
           
        font-size: 16px;
        display: inline-block
    }

    .WxHeader .other>.iconfont {
           
        font-size: 22px;
        width: 40px;
        text-align: center
    }

    .WxHeader .other .tips-masker {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 1;
        top: 45px;
        bottom: 50px
    }

    .WxHeader .other .tips-menu {
        position: absolute;
        z-index: 2;
        width: 133px;
        font-size: 16px;
        right: 0;
        top: 54px;
        text-align: left;
        border-radius: 2px;
        background-color: #49484b;
        padding: 0 15px;
        -webkit-transform-origin: 90% 0%;
        -ms-transform-origin: 90% 0%;
        transform-origin: 90% 0%
    }

    .WxHeader .tips-open {
        -webkit-transition: initial;
        transition: initial;
        opacity: 1
    }

    .WxHeader .tips-close {
        opacity: 0;
        -webkit-transition: .2s opacity ease, .6s -webkit-transform ease;
        transition: .2s opacity ease, .6s transform ease;
        -webkit-transform: scale(0);
        -ms-transform: scale(0);
        transform: scale(0)
    }

    .WxHeader .other .tips-menu li {
        position: relative;
        height: 40px;
        line-height: 40px
    }

    .WxHeader .other .tips-menu li:not(:last-child)::after {
        content: "";
        width: 200%;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        background-color: #5b5b5d;
        -webkit-transform: scale(0.5);
        -ms-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: 0 100%;
        -ms-transform-origin: 0 100%;
        transform-origin: 0 100%
    }

    .WxHeader .other .tips-menu::before {
        width: 0;
        height: 0;
        position: absolute;
        top: -7px;
        right: 15px;
        content: "";
        border-width: 0 6px 8px;
        border-color: transparent transparent #49484b transparent;
        border-style: solid
    }

    .WxHeader .other .tips-menu .iconfont {
        float: left;
        font-size: 16px;
        margin-right: 15px
    } 
 </style>
