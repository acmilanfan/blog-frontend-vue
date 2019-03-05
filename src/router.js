import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: "/",

    routes: [
        {
            path: "/",
            name: "home",
            component: require("@/pages/Home.vue").default
        },
        {
            path: "/post",
            name: "post",
            meta: {layout: "post"},
            component: () => import("@/pages/Post.vue")
        },
        {
            path: "*",
            name: "NotFound",
            component: require("@/pages/NotFound.vue").default
        }
    ]
});