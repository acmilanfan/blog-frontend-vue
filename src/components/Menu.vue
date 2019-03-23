<template>
    <v-list dense class="pt-1">
        <v-list-tile
                v-for="item in items"
                :key="item.title"
                :to="item.url"
        >
            <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>

        </v-list-tile>
    </v-list>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        title: 'Home',
                        icon: 'dashboard',
                        url: '/'
                    },
                    {
                        title: 'About',
                        icon: 'question_answer',
                        url: '/about'
                    }
                ]
            }
        }
    }
</script>