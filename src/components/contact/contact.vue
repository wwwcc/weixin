<template>
    <div id="contact">
        <section>
            <div class="weui-cells_contact-head weui-cells weui-cells_access" style="margin-top:-1px">
                <!-- 新的朋友组件未做 -->
                <router-link to="/contact/new-friends" class="weui-cell">
                    <div class="weui-cell_hd"> <img class="img-obj-cover" src="../../assets/images/contact_top-friend-notify.png"> </div>
                    <div class="weui-cell_bd weui-cell_primary">
                        <p>新的朋友</p>
                    </div>
                </router-link>
                <!-- 群聊组件未做 -->
                <router-link to="/contact/group-list" class="weui-cell">
                    <div class="weui-cell_hd"> <img class="img-obj-cover" src="../../assets/images/contact_top-addgroup.png"> </div>
                    <div class="weui-cell_bd weui-cell_primary">
                        <p>群聊</p>
                    </div>
                </router-link>
                <!-- 标签组件未做 -->
                <router-link to="/contact/tags" class="weui-cell">
                    <div class="weui-cell_hd"> <img class="img-obj-cover" src="../../assets/images/contact_top-tag.png"> </div>
                    <div class="weui-cell_bd weui-cell_primary">
                        <p>标签</p>
                    </div>
                </router-link>
                <!-- 公众号组件未做 -->
                <router-link to="/contact/official-accounts" class="weui-cell">
                    <div class="weui-cell_hd"><img class="img-obj-cover" src="../../assets/images/contact_top-offical.png"></div>
                    <div class="weui-cell_bd weui-cell_primary">
                        <p>公众号</p>
                    </div>
                </router-link>
            </div>
            <!--联系人集合-->
            <template v-for="(value,key) in contactsList">
                <!--首字母-->
                <div :ref="`key_${key}`" class="weui-cells__title" :key="key">{{key}}</div>
                <div class="weui-cells">
                    <router-link :key="item.wxid" :to="{path:'/contact/details',query:{wxid:item.wxid}}" class="weui-cell weui-cell_access" v-for="item in value" tag="div">
                        <div class="weui-cell__hd">
                            <!-- 通讯录人头像 -->
                            <img :src="item.headerUrl" class="home__mini-avatar___1nSrW">
                        </div>
                        <div class="weui-cell__bd">
                            <!-- 通讯录人名 -->
                            {{item.remark?item.remark:item.nickname}}
                        </div>
                    </router-link>
                </div>
            </template>
        </section>
        <!--检索-->
       <div class="initial-bar"><span @click="toPs(i)" v-for="i in contactsInitialList" :key="i">{{i}}</span></div>
    </div>
</template>
<script>
    export default {
        mixins: [window.mixin],
        data() {
            return {
                "pageName": "通讯录"
            }
        },
        mounted() {
            // mutations.js中有介绍
            this.$store.commit("toggleTipsStatus", -1)
        },
        activated() {
            this.$store.commit("toggleTipsStatus", -1)
        },
        computed: {
            contactsInitialList() {
                return this.$store.getters.contactsInitialList
            },
            contactsList() {
                return this.$store.getters.contactsList
            }
        },
        mounted() {

        },
        methods: {
            toPs(i){
                window.scrollTo(0,this.$refs['key_'+i][0].offsetTop)
            }
        }
    }
</script>
<style>
    #contact img {
            width: 32px;
            height: 32px;
            display: block;
            margin-right: 10px
    }

    #contact .initial-bar {
        position: fixed;
        top: 50%;
        font-size: 11px;
        line-height: 1.2;
        right: 2px;
        width: 10px;
        -webkit-transform: translate3d(0, -50%, 0);
        transform: translate3d(0, -50%, 0)
    }

    #contact .initial-bar span {
        display: block;
        text-align: left
    }
</style>