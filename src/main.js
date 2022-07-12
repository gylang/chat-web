import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'alice-poptip/src/poptip.css'
import App from './App.vue'
import {router} from './router'
import 'lib-flexible/flexible.js'
import './util/rem'
import './css/comm.css'

import filter from './util/datefilter'

for (const key in filter) {
    Vue.filter(key, filter[key]);
}

Vue.use(ElementUI)
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
