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
            <v-container fluid v-for="post in posts" :key="post.id">
                <v-layout align-center justify-center>
                    <v-flex xs10>
                        <v-card>
                            <v-card-title>{{ post.title }}</v-card-title>
                            <v-card-text>
                                {{ post.preview }}
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn flat color="primary">Read more</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <v-footer app>
            <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
            <v-switch v-model="dark" primary label="Dark"></v-switch>
        </v-footer>
    </v-app>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                posts: [
                    {
                        id: 123,
                        title: 'Loading...',
                        author: 'Loading...',
                        rating: 123,
                        preview: 'Loading...',
                        tags: 'Loading...',
                        creationDate: new Date()
                    }
                ],
                dark: true,
                primaryDrawer: {
                    model: false
                }
            }
        },
        mounted() {
            axios.get('http://localhost:8080/post')
                .then(response => {
                    this.posts = response.data
                })
        }
    }
</script>