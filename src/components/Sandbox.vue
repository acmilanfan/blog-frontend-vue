<template>
    <v-app id="sandbox" :dark="dark">
        <v-navigation-drawer
                v-model="primaryDrawer.model"
                floating
                clipped
                absolute
                overflow
                app
        ></v-navigation-drawer>
        <v-toolbar clipped-left app absolute>
            <v-toolbar-side-icon
                    @click.stop="primaryDrawer.model = !primaryDrawer.model"
            ></v-toolbar-side-icon>
            <v-toolbar-title>Vuetify</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <v-layout align-center justify-center>
                    <v-flex xs10>
                        <v-card>
                            <v-card-text>
                                <v-layout row wrap>
                                    <v-flex xs12 md6>
                                        <span>Scheme</span>
                                        <v-switch v-model="dark" primary label="Dark"></v-switch>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn flat>Cancel</v-btn>
                                <v-btn flat color="primary">Submit</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <v-footer app>
            <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            dark: true,
            drawers: ['Default (no property)', 'Permanent', 'Temporary'],
            primaryDrawer: {
                model: null,
                type: 'default (no property)',
                clipped: false,
                floating: false,
                mini: false
            },
            footer: {
                inset: false
            }
        })
    }
</script>