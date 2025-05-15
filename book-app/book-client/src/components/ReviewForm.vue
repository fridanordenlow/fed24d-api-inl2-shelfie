<template>
    <!-- Review form component -->
  <form @submit.prevent="submitReview" class="review-form">
    <h3>What do you think?</h3>
 <!-- Rating section: Allows users to click on stars for rating -->
    <div class="rating">
      <span
        v-for="star in 5"
        :key="star"
        class="star"
        :class="{ filled: star <= form.rating }"
        @click="setRating(star)"
      >★</span>
      <div class="rate-label">{{ form.rating }} / 5</div>
    </div>
   <!-- Input field for the reviewer's name -->
    <input v-model="form.name" placeholder="Your name" required />
    <textarea v-model="form.content" placeholder="Your review" required></textarea>
    <button type="submit">Write a Review</button> <!-- Submit button to post the review -->
  </form>
</template>

<script setup>
import { ref } from 'vue'
// Accept props from the parent component, specifically the bookId
const props = defineProps(['bookId'])
// Define emits to notify the parent that a new review has been added
const emit = defineEmits(['review-added'])
// Reactive form data to capture the reviewer's name, content, and rating
const form = ref({
  name: '',
  content: '',
  rating: 1, // Default rating
})
// Function to set the rating when a star is clicked
const setRating = (value) => {
  form.value.rating = value
}
// API URL to send the review data
const API_URL = import.meta.env.VITE_API_URL
// Function to submit the review to the backend
const submitReview = async () => {
  const response = await fetch(`${API_URL}/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...form.value, bookId: props.bookId })// Send form data including the bookId
  })

  if (response.ok) {
    form.value = { name: '', content: '', rating: 1 }
    emit('review-added')
  }
}
</script>

<style scoped>
.review-form {
  max-width: 400px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: 'Georgia', serif;
}

.rating {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.star {
  font-size: 2rem;
  color: #ccc;
  cursor: pointer;
  transition: color 0.3s;
}

.star.filled {
  color: #E87400;
}

.rate-label {
  margin-left: 12px;
  font-size: 0.9rem;
  color: #333;
}

input,
textarea {
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #664F35;
  border-radius: 4px;
}

button {
  background-color: #664F35;
  color: white;
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  align-self: flex-start;
}

button:hover {
  background-color: #8b6a44;
}
</style>