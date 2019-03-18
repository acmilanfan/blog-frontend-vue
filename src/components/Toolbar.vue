<template>
    <div>
        <v-navigation-drawer
                v-model="drawer"
                floating
                clipped
                absolute
                overflow
                app
        ></v-navigation-drawer>
        <v-toolbar clipped-left app absolute>
            <v-toolbar-side-icon
                    @click.stop="switch_model"
            ></v-toolbar-side-icon>
            <v-toolbar-title>Vuetify</v-toolbar-title>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        computed: {
            drawer: {
                get() {
                    return this.$store.state.drawer.model;
                },
                set(drawer) {
                    this.$store.commit('set_drawer', drawer);
                }
            }
        },
        methods: {
            switch_model() {
                this.$store.commit('drawer_model');
            }
        }
    }
</script>