<template>
    <div class="self">
        <div class="weui-tab__content" style="display:block">
            <div class="weui-cells">
                <router-link to="/self/personal" class="weui-cell weui-cell_access">
                  <div class="weui-cell__hd">
                      <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png" alt="" class="self-header">
                  </div>
                  <div class="weui-cell__bd">
                      <h4 class="self-nickname">阿荡</h4>
                      <p class="self-wxid">微信号:zhaosix666</p>
                  </div>
                  <div class="weui-cell__ft">
                      <img src="../../assets/images/chat-info-qr.png">
                  </div>
                </router-link>
            </div>
            <div class="weui-cells">
                <router-link to="/self/album" class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/me_more-my-album.png">
                    </div>
                    <div class="weui-cell__bd">
                        <p>相册</p>
                    </div>
                </router-link>
                <router-link to="/self/album" class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/me_more-my-favorites.png">
                    </div>
                    <div class="weui-cell__bd">
                        <p>收藏</p>
                    </div>
                </router-link>
                <router-link to="/self/album" class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/me_more-my-bank-card.png">
                    </div>
                    <div class="weui-cell__bd">
                        <p>钱包</p>
                    </div>
                </router-link>
                <router-link to="/self/album" class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/me_my-card-package-icon.png">
                    </div>
                    <div class="weui-cell__bd">
                        <p>卡券</p>
                    </div>
                </router-link>            
            </div>
            <div class="weui-cells">
                 <router-link to="/self/album" class="weui-cell weui-cell_access">
                   <div class="weui-cell__hd">
                        <img src="../../assets/images/me_more-expression.png">
                   </div>
                   <div class="weui-cell__bd">
                        <p>表情</p>
                    </div>
                 </router-link>
            </div>
            <div class="weui-cells">
                 <router-link to="/self/setting" class="weui-cell weui-cell_access">
                   <div class="weui-cell__hd">
                        <img src="../../assets/images/me_more-setting.png">
                   </div>
                   <div class="weui-cell__bd">
                        <p>设置</p>
                    </div>
                 </router-link>
            </div>

        </div>
    </div>
</template>


<script>
export default {
  name:'self'
}
</script>


<style>
    .self .weui-cell__hd .self-header{
        /* border: 1px solid purple; */
       width: 60px;
       height: 60px;
    }
  .self .weui-cell__ft img{
      /* border:1px solid red; */
      width: 25px;
      height: 25px;
      margin-right: 15px;
  }
  .self .weui-cell__bd .self-wxid{
      /* border: 1px solid red; */
      color: #cccccc;
  }
  .self .weui-cell__hd img{
      /* border: 1px solid red; */
      width: 23px;
      height: 23px;
  }
</style>
