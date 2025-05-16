<script setup>
import NavBar from './NavBar.vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <header>
        <h1>{{ title }}</h1>
        <NavBar />
    </header>
</template>

<style scoped>
header {
    background-color: #E3FDE0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 1rem;
}

h1 {
    margin: 0;
}
</style>