// import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { createPinia } from "pinia";

import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import { useAuthStore } from "./stores/authStore";

startApp();


async function startApp() {
    const pinia = createPinia();
    const app = createApp(App);

    app.use(pinia)
    app.use(router)
    try {
        const authStore = useAuthStore();
        await authStore.refreshToken();
    } catch (err) {
        console.log("Expired refresh token");
    }

    app.mount('#app')

}

