import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['../components/page/HelloWorld.vue'], resolve)
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: resolve => require(['../components/page/HelloWorld.vue'], resolve)
    },
    {
      path: '/table',
      name: 'Table',
      component: resolve => require(['../components/page/Table.vue'], resolve)
    },
    {
      path: '/customizetable',
      name: 'CustomizeTable',
      component: resolve => require(['../components/page/CustomizeTable.vue'], resolve)
    },
    {
      path: '/form',
      name: 'Form',
      component: resolve => require(['../components/page/Form.vue'], resolve)
    },
    {
      path: '/progress',
      name: 'Progress',
      component: resolve => require(['../components/page/Progress.vue'], resolve)
    },
    {
      path: '/upload',
      name: 'Upload',
      component: resolve => require(['../components/page/Upload.vue'], resolve)
    },
    {
      path: '/alert',
      name: 'Alert',
      component: resolve => require(['../components/page/Alert.vue'], resolve)
    },
    {
      path: '/loading',
      name: 'Loading',
      component: resolve => require(['../components/page/Loading.vue'], resolve)
    },
    {
      path: '/notice',
      name: 'Notice',
      component: resolve => require(['../components/page/Notice.vue'], resolve)
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: resolve => require(['../components/page/Dialog.vue'], resolve)
    },

    {
      path: '/line',
      name: 'Line',
      component: resolve => require(['../components/echarts/Line.vue'], resolve)
    },
    {
      path: '/bar',
      name: 'Bar',
      component: resolve => require(['../components/echarts/Bar.vue'], resolve)
    }
  ]
})













