// import Vue from 'vue'
import Vue from 'vue/dist/vue.js';
import App from './App.vue';

Vue.config.productionTip = false;

// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function(el) {
    // 聚焦元素
    el.focus();
  }
});

new Vue({
  render: h => h(App)
}).$mount('#app');
