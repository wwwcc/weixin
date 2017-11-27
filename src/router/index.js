import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '微信',
      component: resolve => require(['../components/wechat/Home.vue'], resolve),
    },
    {
      path: '/wechat/dialogue',
      name: 'dialogue',
      components: {
        "default": resolve => require(["../components/wechat/Home.vue"], resolve),
        "subPage": resolve => require(["../components/wechat/dialogue.vue"], resolve)
      }
    },
    {
      path: '/contact',
      name: '通讯录',
      component: resolve => require(["../components/contact/contact.vue"], resolve)
    },
    {
      path: '/contact/details',
      name: '',
      components: {
        "default": resolve => require(["../components/contact/contact.vue"], resolve),
        "subPage": resolve => require(["../components/contact/details.vue"], resolve)
      }
    },
    {
      path: '/find',
      name: '发现',
      component: resolve => require(["../components/find/find.vue"], resolve)
    },
    {
      path: '/find/coments',
      name: "朋友圈",
      components: {
        "default": resolve => require(["../components/find/find.vue"], resolve),
        "subPage": resolve => require(["../components/find/coments.vue"], resolve)
      }
    },
    {
      path: '/self',
      name: '我',
      component: resolve => require(["../components/self/self.vue"], resolve)
    },
    {
      path: '/self/setting',
      name: '设置',
      components: {
        "default": resolve => require(["../components/self/self.vue"], resolve),
        "subPage": resolve => require(["../components/self/setting.vue"], resolve)
      }
    },
    {
      path: '/self/personal',
      name: '个人详情',
      components: {
        "default": resolve => require(["../components/self/self.vue"], resolve),
        "subPage": resolve => require(["../components/self/personal.vue"], resolve)
      }
    },
    {
      path: '/self/album',
      name: '个人详情',
      components: {
        "default": resolve => require(["../components/self/self.vue"], resolve),
        "subPage": resolve => require(["../components/self/album.vue"], resolve)
      }
    },
  ]
})
export default router