<script setup>
  import BookMinis from '@/components/BookMinis.vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const registerButton = () => {
    router.push('/register');
  };
</script>

<template>
  <div class="wrapper">
    <h2>Where every book finds its place</h2>
    <div class="indent">
      <p>
        Discover your next page-turner, track your novel adventures, and connect
        with fellow bookworms. Whether you're into fictional worlds or real-life
        stories, Shelfie is the place to shelf your thoughts and bookmark your
        journey through the world of books.
      </p>
      <button class="register" @click="registerButton">Register</button>
    </div>
    <h2>Chapter One: Your Next Read</h2>
    <BookMinis />
  </div>
</template>

<style scoped>
  .indent {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .indent > p {
    max-width: 600px;
  }

  h2 {
    max-width: 70%;
    margin: 0;
  }

  .register {
    border: none;
    background-color: #664f35;
    color: #fff7ed;
    border-radius: 2rem;
    padding: 0.6rem 2.5rem;
    width: fit-content;
    /* max-width: 20vw; */
    font-size: 1.2rem;
  }

  .register:hover {
    outline: 4px solid #664f35;
    background-color: #fff7ed;
    color: #664f35;
  }
</style>
