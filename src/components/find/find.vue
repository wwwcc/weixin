<template>
  <div class="find">
      <section>
            <div class="weui-cells">
                <router-link to="/find/coments" class="weui-cell weui-cell_access" tag="div" v-on:click.native="momentNewMsg=false">
                <div class="weui-cell__hd">
                    <img src="../../assets/images/find_icon-circle.png" >
                </div>
                <div class="weui-cell__bd" style="line-height: 28px;">
                    朋友圈
                </div>
                <div class="weui-cell__ft">
                    <div class="home__notice" v-show="momentNewMsg">
                        <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" alt="6666" class="">
                        <i class="new-msg-dot"></i>
                    </div>
                </div>
                </router-link>
            </div>

            <div class="weui-cells">
                <div class="weui-cell weui-cell_access" id="scanCell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/find_icon-qrcode.png" >
                    </div>
                    <div class="weui-cell__bd">
                        扫一扫
                    </div>
                </div>
                 <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/find_icon-shake.png">
                    </div>
                    <div class="weui-cell__bd">
                        摇一摇
                    </div>
                </div>

            </div>
            <div class="weui-cells">
                 <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/find_icon-shopping.png">
                    </div>
                     <div class="weui-cell__bd">
                        购物
                    </div>
                 </div>   
                 <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/find_icon-moregame.png">
                    </div>
                    <div class="weui-cell__bd">
                       游戏
                    </div>
                </div>   
            </div>
                
      </section>     
  </div>
</template>


 <script>
    export default {
    mixins: [window.mixin],
    name:'find',
    data(){
            return {
                pageName: "发现",
                momentNewMsg: true
            }
    }
    }
</script>


<style>
    /* .find{
       border:1px solid red;
    } */
    .find .weui-cell__hd img{
      /* border: 1px solid white; */
        width: 20px;
        margin-right: 10px;
        display: block;
    }
    .find .home__notice {
         position: relative
    }
    .find .home__notice img {
        width: 28px;
        height: 28px;
        vertical-align: middle
    }
    
    .find .new-msg-dot {
        position: absolute;
        top: -4px;
        right: -5px;
        display: inline-block;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background-color: red
    }
</style>
