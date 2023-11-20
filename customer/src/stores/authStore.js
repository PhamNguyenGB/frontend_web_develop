import { defineStore } from "pinia";
import router from "../router";
import userService from "../services/user.service";

export const useAuthStore = defineStore({
    id: "auth",
    state: () => ({
        user: JSON.parse(localStorage.getItem("user")),
        returnUrl: null,
    }),
    actions: {
        async login(user) {
            this.user = await userService.login(user);
            localStorage.setItem("user", JSON.stringify(this.user));
            router.push(this.returnUrl || '/');
            return this.user;
        },
        async logout() {
            try {
                const result = await userService.logout();
                console.log(result);
                this.user = null;
                localStorage.removeItem("user");
            } catch (error) {
                console.log(error);
            }
        }
    }
})