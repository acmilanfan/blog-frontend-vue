import Vue from 'vue'
import Vuetify from 'vuetify'
import router from "./router";
import App from './App.vue';
import Main from "./layouts/Main.vue";
import Post from "./layouts/Post.vue";

Vue.config.productionTip = false;
Vue.use(Vuetify);

Vue.component("default-layout", Main);
Vue.component("post-layout", Post);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
