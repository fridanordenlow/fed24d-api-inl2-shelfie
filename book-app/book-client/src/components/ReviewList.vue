<template>

  <div>
    <h3>Reviews</h3>
    <!-- If no reviews, show a message saying "No reviews" -->
    <div v-if="reviews.length === 0">No reviews</div>
     <!-- Loop through the reviews and display each review -->
    <ul>
      <li v-for="review in reviews" :key="review._id">
        <!-- Display reviewer's name -->
        <p><strong>{{ review.name }}</strong></p>
        <div class="stars">
            <!-- Display stars based on the rating -->
          <span 
            v-for="star in 5" 
            :key="star" 
            class="star"
            :class="{ filled: star <= review.rating }"
          >★</span>
        </div>
         <!-- Display the content of the review -->
        <p>{{ review.content }}</p>
        <small>{{ new Date(review.created_at).toLocaleString() }}</small>
      </li>
    </ul>
  </div>
</template>

<script setup>
// Define the 'reviews' prop, which contains the list of reviews to display
const props = defineProps(['reviews'])
</script>

<style scoped>
li {
    list-style: none;
}

.stars {
  display: flex;
  gap: 4px;
  color: #E87400;
}

.star {
  font-size: 1.5rem;
}

.star.filled {
  color: #E87400;
}

.star {
  color: #ccc;
}
</style>