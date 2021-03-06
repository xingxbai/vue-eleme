// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios/config'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './common/styles/index.styl'
import './common/font/iconfont.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ElementUI,
  components: { App },
  template: '<App/>'
})
