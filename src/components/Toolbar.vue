<template>
    <div>
        <v-toolbar clipped-left app absolute>
            <v-toolbar-side-icon
                    @click.stop="switch_model"
            ></v-toolbar-side-icon>
            <v-toolbar-title>Vuetify</v-toolbar-title>
            <v-spacer/>
            <v-text-field
                    flat
                    hide-details
                    solo-inverted
                    style="max-width: 300px;"
            ></v-text-field>
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