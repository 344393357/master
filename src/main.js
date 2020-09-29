// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElRow from '@/components/row/src/row.js'
Vue.component(ElRow.name, ElRow)
import ElCol from '@/components/col/src/col.js'
Vue.component(ElCol.name, ElCol)
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/assets/index.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  template: '<App/>'
})
