<template>
    <v-footer app>
        <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
        <v-switch v-model="dark" primary label="Dark"></v-switch>
    </v-footer>
</template>