<template>
  <div class="album">
        <header class="WxHeader">
            <div class="center">
              <router-link to="/self" tag="div" class="iconfont icon-return-arrow">
                <span>我</span>          
              </router-link>
                <span>相册</span>
            </div>
        </header>
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
        <!-- 相册第一条 -->
        <section class="album-box clearfix">
            <div class="post-date">
                <b class="day">04</b>
                <b class="month">3月</b>
            </div>
            <div class="post-content">
                <div class="tumb-box">
                    <img src="../../assets/images/album/1.jpg" alt="444444">
                    <img src="../../assets/images/album/2.jpg" alt="">
                    <img src="../../assets/images/album/3.jpg" alt="">
                </div>
                <div class="thumb-desc">
                    或许，最美的事不是留住时光，而是留住记忆，如最初相识的感觉一样，哪怕一个不经意的笑容，便是我们最怀念的故事。但愿，时光，如初见。
                    <p class="number">共3张</p>
                </div>
            </div>
        </section>
        <!-- 相册第二条 -->
        <section class="album-box clearfix">
            <div class="post-date">
                <b class="day">02</b>
                <b class="month">2月</b>
            </div>
            <div class="post-content">
                <div class="tumb-box">
                    <img src="../../assets/images/album/3.jpg" alt="444444" class="picture">
                    <img src="../../assets/images/album/4.jpg" alt=""  class="picture">
                    
                </div>
                <div class="thumb-desc">
                    如果有一天， 让你心动的也感动不了你，让你愤怒的再也激怒不了你，你便知道这时光，这生活给了你什么，你为了成长，付出了什么。
                    <p class="number">共2张</p>
                </div>
            </div>
        </section>
         <!-- 相册第san条 -->
        <section class="album-box clearfix">
            <div class="post-date">
                <b class="day">25</b>
                <b class="month">1月</b>
            </div>
            <div class="post-content">
                <div class="tumb-box">
                    <img src="../../assets/images/album/5.jpg" alt="444444" class="picture"> 
                </div>
                <div class="thumb-desc">
                   很多我们以为一辈子都不会忘掉的事情，就在我们念念不忘的日子里，被我们遗忘了。
                    <p class="number">共1张</p>
                </div>
            </div>
        </section>
  </div>
</template>
<script>
export default {
  name:'album'
}
</script>

<style scoped>
    .album .home-pic{
        /* border: 1px solid red; */
        width: 100%;
        position: relative;
        height: 350px;
        margin-top: -30px;
        background: url("../../assets/images/header/header01.png");
        margin-bottom: 20px
    }
    .album .home-pic-base{
      /* border: 1px solid peru; */
      position: absolute;
      left: 0;
      bottom: -22px;
      width: 100%;
      height: 70px;
      padding: 0 15px
    }
    .album .home-pic-base .top-pic{
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
      float: right;
    }
    .album .top-pic-inner img{
      width: 100%;
      padding: 1px 1px;
      overflow: hidden;
    }
    .album .home-pic .top-name{
        /* border: 1px solid red; */
        position: absolute;
        color: white;
        font-size: 16px;
        right: 100px;
        top: 12px;
        overflow: hidden
    }
    .album .top-pic-inner img{width:100%}
    .album .drag-reflash{
        position:absolute;
        left:20px;
        top:-40px;
        z-index:2;
        width:30px;
        height:30px;
        background:url(../../assets/images/find-album-reflash-icon.png) no-repeat 0 0;
        background-size:contain
    }
    .album .home-content{padding-top:45px;min-height:500px;}
    .album .album-box{margin:15px;background: whitesmoke;}
    .album .album-box .post-date{float:left;width:20%}
    .album .album-box .post-date .day{font-size:24px;margin-right:-3px}
    .album .album-box .post-content{padding-top:10px;float:left;width:80%}
    .album .tumb-box{
        /* border: 1px solid purple; */
        width:90px;
        height:90px;
        float:left;
        display:-webkit-box;
        display:-webkit-flex;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-orient:horizontal;
        -webkit-box-direction:normal;
        -webkit-flex-direction:row;
        -ms-flex-direction:row;
        flex-direction:row;
        -webkit-flex-wrap:wrap;
        -ms-flex-wrap:wrap;
        flex-wrap:wrap;
        -webkit-box-align:start;
        -webkit-align-items:flex-start;
        -ms-flex-align:start;
        align-items:flex-start;
        width:20%
    }
    .album .tumb-box img{
        /* border: 1px solid red; */
        -webkit-box-flex:2;
        -webkit-flex-grow:2;
        -ms-flex-positive:2;
        flex-grow:2;
        width:40%;
        height: 40px;
    }
    .album .tumb-box .picture{
        /* border: 1px solid blue; */
        -webkit-box-flex:2;
        -webkit-flex-grow:2;
        -ms-flex-positive:2;
        flex-grow:2;
        width:50%;
        height: 90px;
    }
    .album .thumb-desc{float:left;width:80%;padding-left:10px}

</style>

  
 


