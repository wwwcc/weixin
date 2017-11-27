<template>
  <div class="coments">
    <!-- 朋友圈页面的头部 -->
        <header class="WxHeader">
            <div class="center">
              <router-link to="/find" tag="div" class="iconfont icon-return-arrow">
                <span>发现</span>          
              </router-link>
                <span>朋友圈</span>
            </div>
        </header>
        <!-- 微信主人的头像及名字 -->
        <div class="home-pic">
            <div class="home-pic-base">
                <div class="top-pic">
                    <div class="top-pic-inner">
                        <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png">
                    </div>
                </div>
                <div class="top-name _ellipsis">阿荡</div>
            </div>
        </div>
        <!-- 微信朋友圈的发表内容 -->
        <!-- 第一条内容 -->
        <div class="weui-cell moments__post">
            <!-- 发朋友圈的人头像 -->
            <div class="weui-cell__hd">
              <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg">
            </div>

            <div class="weui-cell__bd">
              <!-- 发朋友圈的人名链接 -->
              <a  class="title">
                <span>夜华</span>
              </a>
              <!--发朋友圈的 post内容 -->
              <p id="paragraph" class="paragraph">点击下方图片预览，点击下方图片预览，点击下方图片预览</p>
            </div>
            <div class="thumbnails my-gallery">
              <!-- 图片1 -->
              <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
                  <a href="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" itemprop="contentUrl" data-size="400x400">
                      <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" itemprop="thumbnail" alt="Image description" />
                  </a>
                  <figcaption itemprop="caption description">Image 01</figcaption>
              </figure>

                <!-- 图片2 -->
              <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
                  <a href="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg" itemprop="contentUrl" data-size="400x400">
                      <img src="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg" itemprop="thumbnail" alt="Image description" />
                  </a>
                  <figcaption itemprop="caption description">Image 02</figcaption>
              </figure>
            </div>

            <div class="toolbar">
              <p class="timestamp">17小时前</p>
              <!-- 点击右边可以点赞等一些功能的图标 -->
              <div>
                  <div id="actionMenu" class="actionMenu slideIn">
                      <p class="actionBtn" id="btnLike"><i class="icon icon-96"></i></p>
                      <p class="actionBtn" id="btnComment"><i class="icon icon-3"></i></p>
                  </div>
              </div>
              <!-- 右边图标的设置 -->
              <span id="actionToggle" class="actionToggle">..</span>
              <span id="actionToggle" class="actionToggle">..</span>
            </div>
            <!-- 点赞人数及人名 -->
            <p class="liketext"><i class="icon icon-96"></i><span class="nickname">夜华</span>,<span class="nickname">孙尚香</span></p>
        </div>
        <!-- 第一条结束 -->

         <!-- 第二条 -->
        <!-- 微信朋友圈的发表内容 -->
        <!-- 第一条内容 -->
        <div class="weui-cell moments__post">
            <!-- 发朋友圈的人头像 -->
            <div class="weui-cell__hd">
              <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg">
            </div>

            <div class="weui-cell__bd">
              <!-- 发朋友圈的人名链接 -->
              <a  class="title">
                <span>夜华</span>
              </a>
              <!--发朋友圈的 post内容 -->
              <p id="paragraph" class="paragraph">这是我三生三世都在追求的人，乃至千生千世。她叫白浅</p>
            </div>
            <div class="thumbnails my-gallery">
              <!-- 图片1 -->
              <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
                  <a href="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" itemprop="contentUrl" data-size="400x400">
                      <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" itemprop="thumbnail" alt="Image description" />
                  </a>
                  <figcaption itemprop="caption description">Image 01</figcaption>
              </figure>

                <!-- 图片2 -->
              <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
                  <a href="https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg" itemprop="contentUrl" data-size="400x400">
                      <img src="https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg" itemprop="thumbnail" alt="Image description" />
                  </a>
                  <figcaption itemprop="caption description">Image 02</figcaption>
              </figure>
            </div>

            <div class="toolbar">
              <p class="timestamp">17小时前</p>
              <!-- 点击右边可以点赞等一些功能的图标 -->
              <div>
                  <div id="actionMenu" class="actionMenu slideIn">
                      <p class="actionBtn" id="btnLike"><i class="icon icon-96"></i></p>
                      <p class="actionBtn" id="btnComment"><i class="icon icon-3"></i></p>
                  </div>
              </div>
              <!-- 右边图标的设置 -->
              <span id="actionToggle" class="actionToggle">..</span>
              <span id="actionToggle" class="actionToggle">..</span>
            </div>
            <!-- 点赞人数及人名 -->
            <p class="liketext"><i class="icon icon-96"></i>
              <span class="nickname">夜华</span>,
              <span class="nickname">孙尚香</span>,
              <span class="nickname">甄姬</span>,
              <span class="nickname">浅浅</span>,
              <span class="nickname">青丘狐二哥</span>,
              <span class="nickname">皇祖父</span>,
              <span class="nickname">东华星君</span>,
            </p>
        </div>
  </div>
