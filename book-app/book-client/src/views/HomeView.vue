<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <h1>Home</h1>
    <RouterLink to="/register">Register user</RouterLink>
    <RouterLink to="/login">Log in</RouterLink>
    <RouterLink to="/admin-users-panel">Admin users</RouterLink>

</template>

<style lang="scss" scoped>
</style>
