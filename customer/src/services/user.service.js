import axios from "axios"
import { useAuthStore } from "../stores/authStore";

class UserService {
    async register(userData) {
        return (await axios.post(`http://localhost:8888/api/register`, { userData })).data
    }
    async login(userData) {
        return (await axios.post(`http://localhost:8888/api/login`, userData)).data
    }
    async logout() {
        const authStore = useAuthStore()
        return (await axios.post(`http://localhost:8888/api/logout`, {}, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Beare " + authStore.user.accessToken
            }
        })).data
    }

}

export default new UserService()