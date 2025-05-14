<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

const API_URL = import.meta.env.VITE_API_URL

const books = ref([]);
const searchQuery = ref('');


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

const searchBook = () => {
    alert('Query: ' + searchQuery.value)
}
</script>

<template>
    <div>
        <h2>Books</h2>
        <form id="book-search" @submit.prevent="searchBook">
            <input type="text" placeholder="Search" v-model="searchQuery" />
            <button>Search</button>
        </form>
        <section id="books-list" class="books-list">
            <article v-for="book in books" :key="book._id">
                <div>
                    <img 
                        :src="book.image"
                        :alt="book.title"
                        class="book-image"
                    />
                    <h3>{{ book.title }}</h3>
                    <h4>{{ book.author }}</h4>
                    <p>{{ book.published_year }}</p>
                    <div class="genres">
                        <span v-for="(genre, index) in book.genres" :key="index" class="genre">
                            {{ genre }}
                        </span>
                    </div>
                </div>
                <div class="view-link">
                    <RouterLink :to="`/books/${book._id}`">View</RouterLink>
                </div>
            </article>
        </section>
    </div>
</template>

<style scoped>
.books-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}
.book-image {
    max-height: 30vh;
    width: auto;
}
.genres {
    display: flex;
    gap: 1rem;
}
.genre {
    background-color: black;
    color: white;
    padding: 0.25rem;
}
</style>