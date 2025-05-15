<template>
  <div v-if="book" class="wrapper">
     <!-- Link to navigate back to the previous page -->
    <RouterLink to="/">← Tillbaka</RouterLink>
   <!-- Book details -->
    <h2>{{ book.title }}</h2>
    <img :src="book.image" alt="Book image" />
    <p><strong>Författare:</strong> {{ book.author }}</p>
    <p><strong>Publiceringsår:</strong> {{ book.published_year }}</p>
    <p><strong>Beskrivning:</strong> {{ book.description }}</p>
    
    <div class="genres">
      <span v-for="(genre, i) in book.genres" :key="i" class="genre">{{ genre }}</span>
    </div>
     <!-- Component to submit a new review -->
    <ReviewForm :bookId="book._id" @review-added="loadReviews" />
     <!-- List of reviews for this book -->
    <ReviewList :reviews="reviews" />
  </div>
</template>

<script setup>
// Import necessary functions from Vue and components
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ReviewForm from './ReviewForm.vue'
import ReviewList from './ReviewList.vue'

// API URL
const API_URL = import.meta.env.VITE_API_URL
// Get route parameters
const route = useRoute()
// Variables to hold the book data and reviews
const book = ref(null)
const reviews = ref([])
// Function to load book details by its ID from the API
const loadBook = async () => {
  const res = await fetch(`${API_URL}/books/${route.params.id}`)
  book.value = await res.json()
}
// Function to load reviews for the book from the API
const loadReviews = async () => {
 const res = await fetch(`${API_URL}/reviews/books/${route.params.id}`)
  reviews.value = await res.json()
}
// On component mount, load book details and reviews
onMounted(async () => {
  await loadBook()
  await loadReviews()
})
</script>

<style scoped>
.genre {
  padding: 0.25rem;
  margin-right: 0.5rem;
}
</style>