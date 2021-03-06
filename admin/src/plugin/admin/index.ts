import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import pluginOpen from '../open'
import VueParticles from 'vue-particles'
export default {
    async install(Vue:any,options:Object){
        // 设置为 false 以阻止 vue 在启动时生成生产提示。https://cn.vuejs.org/v2/api/#productionTip
        Vue.config.productionTip = false;
        // 当前环境
        Vue.prototype.$env = process.env.NODE_ENV;
        // 当前的 baseUrl
        Vue.prototype.$baseUrl = process.env.BASE_URL;
        // Element
        Vue.use(ElementUI)
        // 引入插件
        Vue.use(pluginOpen)
        // 粒子特效
        Vue.use(VueParticles)
    }
}