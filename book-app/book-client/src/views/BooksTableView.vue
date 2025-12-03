<script setup>
  import { onMounted, ref } from 'vue';
  import { RouterLink } from 'vue-router';

  const API_URL = import.meta.env.VITE_API_URL;

  const books = ref([]);

  onMounted(async () => {
    try {
      const response = await fetch(API_URL + '/books');
      const data = await response.json();
      console.log(data);
      books.value = data;
    } catch (error) {
      console.log(error);
    }
  });
</script>

<template>
  <div class="wrapper">
    <h2>All books</h2>
    <div class="options">
      <RouterLink to="/admin-view">Back</RouterLink>
      <RouterLink to="/add-book">Add new book</RouterLink>
    </div>
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
  .options {
    display: flex;
    justify-content: space-between;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background-color: white;
  }

  th,
  td {
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: left;
  }

  th {
    background-color: #f3f3f3;
  }

  tr:nth-child(even) {
    background-color: #e3fde0;
  }
</style>
