<script setup>
import BookList from '@/components/BookList.vue';
import { RouterLink } from 'vue-router';

</script>

<template>
    <h1>Home</h1>
    <BookList />
    <RouterLink to="/register">Register user</RouterLink>
</template>

<style lang="scss" scoped>
</style>
