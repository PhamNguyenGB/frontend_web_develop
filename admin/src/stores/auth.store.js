import { defineStore } from "pinia";
import authService from "../services/auth.service";
import router from "../router";

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: JSON.parse(localStorage.getItem("user")),
        returnURL: null,
    }),
    actions: {
        async login(user) {
            this.user = await authService.login(user)
            localStorage.setItem("user", JSON.stringify(this.user))
            router.push(this.returnURL || "/profile")
            return this.user;
        },
        async logout() {
            try {
                const result = await authService.logout(this.user.id)
                this.user = null;
                localStorage.removeItem('user');
                router.push('/login');
            } catch (error) {
                console.log(error);
            }
        }
    }
})