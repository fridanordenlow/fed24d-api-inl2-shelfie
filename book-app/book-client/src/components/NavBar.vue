<script setup>
import { computed } from 'vue';
import useAuthStore from '@/stores/useAuthStore';
import { useRouter } from 'vue-router';

const auth = useAuthStore();
const router = useRouter();

const isAuthenticated = computed(() => auth.isAuthenticated);

const handleLogout = async () => {
  if (isAuthenticated.value) {
    await auth.logout();
    router.push('/login');
    console.log('You are logged out')
  } else {
    router.push('/login');
  }
};
</script>

<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/books">Books</RouterLink>
    <RouterLink to="/register">Register user</RouterLink>
    <RouterLink to="/admin-users-panel">Admin users</RouterLink>
    <RouterLink to="/book-table">Admin books</RouterLink>
    <RouterLink to="/add-book">Add new book</RouterLink>
    <RouterLink v-if="!isAuthenticated" to="/login">Log in</RouterLink>
    <!-- <RouterLink v-if="isAuthenticated" @click="handleLogout">Log out</RouterLink> -->

    <button class="log-btn" v-if="isAuthenticated" @click="handleLogout">Log out</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.log-btn {
    border: none;
    background-color: #664F35;
    color: #FFF7ED;
    border-radius: 2rem;
    padding: 1rem 1rem;
    max-width: 40vw;
    font-size: 1rem;
}

.log-btn:hover {
    outline: 4px solid #664F35;
    background-color: #FFF7ED;
    color: #664F35;
}
</style> 