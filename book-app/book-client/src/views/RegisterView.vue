<script setup>
import { reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';

const API_URL = import.meta.env.VITE_API_URL;

const form  = reactive({
    username: '',
    password: '',
})

const successMessage = ref('');
const errorMessage = ref('');


const onSubmit = async () => {
    successMessage.value = '';
    errorMessage.value = '';

    try {
        const response = await fetch(API_URL + '/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Registration failed');
        }

        successMessage.value = 'Registration successful, thank you for joining us! You can now log in to your new account.';
        form.username = '';
        form.password = '';

    } catch(error) {
        console.log(error);
        errorMessage.value = error.message || 'Sorry, something went wrong at registration.';
    }
};
</script>

<template>
    <div>
        <h1>Register account</h1>
        <form id="register-form" @submit.prevent="onSubmit">
            <label for="">Username:</label>
            <input type="text" name="username" v-model="form.username">
            <label for="">Password:</label>
            <input type="text" name="password" v-model="form.password">
            <button>Register</button>
        </form> 
        <div v-if="successMessage" class="message success">{{ successMessage }}</div>
        <div v-if="errorMessage" class="message error">{{ errorMessage }}</div>
        <RouterLink to="/">Go back</RouterLink> <!-- Change to login-button? -->
    </div>
</template>

<style lang="scss" scoped>
</style>
