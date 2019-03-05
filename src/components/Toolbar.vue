<template>
    <div>
        <v-navigation-drawer
                v-model="drawer.model"
                floating
                clipped
                absolute
                overflow
                app
        ></v-navigation-drawer>
        <v-toolbar clipped-left app absolute>
            <v-toolbar-side-icon
                    @click.stop="drawer.model = !drawer.model"
            ></v-toolbar-side-icon>
            <v-toolbar-title>Vuetify</v-toolbar-title>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                drawer: {
                    model: false
                }
            }
        }
    }
</script>