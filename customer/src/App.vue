<script setup>
import router from './router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header></Header>
  <router-view class=""></router-view>
  <Footer></Footer>
</template>

<style scoped></style>