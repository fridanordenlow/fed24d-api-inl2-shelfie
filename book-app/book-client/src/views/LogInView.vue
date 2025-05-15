<script setup>
import { reactive } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import SiteHeader from '@/components/SiteHeader.vue';

import useAuthStore from '@/stores/useAuthStore';

const authStore = useAuthStore();
const router = useRouter();

const form  = reactive({
    username: '',
    password: '',
});

const onSubmit = async () => {
    await authStore.login(form)

    if (authStore.isAuthenticated) {
        console.log('You are logged in', form.username)
        router.push('/') 
    };

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
    <SiteHeader title="Shelfie" />
    <div>
        <h2>Log in to your account</h2>
        <form id="register-form" @submit.prevent="onSubmit">
            <label for="">Username:</label>
            <input type="text" name="username" v-model="form.username">
            <label for="">Password:</label>
            <input type="text" name="password" v-model="form.password">
            <button>Log in</button>
        </form> 
        <div v-if="authStore.errorMessage" class="feedback-message">{{ authStore.errorMessage }}</div>
        <RouterLink to="/">Home Page</RouterLink>
    </div>
</template>

<style scoped>
</style>
