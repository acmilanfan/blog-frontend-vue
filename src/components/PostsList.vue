<template>
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
                ]
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