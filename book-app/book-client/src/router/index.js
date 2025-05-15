
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';

import HomeView from '@/views/HomeView.vue';
import RegisterView from '@/views/RegisterView.vue';
import LogInView from '@/views/LogInView.vue';
import BookDetail from '@/components/BookDetail.vue';
import BookListView from '@/views/BookListView.vue'
import AddBookView from '@/views/AddBookView.vue'
import BooksTableView from '@/views/BooksTableView.vue';
import AdminUsersView from "@/views/AdminUsersView.vue";
import useAuthStore from '@/stores/useAuthStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView,
    },
    {
        path: '/login',
        name: 'login',
        component: LogInView,
    },    
    {
      path: '/books/:id',
      name: 'book-detail',
      component: BookDetail,
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
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/book-table',
      name: 'All books',
      component: BooksTableView,
      meta: {
        requiresAuth: true
      }
    },
    {
        path: '/admin-users-panel',
        name: 'Administrate users',
        component: AdminUsersView,
        meta: {
          requiresAuth: true
        }
      }
  ],
});

const pinia = createPinia()
const useAuth = useAuthStore(pinia);

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !useAuth.isAuthenticated) {
    next('/login');
  } else {
    next()
  }
})

export default router;
