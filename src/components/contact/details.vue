<template>
    <div class="profile">
        <header class="WxHeader">
            <div class="center">
                <router-link to="/contact" tag="div" class="iconfont icon-return-arrow">
                    <span>通讯录</span>
                </router-link>
                <span>详细资料</span>
            </div>
        </header>
        <!-- 头像和微信号，昵称的地方 -->
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd"><img :src="userInfo.headerUrl" alt="" class="self-header" style="width:60px"></div>
                <div class="weui-cell__bd">
                    <h4 class="self-nickname">{{userInfo.nickname}}<span class="gender" :class="[userInfo.sex===1?'gender-male':'gender-female']"></span></h4>
                    <p class="self-wxid" style="font-size: 13px;color: #999;">微信号: {{userInfo.wxid}}</p>
                    <p class="nickname" style="font-size: 13px;color: #999;">昵称:{{userInfo.nickname||'无'}}</p>
                </div>
            </div>
        </div>
        <!-- 设置备注和标签 -->
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>设置备注和标签</p>
                </div>
            </div>
        </div>
        <!-- 地区 -->
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>地区</p>
                </div>
                <div class="weui-cell__ft" style="-webkit-flex: 4;text-align: left;">
                    <span v-for="item in userInfo.area" :key="item.wxid">{{item}}&nbsp;&nbsp;&nbsp;</span>
                </div>
            </div>
            <!-- 个人相册 -->
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>个人相册</p>
                </div>
                <div class="weui-cell__ft" style="-webkit-flex: 4;text-align: left;">
                    <div class="album-list">
                        <img :src="item.imgSrc" style="width:50px;margin:0 5px" v-for="item in userInfo.album" :key="item.wxid">
                    </div>
                </div>
            </div>
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>更多</p>
                </div>
                <div class="weui-cell__ft">

                </div>
            </div>
        </div>

        <a href="javascript:;" class="weui-btn weui-btn_primary" style="width:90%;margin-top:20px;">发消息</a>
        <a href="javascript:;" class="weui-btn weui-btn_default" style="width:90%">视频</a>

    </div>
</template>
<script>
    import contact from "../../vuex/contacts"
    export default {
        data() {
            return {
                pageName: ""
            }
        },
        computed: {
            userInfo() {
                return contact.getUserInfo(this.$route.query.wxid)
            }
        }
    }
</script>
<style>

</style>