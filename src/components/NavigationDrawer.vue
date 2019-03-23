<template>
    <div>
        <v-navigation-drawer
                v-model="drawer"
                floating
                clipped
                absolute
                overflow
                app
        >
            <Menu/>
        </v-navigation-drawer>
    </div>
</template>

<script>
    import Menu from '@/components/Menu';

    export default {
        components: {
            Menu
        },
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