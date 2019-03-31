<template>
    <v-content>
        <v-container fluid grid-list-md v-for="post in posts" :key="post.id">
            <v-layout align-center justify-center>
                <v-flex xs10>
                    <v-card>
                        <v-card-title>{{ post.title }}</v-card-title>
                        <v-card-text>
                            {{ post.preview }}
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn :to="read_more_route(post)" flat color="primary">Read more</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <v-pagination
                v-if="pagination.totalPages > 1"
                v-model="pagination.page"
                :length="pagination.totalPages"
                :total-visible="pagination.visible"
                @input="getPage"
        ></v-pagination>
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
                ],
                pagination: {
                    page: 1,
                    totalPages: 1,
                    size: 4,
                    visible: 10
                }
            }
        },
        mounted() {
            this.getPage(1);
        },
        methods: {
            read_more_route(post) {
                return '/post/' + post.id;
            },
            getPage(page) {
                axios.post('http://localhost:8080/post/displayed',
                    {
                        page: page,
                        size: this.pagination.size
                    })
                    .then(response => {
                        this.posts = response.data.content;
                        this.pagination.totalPages = response.data.totalPages;
                    })
            }
        }
    }
</script>