<template>
  <div class="personal">
      <header class="WxHeader">
          <div class="center">
            <router-link to="/self" tag="div" class="iconfont icon-return-arrow">
              <span>我</span>
            </router-link>
            <span>个人信息</span>
          </div>
      </header>
      <div class="weui-cells">        
         <div class="weui-cell" id="avatarCell">
            <div class="weui-cell__bd">
                <p>头像</p>
            </div>
            <div class="weui-cell__ft">
                <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png" style="width: 50px;height: 50px;border-radius: 4px;">
            </div>
         </div>
      </div>
      <div class="weui-cells">        
          <div class="weui-cell">
              <div class="weui-cell__bd">
                  <p>名字</p>
              </div>
              <div class="weui-cell__ft">
                  阿荡
              </div>
          </div>
           <div class="weui-cell">
              <div class="weui-cell__bd">
                  <p>微信号</p>
              </div>
              <div class="weui-cell__ft">
                  10001
              </div>
          </div>
           <div class="weui-cell">
              <div class="weui-cell__bd">
                  <p>我的二维码</p>
              </div>
              <div class="weui-cell__ft">
                  <img src="../../assets/images/chat-info-qr.png">
              </div>
          </div>
           <div class="weui-cell">
              <div class="weui-cell__bd">
                  <p>我的地址</p>
              </div>
          </div>
            
         
         
      </div>

       <div class="weui-cells">        
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>性别</p>
                </div>
                <div class="weui-cell__ft">
                    男
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>地区</p>
                </div>
                <div class="weui-cell__ft">
                    古埃及
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>个性签名</p>
                </div>
                <div class="weui-cell__ft">
                  这家伙很懒，什么都没留下...
                </div>
            </div>
       </div>
            
         
         
      </div>

  </div>
</template>
<script>
export default {
  name:'personal',
  data(){
    return{
       "pageName": "个人详情"
    }
  }
}
</script>
<style>
  .personal .weui-cells .weui-cell__ft img{
        /* border: 1px solid red; */
        width: 23px;
        height: 23px;
  }
</style>
