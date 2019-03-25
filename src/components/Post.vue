<template>
    <v-content>
        <v-container fluid>
            <v-layout align-center justify-center>
                <v-flex xs10>
                    <v-card>
                        <v-card-title>{{ post.title }}</v-card-title>
                        <v-card-text>
                            {{ post.content }}
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import axios from 'axios'

    export default {
        props: ['id'],
        data() {
            return {
                post: {
                    id: this.id,
                    title: 'Loading...',
                    author: 'Loading...',
                    rating: 123,
                    preview: 'Loading...',
                    tags: 'Loading...',
                    creationDate: new Date(),
                    content: 'Loading content...',
                }
            }
        },
        mounted() {
            axios.get('http://localhost:8080/post/' + this.id + "/info")
                .then(response => {
                    this.post = response.data;
                });
        }
    }
</script>