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
<style>
.panel {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
}

.panel > a {
    background-color: #664F35;
    color: #FFF7ED;
    padding: 0.5rem;
    border-radius: 0.5rem;
    width: 60vw;
}
</style>