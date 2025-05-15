
import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import RegisterView from '@/views/RegisterView.vue';
import LogInView from '@/views/LogInView.vue';
import BookDetail from '@/components/BookDetail.vue';
import BookListView from '@/views/BookListView.vue'
import AddBookView from '@/views/AddBookView.vue'
import AdminUsersView from '@/views/AdminUsersView.vue';
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
      /*
      meta: {
        requiresAuth: true
      }
      */
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

router.beforeEach((to, from, next) => {
const authStore = useAuthStore()

// console.log(to.meta.requiresAuth && !authStore.isAuthenticated)

if (to.meta.requiresAuth) {
    next('/login')
} else {
    next();
}
}) 

export default router;
