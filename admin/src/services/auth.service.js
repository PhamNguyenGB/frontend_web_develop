import createApi from './api.servie';
import axios from "axios";
import { useAuthStore } from "../stores/auth.store";

const authURL = "http://localhost:8888/api"

class AuthService {
    constructor(baseURL = authURL) {
        this.api = createApi(baseURL);
    }

    async login(user) {
        return (await axios.post(authURL + '/admin/login', user)).data
    };

    async logout(id) {
        const authStore = useAuthStore()
        return (await this.api.post(authURL + "/admin/logout", {
            id: id,
        }, {
            headers: {
                Authorization: "Beare " + authStore.user.accessToken

            }
        })).data
    }

}

export default new AuthService();