// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'querystring'

Vue.use(axios);

axios.defaults.timeout=1000;
axios.defaults.headers.get['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8';

//pos传参序列化（添加请求拦截器）
axios.interceptors.request.use((config)=>{
    if(config.method==='post'){
        config.data=qs.stringify(config.data);
    }
    return config;
},(err)=>{
    return Promise.reject(err);
});

//返回状态判断（添加响应拦截器）
axios.interceptors.response.use((res)=>{
    return res;
},(err)=>{
    return Promise.reject(err);
});

Vue.prototype.$http=axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
