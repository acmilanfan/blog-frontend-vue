<template>
    <v-app id="app" :dark="dark">
        <component :is="layout">
            <router-view/>
        </component>
    </v-app>
</template>

<script>
    const default_layout = "default";

    export default {
        computed: {
            layout() {
                return (this.$route.meta.layout || default_layout) + "-layout";
            }
        },
        data() {
            return {
                dark: true
            }
        }
    }
</script>