// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import echarts from 'echarts'
import { Base64 } from 'js-base64'
import { Tab, Tabs } from 'vant'

import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
  threshold: 30 //手指左右滑动距离
}



Vue.prototype.$echarts = echarts

Vue.use(Base64)
Vue.use(Tab).use(Tabs)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
