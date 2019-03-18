<template>
    <div>
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
        methods: {
            switch_model() {
                this.$store.commit('drawer_model');
            }
        }
    }
</script>