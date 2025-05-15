<script setup>
import { ref } from "vue";
import SiteHeader from '@/components/SiteHeader.vue';
import BookMinis from "@/components/BookMinis.vue";

const searchQuery = ref('');

const searchBook = () => {
    alert('Query: ' + searchQuery.value)
}
</script>

<template>
    <SiteHeader title="Shelfie" />
    <div class="wrapper">
        <h2>Books</h2>
        <form id="book-search" @submit.prevent="searchBook">
            <input type="text" placeholder="Search" v-model="searchQuery" />
            <button>Search</button>
        </form>
        <BookMinis />
    </div>
</template>
