import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import BookListView from '@/views/BookListView.vue'
import AddBookView from '@/views/AddBookView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/books',
      name: 'Book list',
      component: BookListView,
    },
    {
      path: '/add-book',
      name: 'Add new book',
      component: AddBookView,
      /*
      meta: {
        requiresAuth: true
      }
      */
    }
  ],
});

export default router;