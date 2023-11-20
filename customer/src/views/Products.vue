<script setup>
import router from '../router';
</script>
<template>
    <div class="body">
        <router-view></router-view>
    </div>
</template>

<style>
.body {
    min-height: 700px;
}
</style>