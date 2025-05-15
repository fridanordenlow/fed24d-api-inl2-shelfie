import { defineStore } from 'pinia';

const API_URL = import.meta.env.VITE_API_URL;

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    errorMessage: '',
    successMessage: '',
  }),
  actions: {
    async login(form) {
      this.errorMessage = '';
      try {
        const response = await fetch(API_URL + '/auth/login', {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Login failed');
        }

        this.isAuthenticated = true;
        this.successMessage = 'Successfully logged in!';
      } catch (error) {
        this.isAuthenticated = false;
        this.errorMessage = error.message || 'Login failed';
      }
    },

    async logout() {
      try {
        await fetch(API_URL + '/auth/logout', {
          method: 'POST',
          credentials: 'include',
        });
      } catch (error) {
        console.log('Logout request failed:', error);
      } finally {
        this.isAuthenticated = false;
      }
    },

    async register(form) {
      this.errorMessage = '';
      this.successMessage = '';
      try {
        const response = await fetch(API_URL + '/auth/register', {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Registration failed');
        }

        this.successMessage = 'Registration successful!';
      } catch (error) {
        this.errorMessage = error.message || 'Registration failed';
      }
    }
  }
});

export default useAuthStore;


// export const useAuthStore = defineStore('auth', {
//     state: () => ({ isAuthenticated: false }),
//     actions: {
//         async login() {
//             try {
//                 // Fetch req login
//                 this.isAuthenticated = true
//             } catch (error) {
//                 console.log(error)
//                 this.isAuthenticated = false
//             }
//         },
//         logout() {
//             // Fetch req logout
//             this.isAuthenticated = false
//         },
//         register() {
//             // Fetch req register
//         }
//     }
// })

// export default useAuthStore