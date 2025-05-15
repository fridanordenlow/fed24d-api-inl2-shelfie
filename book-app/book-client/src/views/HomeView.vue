<script setup>
import SiteHeader from '@/components/SiteHeader.vue';
import BookMinis from '@/components/BookMinis.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const registerButton = () => {
  router.push('/register'); 
};
</script>

<template>
    <SiteHeader title="Shelfie" />
    <div class="wrapper">
        <h2>Where every book finds its place</h2>
        <div class="indent">
            <p>Discover your next page-turner, track your novel adventures, and connect with fellow bookworms. Whether you're into fictional worlds or real-life stories, Shelfie is the place to shelf your thoughts and bookmark your journey through the world of books.</p>
            <button class="register" @click="registerButton">
                Register
            </button>
        </div>
        <h2>Chapter One: Your Next Read</h2>
        <BookMinis />
    </div>
</template>

<style scoped>
.indent {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}
.indent > p {
    max-width: 70%;
}
.register {
    border: none;
    background-color: #664F35;
    color: #FFF7ED;
    border-radius: 2rem;
    padding: 1rem 3rem;
    max-width: 40vw;
    font-size: 1.5rem;
}

.register:hover {
    outline: 4px solid #664F35;
    background-color: #FFF7ED;
    color: #664F35;
}
</style>
