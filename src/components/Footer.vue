<template>
    <v-footer app>
        <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
        <v-switch v-model="dark" primary label="Dark"></v-switch>
    </v-footer>
</template>

<script>
    export default {
        computed: {
            dark: {
                get() {
                    return this.$store.state.dark;
                },
                set(dark) {
                    this.$store.commit('set_dark', dark);
                }
            }
        }
    }
</script>