<template>
  <div class="setting">
    <header class="WxHeader">
      <div class="center">
        <router-link to="/self" tag="div" class="iconfont icon-return-arrow">
           <span>我</span>
        </router-link>
        <span>设置</span>
      </div>
    </header>
    <div class="weui-cells">
        <router-link to="#" class="weui-cell weui-cell_access" tag="div" v-on:click.native="momentNewMsg=false">            
            <div class="weui-cell__bd" style="line-height: 28px;">
                账号与安全
            </div>
            <div class="weui-cell__ft">
                已保护
            </div>
        </router-link>     
    </div>
     <div class="weui-cells">
        <router-link to="#" class="weui-cell weui-cell_access" tag="div" v-on:click.native="momentNewMsg=false">            
            <div class="weui-cell__bd" style="line-height: 28px;">
                新消息通知
            </div>
            <div class="weui-cell__ft"></div>
        </router-link>   
         <router-link to="#" class="weui-cell weui-cell_access" tag="div" v-on:click.native="momentNewMsg=false">            
            <div class="weui-cell__bd" style="line-height: 28px;">
                隐私
            </div>  
            <div class="weui-cell__ft"></div>   
        </router-link>   
         <router-link to="#" class="weui-cell weui-cell_access" tag="div" v-on:click.native="momentNewMsg=false">            
            <div class="weui-cell__bd" style="line-height: 28px;">
                通用
            </div>
            <div class="weui-cell__ft"></div>
        </router-link>     
    </div>
    <div class="weui-cells">
        <router-link to="#" class="weui-cell weui-cell_access" tag="div" v-on:click.native="momentNewMsg=false">            
            <div class="weui-cell__bd" style="line-height: 28px;">
                帮助与反馈
            </div>
             <div class="weui-cell__ft"></div>
        </router-link>   
         <router-link to="#" class="weui-cell weui-cell_access" tag="div" v-on:click.native="momentNewMsg=false">            
            <div class="weui-cell__bd" style="line-height: 28px;">
                关于微信
            </div>  
             <div class="weui-cell__ft"></div>   
        </router-link>   
        <div class="weui-btn-area">
            <button class="weui-btn weui-btn_warn" id="exitBtn">退出登录</button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'setting'
}
</script>

<style>
  
</style>

