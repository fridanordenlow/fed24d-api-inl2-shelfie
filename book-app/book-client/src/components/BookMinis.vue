<script setup>
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
    <section id="books-list" class="books-list">
        <article v-for="book in books" :key="book._id">
            <div>
                <RouterLink :to="`/books/${book._id}`">
                    <img 
                        :src="book.image"
                        :alt="book.title"
                        class="book-image"
                    />
                </RouterLink>
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
</template>

<style scoped>
.books-list {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
}
@media (min-width: 460px) {
  .books-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 760px) {
  .books-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1024px) {
  .books-list {
    grid-template-columns: repeat(4, 1fr);
  }
}
a:hover {
    background-color: transparent;
}
.book-image {
    max-height: 30vh;
    width: auto;
}
h3 {
    margin: 0;
}
h4 {
    margin: 0;
}
.genres {
    display: flex;
    gap: 1rem;
}
</style>