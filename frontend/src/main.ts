import './assets/main.css'
import 'ant-design-vue/dist/reset.css';

import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import { key, store } from './store'


createApp(App).use(Antd).use(store, key).mount('#app')
