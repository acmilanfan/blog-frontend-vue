<template>
    <v-content>
        <v-container fluid>
            <v-layout align-center justify-center>
                <v-flex xs10>
                    <v-card>
                        <v-card-title>{{ post.title }}</v-card-title>
                        <v-card-text>
                            <markdown :source="post.content"/>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import axios from 'axios';
    import markdown from 'vue-markdown';

    export default {
        props: ['id'],
        components: {
            markdown
        },
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
                    content: '# Loading content...',
                }
            }
        },
        mounted() {
            axios.get('http://localhost:8080/post/' + this.id + "/info")
                .then(response => {
                    this.post = response.data;
                });
        }
    };
</script>