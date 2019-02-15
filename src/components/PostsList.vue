<template>
    <ul v-if="posts && posts.length">
        <li v-for="post of posts">
            <p>{{ post.author }}</p>
            <p>{{ post.creationDate }}</p>
            <p>{{ post.rating }}</p>
        </li>
    </ul>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "PostsList",
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

<style scoped>

</style>