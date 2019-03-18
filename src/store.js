import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        dark: true,
        drawer: {
            model: false
        }
    },
    mutations: {
        switch_dark(state) {
            state.dark = !state.dark;
        },
        set_dark(state, dark) {
            state.dark = dark;
        },
        drawer_model(state) {
            state.drawer.model = !state.drawer.model;
        },
        set_drawer(state, model) {
            state.drawer.model = model;
        }
    }
});