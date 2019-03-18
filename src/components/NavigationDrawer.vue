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
        }
    }
</script>