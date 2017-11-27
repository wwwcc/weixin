<template>
 <!-- 进入对话框里的页面 -->
    <div class="dialogue">
        <!-- 头部 -->
        <header class="WxHeader">
            <!-- 进入对话框将右上角的图标显示 -->
            <div class="other">
                <!-- 进入群对话框的页面，即右上角的群图标 -->
                <router-link :to="{path:'/wechat/dialogue/dialogue-info',query: { msgInfo: msgInfo}}" tag="span" class="iconfont icon-chat-group" v-show="$route.query.group_num&&$route.query.group_num!=1"></router-link>
                <!-- 进入个人对话框的页面路径，即右上角的单人图标 -->
                <router-link :to="{path:'/wechat/dialogue/dialogue-detail',query: { msgInfo: msgInfo}}" tag="span" class="iconfont icon-chat-friends" v-show="$route.query.group_num==1"></router-link>
            </div>
            <div class="center">
                <router-link to="/" tag="div" class="iconfont icon-return-arrow">
                    <span>微信</span>
                </router-link>
                <span>{{pageName}}</span>
                <!-- 显示群里的人数 -->
                <span class="parentheses" v-show='$route.query.group_num&&$route.query.group_num!=1'>{{$route.query.group_num}}</span>
            </div>
        </header>
        <!-- section显示的是进入对话页面的中间部分，即把对话内容显示出来 -->
        <section class="dialogue-section clearfix" v-on:click="MenuOutsideClick">
            <div class="row clearfix" v-for="item in msgInfo.msg" :key="item.name">
                <!-- 对话的人头像 -->
                <img :src="item.headerUrl" class="header">
                <!-- 对话人的内容 -->
                <p class="text" v-more>{{item.text}}</p>
            </div>
            <!-- 手机端长按出现的功能 -->
            <span class="msg-more" id="msg-more">
                <ul>
                    <li>复制</li>
                    <li>转发</li>
                    <li>收藏</li>
                    <li>删除</li>
                </ul>
            </span>
        </section>
        
        <footer class="dialogue-footer">
            <div class="component-dialogue-bar-person">
                <!-- 键盘打字的功能 -->
                <span class="iconfont icon-dialogue-jianpan" v-show="!currentChatWay" v-on:click="currentChatWay=true"></span>
                <!-- 控制低端显示点击会转换成按住说话的那个图标 -->
                <span class="iconfont icon-dialogue-voice" v-show="currentChatWay" v-on:click="currentChatWay=false"></span>
                <div class="chat-way" v-show="!currentChatWay">
                    <div class="chat-say" v-press>
                        <span class="one">按住 说话</span>
                        <span class="two">松开 结束</span>
                    </div>
                </div>
                <div class="chat-way" v-show="currentChatWay">
                    <!-- 中间的像input框的那个输入框 -->
                    <input class="chat-txt" type="text" v-on:focus="focusIpt" v-on:blur="blurIpt"/>
                </div>
                <!-- 右边的笑脸，表情 -->
                <span class="expression iconfont icon-dialogue-smile"></span>
                <!-- 最右边的加号，（即点击加号出现相册，拍摄，视频聊天等功能的操作页面 ）-->
                <span class="more iconfont icon-dialogue-jia"></span>
                <!-- 控制手机端的消息记录 -->
                <div class="recording" style="display: none;" id="recording">
                    <div class="recording-voice" style="display: none;" id="recording-voice">
                        <div class="voice-inner">
                            <div class="voice-icon"></div>
                            <div class="voice-volume">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <!-- 将输入框切换到按住说话时弹出的框 -->
                        <p>手指上划,取消发送</p>
                    </div>
                    <!-- 弹出上面的框之后，手指上划会出现下面这个弹出框 -->
                    <div class="recording-cancel" style="display: none;">
                        <div class="cancel-inner"></div>
                        <p>松开手指,取消发送</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
 <script>
    export default {
            name:'dialogue',
            data() {
                return {
                pageName: this.$route.query.name,
                currentChatWay: true, //ture为键盘打字 false为语音输入
                timer: null
                // sayActive: false // false 键盘打字 true 语音输入
                };
            },
            beforeRouteEnter(to, from, next) {
                next(vm => {
                vm.$store.commit("setPageName", vm.$route.query.name);
                });
            },
        computed: {
            msgInfo() {
            for (var i in this.$store.state.msgList.baseMsg) {
                if (this.$store.state.msgList.baseMsg[i].mid == this.$route.query.mid) {
                return this.$store.state.msgList.baseMsg[i];
                }
            }
            }
        },
        //   注册局部指令
        directives: {
            //   按压下“按住说话这个框”话语时绑定的事件
            press: {
            inserted(element, binding) {
                var recording = document.querySelector(".recording"),
                recordingVoice = document.querySelector(".recording-voice"),
                recordingCancel = document.querySelector(".recording-cancel"),
                startTx,
                startTy;

                element.addEventListener(
                "touchstart",
                function(e) {
                    // 用bind时，vue还没插入到dom,故dom获取为 undefine，用 inserted 代替 bind,也可以开个0秒的定时器
                    element.className = "chat-say say-active";
                    recording.style.display = recordingVoice.style.display = "block";
                    // console.log('start')
                    var touches = e.touches[0];
                    startTx = touches.clientX;
                    startTy = touches.clientY;
                    e.preventDefault();
                },
                false
                );
                element.addEventListener(
                "touchend",
                function(e) {
                    /*var touches = e.changedTouches[0];
                                var distanceY = startTy - touches.clientY;
                                if (distanceY > 50) {
                                    console.log("取消发送信息");
                                }else{
                                    console.log("发送信息");
                                }*/

                    element.className = "chat-say";
                    recordingCancel.style.display = recording.style.display = recordingVoice.style.display =
                    "none";
                    // console.log('end')
                    e.preventDefault();
                },
                false
                );
                element.addEventListener(
                "touchmove",
                function(e) {
                    var touches = e.changedTouches[0],
                    endTx = touches.clientX,
                    endTy = touches.clientY,
                    distanceX = startTx - endTx,
                    distanceY = startTy - endTy;

                    if (distanceY > 50) {
                    element.className = "chat-say";
                    recordingVoice.style.display = "none";
                    recordingCancel.style.display = "block";
                    } else {
                    element.className = "chat-say say-active";
                    recordingVoice.style.display = "block";
                    recordingCancel.style.display = "none";
                    }
                    // 阻断事件冒泡 防止页面被一同向上滑动
                    e.preventDefault();
                },
                false
                );
            }
            },
            more: {
            bind(element, binding) {
                var startTx, startTy;
                element.addEventListener(
                "touchstart",
                function(e) {
                    var msgMore = document.getElementById("msg-more"),
                    touches = e.touches[0];
                    startTx = touches.clientX;
                    startTy = touches.clientY;

                    clearTimeout(this.timer);
                    this.timer = setTimeout(() => {
                    // 控制菜单的位置
                    msgMore.style.left =
                        (startTx - 18 > 180 ? 180 : startTx - 18) + "px";
                    msgMore.style.top = element.offsetTop - 33 + "px";
                    msgMore.style.display = "block";
                    element.style.backgroundColor = "#e5e5e5";
                    }, 500);
                },
                false
                );
                element.addEventListener(
                "touchmove",
                function(e) {
                    var touches = e.changedTouches[0],
                    disY = touches.clientY;
                    if (Math.abs(disY - startTy) > 10) {
                    clearTimeout(this.timer);
                    }
                },
                false
                );
                element.addEventListener(
                "touchend",
                function(e) {
                    clearTimeout(this.timer);
                },
                false
                );
            }
            }
        },
        methods: {
            // 解决输入法被激活时 底部输入框被遮住问题
            focusIpt() {
            this.timer = setInterval(function() {
                document.body.scrollTop = document.body.scrollHeight;
            }, 100);
            },
            blurIpt() {
            clearInterval(this.timer);
            },
            // 点击空白区域，菜单被隐藏
            MenuOutsideClick(e) {
            var container = document.querySelectorAll(".text"),
                msgMore = document.getElementById("msg-more");
            if (e.target.className === "text") {
            } else {
                msgMore.style.display = "none";
                container.forEach(item => (item.style.backgroundColor = "#fff"));
            }
            }
        }
    };
