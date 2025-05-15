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
    <div>
        <h2>Register account</h2>
        <form id="register-form" @submit.prevent="onSubmit">
            <label for="">Username:</label>
            <input type="text" name="username" v-model="form.username">
            <label for="">Password:</label>
            <input type="text" name="password" v-model="form.password">
            <button>Register</button>
        </form> 
        <div v-if="authStore.successMessage" class="feedback-message">{{ authStore.successMessage }}</div>
        <div v-if="authStore.errorMessage" class="feedback-message">{{ authStore.errorMessage }}</div>
        <RouterLink to="/">Home Page</RouterLink> <!-- Change to login-button? -->
        <RouterLink to="/login">Log in</RouterLink> 
    </div>
</template>

<style lang="scss" scoped>
</style>
