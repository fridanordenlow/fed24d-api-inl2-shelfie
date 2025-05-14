<script setup>
// To do:
// Implement log out somewhere

import { reactive, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const API_URL = import.meta.env.VITE_API_URL;
const router = useRouter();

const form  = reactive({
    username: '',
    password: '',
})

const errorMessage = ref('');

const onSubmit = async () => {
    errorMessage.value = '';

    try {
        const response = await fetch(API_URL + '/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Login failed');
        }
        console.log('You are logged in.')
        router.push('/') // Or redirect to /books?

    } catch(error) {
        console.log(error);
        errorMessage.value = error.message || 'Sorry, something went wrong at login. Please try again.';
    }
};
</script>

<template>
    <div>
        <h1>Log in to your account</h1>
        <form id="register-form" @submit.prevent="onSubmit">
            <label for="">Username:</label>
            <input type="text" name="username" v-model="form.username">
            <label for="">Password:</label>
            <input type="text" name="password" v-model="form.password">
            <button>Log in</button>
        </form> 
        <div v-if="errorMessage" class="feedback-message">{{ errorMessage }}</div>
        <RouterLink to="/">Go back</RouterLink> <!-- Change to login-button? -->
    </div>
</template>

<style lang="scss" scoped>
</style>