</script>
<style>
    .dialogue-section {
            height: 100%;
            background: url("https://sinacloud.net/vue-wechat/images/bg/alarm.jpg") center center;
            padding: 2%
    }
    .dialogue-section .row {
        width: 80%;
        margin-top: 30px;
        margin-bottom: -10px
    }
    .dialogue-section .row .header {
        width: 35px;
        float: left;
        display: block
    }
    .dialogue-section .row .text {
        float: left;
        background: #fff;
        padding: 8px;
        box-sizing: border-box;
        margin-left: 10px;
        position: relative;
        border-radius: 4px;
        max-width: 80%;
        font-size: 14px
    }
    .dialogue-section .msg-more{
        /* border: 5px solid red; */
        position: absolute;
        display: none;
        width:190px;
        padding: 2px;
        left:20px;
        top: 35px;
        background: #000;
        color: white;
        border-radius: 4px;

    }
    .dialogue-section .msg-more:after {
        width: 0;
        height: 0;
        position: absolute;
        left: 18px;
        top: 25px;
        content: "";
        border: 6px solid transparent;
        border-top-color: #000
    }
    .dialogue-section .msg-more ul li{
        float: left;
        border-right: 1px solid white;
         width: 43px;
         text-align: center;
    }
    .dialogue-section .msg-more ul li:last-child{
        border-right-width: 0;
    }
    .dialogue-section-inner {
        width: 100%;
        height: 100%;
        padding: 0 10px;
        overflow: auto
    }
    .dialogue-footer {
        /* border: 10px solid red; */
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        height: 50px
    } 

    .component-dialogue-bar {
        /* border: 10px solid white; */
        position: relative;
        height: 100%;
        padding-left: 50px
    }

    .component-dialogue-bar .dialogue-item {
        /* border: 10px solid black;  */
        position: absolute;
        height: 50px;
        bottom: 0;
        left: 0;
        width: 100%;
        -webkit-transition: .25s all ease;
        transition: .25s all ease;
        background-color: #fdfdfd
    }
    .component-dialogue-bar .dialogue-item::before {
        content: "";
        position: absolute;
        width: 200%;
        left: 0;
        top: 0;
        -webkit-transform: scale(0.5);
        -ms-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scale(0.5);
        -webkit-transform-origin: 0 0;
        background-color: #b7b7b7;
        height: 1px;
        z-index: 2
    }

    .component-dialogue-bar .dialogue-item::after {
        content: "";
        position: absolute;
        left: 50px;
        top: 0px;
        border-right: 1px solid #b7b7b7;
        height: 200%;
        -webkit-transform: scale(0.5);
        -ms-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        z-index: 2
    }

    .component-dialogue-bar .dialogue-item.transition-dialogue-down {
        bottom: -50px
    }

    .left-slide-type {
        float: left;
        width: 50px;
        height: 100%;
        padding: 5px 0;
        text-align: center;
        font-size: 30px;
        line-height: 40px;
        color: #7d7e83;
        position: relative
    }

    .component-dialogue-bar-person {
        /* border: 1px solid red; */
        overflow: hidden;
        padding: 5px 0;
        height: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -webkit-flex-basis: 200px;
        -ms-flex-preferred-size: 200px;
        flex-basis: 200px;       
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start;
        position: relative;
        background-color: #ffffff
    }

    .component-dialogue-bar-person::before {
        content: "";
        position: absolute;
        width: 200%;
        left: 0;
        top: 0;
        -webkit-transform: scale(0.5);
        -ms-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scale(0.5);
        -webkit-transform-origin: 0 0;
        background-color: #b7b7b7;
        height: 1px;
        z-index: 2
    }

    .component-dialogue-bar .component-dialogue-bar-person::before {
        display: none
    }  
    .component-dialogue-bar-person .iconfont {
        color: #7d7e83;
        -webkit-flex-basis: 40px;
        -ms-flex-preferred-size: 40px;
        flex-basis: 40px;
        width: 40px;
        padding: 0 3px;
        font-size: 30px;
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        vertical-align: middle;
        line-height: 40px;
        padding: 0 4px
    }

    .chat-way {
        vertical-align: middle;
        padding: 4px 0px;
        height: 100%;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -webkit-flex-basis: 200px;
        -ms-flex-preferred-size: 200px;
        flex-basis: 200px
    }

    .chat-way .chat-say {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 6px;
        overflow: hidden;
        padding: 0 10px;
        width: 200%;
        height: 200%;
        color: #565656;
        border: 1px solid #7d7e83;
        -webkit-transform: scale(0.5);
        -ms-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        font-size: 30px
    }

    .chat-way .chat-say_touched {
        background-color: #c6c7ca
    }

    .chat-way .two {
        display: none
    }

    .chat-way .chat-say_touched .two {
        display: block
    }

    .chat-way .chat-say_touched .one {
        display: none
    }

    .chat-way .chat-txt {
        border-radius: 6px;
        overflow: hidden;
        padding: 0 10px;
        width: 200%;
        height: 200%;
        border: 1px solid #7d7e83;
        -webkit-transform: scale(0.5);
        -ms-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        font-size: 30px
    }

    .component-dialogue-bar-public {
        height: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        position: relative;
        overflow: hidden
    }

    .component-dialogue-bar-public li {
        padding: 0 2px;
        overflow: hidden;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        line-height: 50px;
        -webkit-flex-basis: 0;
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative
    }

    .component-dialogue-bar-public li .iconfont {
        font-size: 12px
    }

    .component-dialogue-bar-public li:not(:last-child)::before {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scale(0.5);
        -ms-transform: scale(0.5);
        transform: scale(0.5);
        height: 200%;
        border-right: 1px solid #b7b7b7
    }

    .recording {
        position: fixed;
        left: 50%;
        top: 45%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 140px;
        height: 140px;
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.5);
        color: #ffffff;
        border-radius: 5px;
        font-size: 14px;
        text-align: center
    }

    .recording-voice .voice-inner {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        height: 110px
    }

    .voice-inner .voice-icon {
        width: 55px;
        height: 90px;
        /* background: url(../images/recording-bkg.png) no-repeat center center; */
        background-size: contain
    }

    .voice-inner .voice-volume {
        width: 30px;
        height: 55px
    }

    .voice-inner .voice-volume span {
        display: block;
        height: 2px;
        margin-top: 4px;
        min-width: 8px;
        float: left;
        clear: both;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-duration: 2000ms;
        animation-duration: 2000ms;
        background-color: #e4e4e5
    }

    .voice-inner .voice-volume span:nth-child(1) {
        width: 24px;
        visibility: hidden
    }

    .voice-inner .voice-volume span:nth-child(2) {
        width: 22px
    }

    .voice-inner .voice-volume span:nth-child(3) {
        width: 20px
    }

    .voice-inner .voice-volume span:nth-child(4) {
        width: 18px
    }

    .voice-inner .voice-volume span:nth-child(5) {
        width: 16px
    }

    .voice-inner .voice-volume span:nth-child(6) {
        width: 14px
    }

    .voice-inner .voice-volume span:nth-child(7) {
        width: 12px
    }

    .voice-inner .voice-volume span:nth-child(8) {
        width: 10px
    }

    .voice-inner .voice-volume span:nth-child(9) {
        width: 8px
    }

    .recording-cancel p {
        border-radius: 3px;
        background-color: #9d383e
    }

    .cancel-inner {
        width: 110px;
        height: 110px;
        margin: 0 auto;
        /* background-image: url(../images/record-cancel.png); */
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain
    }
</style>