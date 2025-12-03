<script setup>
  import NavBar from './NavBar.vue';

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <header>
    <div>
      <h1>{{ title }}</h1>
      <span></span>
    </div>
    <NavBar />
  </header>
</template>

<style scoped>
  header {
    /* background-color: #e3fde0; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
  }

  h1 {
    margin: 0;
    line-height: 1;
  }

  span {
    display: block;
    background-color: #664f35;
    width: 400px;
    height: 6px;
  }
</style>