</template>

<script>
export default {
  name:'coments'
}
</script>


<style scoped>
    .coments{
      background:whitesmoke;
      /* border: 1px solid purple; */
    }
    .coments .home-pic{
      /* border: 1px solid red; */
      width: 100%;
      position: relative;
      height: 350px;
      margin-top: -30px;
      background: url("../../assets/images/header/header01.png");
      margin-bottom: 20px
    }
    .coments .home-pic-base{
      /* border: 1px solid peru; */
      position: absolute;
      left: 0;
      bottom: -22px;
      width: 100%;
      height: 70px;
      padding: 0 15px
    }
    .coments .home-pic-base .top-pic{
      /* border: 10px solid red; */
      width: 140px;
      height: 140px;
      transform: scale(0.5);
      -webkit-transform: scale(0.5);
      -ms-transform: scale(0.5);
      -webkit-transform-origin: 100% 0%;
      -ms-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
      background-color: #ffffff;
      border: 2px solid #cccccc; 
      float: right;
    }
    .coments .top-pic-inner img{
      width: 100%;
      padding: 1px 1px;
      overflow: hidden;
    }
    .coments .home-pic .top-name{
        /* border: 1px solid red; */
        position: absolute;
        color: white;
        font-size: 16px;
        right: 100px;
        top: 12px;
        overflow: hidden
    }
    .coments .drag-reflash {
        position: absolute;
        left: 20px;
        top: -40px;
        z-index: 2;
        width: 30px;
        height: 30px;
        background: url(../../assets/images/find-album-reflash-icon.png) no-repeat 0 0;
        background-size: contain
    }
    .coments .home-content {
      padding-top: 45px;
      min-height: 500px
    }
    .coments .moments__post {
      /* border: 1px solid red; */
      background: #fff;
      display: block;
      border-bottom: 1px solid #f2eeee
    }
    .coments .moments__post::before {
            content: none
    }
    .coments .moments__post .weui-cell__hd{
         /* border: 1px solid purple; */
         display: table-cell;
         vertical-align: top;
         min-width: 45px;
    }
    .coments .moments__post .weui-cell__hd img {
         width: 45px !important
    }
    .coments .moments__post .weui-cell__bd{
         /* border: 1px solid purple; */
         display: table-cell;
         padding-left: 10px;
         font-size: 15px;
    }
    .coments .moments__post .weui-cell__bd .title{
      font-size: 17px;
      color: #797fc9;
    }
    .coments .moments__post .weui-cell__bd .paragraphExtender {
            margin: 5px auto;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex
    }
    .coments .moments__post .thumbnails {
            /* border: 1px solid red; */
            width: 100%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            padding-left: 53px;
            
    }
    .coments  .moments__post .thumbnails .thumbnail {
      /* border:  1px solid blue; */
        width: 80px;
        height: 80px;
        margin: 3px;
        margin-left: 0px;
        background: #757575;
        overflow: hidden
    }
    .coments .moments__post .thumbnails .thumbnail img {
        width: 100%;
        height: 100%
    }
    .coments .moments__post .toolbar {
            /* border: 1px solid rebeccapurple; */
            position: relative;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center
    }
    .coments .moments__post .toolbar .timestamp {
            color: #757575;
            font-size: 13px;
            margin-left:53px;
    }
    .coments  .moments__post .actionMenu {
            position: absolute;
            height: 40px;
            background-color: #4e5156;
            border-radius: 5px;
            z-index: 5;
            top: -10px;
            right: 20px;
            display: none;
            -webkit-justify-content: space-around;
            -ms-flex-pack: distribute;
            justify-content: space-around;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center
    }
    .coments .moments__post .toolbar .actionToggle{
      /* border: 1px solid brown; */
      width: 17px;
      height: 15px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      background: #92abd4;
      margin-left: auto;
      border-radius: 1px;
      position: absolute;
      right: 5px;
      margin-bottom: -20px;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center
    }
    .coments .moments__post .liketext{
        /* border: 1px solid red; */
        margin-left: 54px;
        /* width: 50px; */
        background: #e2e1dc;
    }


   
</style>



