<script setup>
import SiteHeader from "@/components/SiteHeader.vue";
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

const API_URL = import.meta.env.VITE_API_URL

const books = ref([]);

onMounted(async () => {
    try {
        const response = await fetch(API_URL + '/books')
        const data = await response.json();
        console.log (data);
        books.value = data;
    } catch(error) {
        console.log(error);
    }
})
</script>

<template>
    <SiteHeader title="Shelfie" />
    <div class="wrapper">
        <h2>All books</h2>
        <RouterLink to="/admin-view">Back</RouterLink>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Published</th>
                    <th colspan="3">Genres</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books" :key="book._id">
                    <td>{{ book.title }}</td>
                    <td>{{ book.author }}</td>
                    <td>{{ book.published_year }}</td>
                    <td v-for="(genre, index) in book.genres" :key="index">
                        {{ genre }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
table {
    margin-top: 1rem;
}
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}

th, td {
    padding: 5px 10px;
}

tr:nth-child(even) {
  background-color: #e3fde0;
}

</style>