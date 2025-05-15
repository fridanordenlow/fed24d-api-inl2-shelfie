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
    <RouterLink v-if="!isAuthenticated" to="/login">Log in</RouterLink>
    <RouterLink to="/admin-users-panel">Admin users</RouterLink>
    <button v-if="isAuthenticated" @click="handleLogout">Log out</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
</style>