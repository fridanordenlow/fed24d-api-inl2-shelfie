<script setup>
import { reactive } from 'vue';
import useAuthStore from '@/stores/useAuthStore';
import SiteHeader from '@/components/SiteHeader.vue';

const authStore = useAuthStore();

const form = reactive({
  username: '',
  password: '',
});

const onSubmit = async () => {
  await authStore.register(form);
  if (!authStore.errorMessage) {
    form.username = '';
    form.password = '';
  }
};
</script>

<template>
    <SiteHeader title="Shelfie" />
    <div class="wrapper">
      <h2>Register account</h2>
      <form class="form" @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="username">Username:</label>
          <input id="username" type="text" v-model="form.username" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input id="password" type="password" v-model="form.password" />
        </div>
        <button class="submit-button" type="submit">Register</button>
      </form>
  
      <div v-if="authStore.successMessage" class="feedback-message success">
        {{ authStore.successMessage }}
      </div>
      <div v-if="authStore.errorMessage" class="feedback-message error">
        {{ authStore.errorMessage }}
      </div>
  
      <RouterLink to="/" class="back-link">← Home Page</RouterLink>
      <RouterLink to="/login" class="login-link">Already have an account? Log in</RouterLink>
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
  background-color: #664F35;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #3f51b5;
}

.feedback-message {
  margin-top: 1rem;
  text-align: center;
  font-size: 0.95rem;
  padding: 0.5rem;
  border-radius: 6px;

  &.success {
    color: #2e7d32;
    background-color: #e8f5e9;
    border: 1px solid #81c784;
  }

  &.error {
    color: #c62828;
    background-color: #ffebee;
    border: 1px solid #ef9a9a;
  }
}

.back-link,
.login-link {
  display: block;
  margin-top: 1rem;
  text-align: center;
  color: #664F35;
  text-decoration: underline;
}

a:hover {
  background-color: transparent;
  color: #5c6bc0;
}
</style>
