<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import SiteHeader from '@/components/SiteHeader.vue';

const API_URL = import.meta.env.VITE_API_URL
const users = ref([])

const loadUsers = async () => {
  try {
    const res = await fetch(`${API_URL}/users`) // Justera endpoint vid behov
    users.value = await res.json()
  } catch (err) {
    console.error('Could not fetch users:', err)
  }
}

const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('sv-SE')
}

onMounted(() => {
  loadUsers()
})
</script>

<template>
    <SiteHeader title="Shelfie" />
    <div class="wrapper">
        <h2>All users</h2>
        <RouterLink to="/admin-view">Back</RouterLink>

        <table v-if="users.length">
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>Admin</th>
              <th>Date added</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user._id">
              <td>{{ user.username }}</td>
              <td>{{ user.password.slice(0, 12) }}...</td>
              <td>{{ user.is_admin ? 'Yes' : 'No' }}</td>
              <td>{{ formatDate(user.created_at) }}</td>
            </tr>
          </tbody>
        </table>
    
        <p v-else>Loading users...</p>
        <!-- <RouterLink to="/">Home Page</RouterLink> -->
    </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: white;
}

th, td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
}

th {
  background-color: #f3f3f3;
}
</style>
