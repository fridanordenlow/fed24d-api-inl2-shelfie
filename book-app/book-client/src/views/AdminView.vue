<script setup>
import SiteHeader from "@/components/SiteHeader.vue";
import { RouterLink } from "vue-router";

</script>

<template>
    <SiteHeader title="Shelfie" />
    <div class="wrapper">
        <h2>Admin view</h2>
        <RouterLink to="/">Back</RouterLink>

        <div class="panel">
            <RouterLink to="/admin-users-panel">View all users</RouterLink>
            <RouterLink to="/book-table">View all books</RouterLink>
            <RouterLink to="/add-book">Add new book</RouterLink>
        </div>
    </div>
</template>
