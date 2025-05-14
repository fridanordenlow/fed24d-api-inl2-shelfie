<template>
  <div v-if="book">
    <RouterLink to="/">← Tillbaka</RouterLink>

    <h2>{{ book.title }}</h2>
    <img :src="book.image" alt="Book image" />
    <p><strong>Författare:</strong> {{ book.author }}</p>
    <p><strong>Publiceringsår:</strong> {{ book.published_year }}</p>
    <p><strong>Beskrivning:</strong> {{ book.description }}</p>
    
    <div class="genres">
      <span v-for="(genre, i) in book.genres" :key="i" class="genre">{{ genre }}</span>
    </div>

    <ReviewForm :bookId="book._id" @review-added="loadReviews" />
    <ReviewList :reviews="reviews" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
//import ReviewForm from './ReviewForm.vue'
//import ReviewList from './ReviewList.vue'

const API_URL = import.meta.env.VITE_API_URL
const route = useRoute()

const book = ref(null)
const reviews = ref([])

const loadBook = async () => {
  const res = await fetch(`${API_URL}/books/${route.params.id}`)
  book.value = await res.json()
}

const loadReviews = async () => {
  const res = await fetch(`${API_URL}reviews?bookId=${route.params.id}`)
  reviews.value = await res.json()
}

onMounted(async () => {
  await loadBook()
  await loadReviews()
})
</script>

<style scoped>
.genre {
  background: #222;
  color: white;
  padding: 0.25rem;
  margin-right: 0.5rem;
}
</style>