import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import ElementUI from 'element-ui'
import './assets/css/tongyong.css'
import { Button, Col, Row, Skeleton, Image as VanImage, Field } from 'vant';

Vue.use(Button).use(Col).use(Skeleton).use(VanImage).use(Field).use(Row)

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')