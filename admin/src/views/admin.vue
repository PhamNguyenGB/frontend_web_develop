<script setup>
import Header from "../components/Header.vue"
</script>
<template>
    <Header></Header>
    <div class="container">
        <div class="row">
            <main class="col-md-9 col-lg-10 mt-2" style="min-height: 400px">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>
<style scoped></style>