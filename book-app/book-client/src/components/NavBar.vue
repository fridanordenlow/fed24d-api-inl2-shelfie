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
      console.log('You are logged out');
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
    <RouterLink to="/admin-view">Admin</RouterLink>
    <RouterLink class="log-btn" v-if="!isAuthenticated" to="/login"
      >Log in</RouterLink
    >
    <!-- <RouterLink v-if="isAuthenticated" @click="handleLogout">Log out</RouterLink> -->

    <button class="log-btn" v-if="isAuthenticated" @click="handleLogout">
      Log out
    </button>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-size: 1.2rem;
    align-items: center;
  }

  .log-btn {
    /* border: 2px solid #664f35; */
    border: none;
    background-color: #664f35;
    color: #fff7ed;
    border-radius: 10px;
    padding: 10px 15px;
    width: fit-content;
    font-size: 1rem;
  }

  .log-btn:hover {
    /* background-color: #fff7ed;
    color: #664f35; */
    opacity: 0.8;
  }
</style>
