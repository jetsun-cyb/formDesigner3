import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入 main 组件
import App from './App.vue'
// router
import router from './router'
// 导入必须得CSS和图标
import '@/assets/style/designer.css';
import '@/assets/iconfont/iconfont.js';
import 'element-plus/dist/index.css';
// 导入element-plus
import ElementPlus from 'element-plus';
import ZH_CN from 'element-plus/dist/locale/zh-cn.mjs';
//挂载相关的插件
import plugins from '@/components/formDesigner.vue';
import { GlobalCmComponent } from "codemirror-editor-vue3";
// 请求类
import Axios from 'axios';
// 创建app
const app = createApp(App)
// 挂载 createPinia
app.use(createPinia())
// 挂载 router
app.use(router)
//挂载相关的插件
app.use(plugins);
// 挂载富文本编辑器
app.use(GlobalCmComponent);
// 挂载饿了么plus
app.use(ElementPlus, {
    locale: ZH_CN
})
// 创建全局请求类
app.config.globalProperties.$axios = Axios;
// 创建vue app
app.mount('#app')
