<script setup>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import SiteHeader from '@/components/SiteHeader.vue';

  const API_URL = import.meta.env.VITE_API_URL;
  const router = useRouter()
  const form = reactive({
    title: '',
    description: '',
    author: '',
    genres: '',
    image: '',
    published_year: '',
  })
  
  const submit = async () => {
    try {
      await fetch(API_URL + '/books', {
        method: "POST",
        // credentials: 'include', // This enables cookie handling
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })
      
      router.push('/books')
    } catch(error) {
      console.log(error)
    }
  }

</script>

<template>
  <SiteHeader title="Shelfie" />
  <div class="container">
    <h2>Add new book</h2>

    <form id="book-form" class="book-form" @submit.prevent="submit">
      <label>
            <span>Title:</span>
            <input type="text" name="title" v-model="form.title"> 
      </label>
      <label>
            <span>Description:</span> 
            <input type="text" name="title" v-model="form.description"> 
      </label>
      <label>
            <span>Author:</span> 
            <input type="text" name="title" v-model="form.author"> 
      </label>
      <label>
            <span>Genres:</span> 
            <input type="text" name="title" v-model="form.genres"> 
      </label>
      <label>
            <span>Image:</span> 
            <input type="text" name="title" v-model="form.image"> 
      </label>
      <label>
            <span>Published year:</span> 
            <input type="text" name="title" v-model="form.published_year"> 
      </label>
      <button>Add book</button> <br />
      <RouterLink to="/books">Back</RouterLink>
    </form>
  </div>
</template>

<style>
.book-form {
    display: flex;
    flex-direction: column;
}

.book-form > label > span {
    display: block;
}
</style>