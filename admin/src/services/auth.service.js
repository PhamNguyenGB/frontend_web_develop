import axios from "axios";
import { useAuthStore } from "../stores/auth.store";


class AuthService {
    async login(staff) {
        console.log(staff);
        return (await axios.post('http://localhost:8888/api/admin', staff, {
            headers: {
                "Content-Type": "application/json",
            }
        })).data
    };

    async logout() {
        const authStore = useAuthStore()
        return (await axios.post("http://localhost:8888/api/admin/logout", {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Beare " + authStore.user.accessToken
                }
            })).data
    }

}

export default new AuthService();