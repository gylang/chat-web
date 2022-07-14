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
import {Listener, SocketClient} from "~/socket/socket";
import {JsonTranslator} from "~/socket/translator";

for (const key in filter) {
    Vue.filter(key, filter[key]);
}

// 声明全局的socket对象
const socketClient = new SocketClient();
socketClient.setAddress("ws://127.0.0.1:9721")
socketClient.setTranslator(new JsonTranslator())
socketClient.bindOpenListener( function (message) {
     socketClient.send({
        cmd: 1,
        payload: '用户' + new Date().getTime()
    })
})
socketClient.connect()
Vue.prototype.socketClient = socketClient
Vue.use(ElementUI)
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
