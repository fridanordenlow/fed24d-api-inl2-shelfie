<script setup>
  import { reactive } from 'vue';
  import { RouterLink, useRouter } from 'vue-router';

  import useAuthStore from '@/stores/useAuthStore';

  const authStore = useAuthStore();
  const router = useRouter();

  const form = reactive({
    username: '',
    password: '',
  });

  const onSubmit = async () => {
    await authStore.login(form);

    if (authStore.isAuthenticated) {
      console.log('You are logged in', form.username);
      router.push('/');
    }

    // errorMessage.value = '';

    // try {
    //     const response = await fetch(API_URL + '/auth/login', {
    //         method: 'POST',
    //         credentials: 'include',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(form)
    //     })

    //     if (!response.ok) {
    //         const errorData = await response.json();
    //         throw new Error(errorData.message || 'Login failed');
    //     }
    //     console.log('You are logged in.')
    //     router.push('/') // Or redirect to /books?

    // } catch(error) {
    //     console.log(error);
    //     errorMessage.value = error.message || 'Sorry, something went wrong at login. Please try again.';
    // }
  };
</script>

<template>
  <div class="wrapper">
    <h2>Log in to your account</h2>
    <form class="form" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="username">Username:</label>
        <input id="username" type="text" v-model="form.username" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="form.password" />
      </div>
      <button class="submit-button" type="submit">Log in</button>
    </form>
    <div v-if="authStore.errorMessage" class="feedback-message">
      {{ authStore.errorMessage }}
    </div>
    <RouterLink to="/" class="back-link">← Home Page</RouterLink>
  </div>
</template>

<style scoped>
  .wrapper {
    max-width: 400px;
    margin: 3rem auto;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 12px;
    background-color: #fafafa;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 0.3rem;
    font-weight: bold;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
  }

  .submit-button {
    padding: 0.75rem;
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    background-color: #664f35;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .submit-button:hover {
    background-color: #3f51b5;
  }

  .feedback-message {
    margin-top: 1rem;
    color: red;
    text-align: center;
  }

  .back-link {
    display: block;
    margin-top: 1rem;
    text-align: center;
    color: #664f35;
    text-decoration: underline;
    transition: color 0.3s ease;
  }

  .back-link:hover {
    color: #3f51b5; /* Samma som hover-färgen på knappen */
    text-decoration-color: #3f51b5;
    font-weight: 600;
    background-color: none;
  }

  a:hover {
    background-color: transparent;
    color: #5c6bc0;
  }
</style>
