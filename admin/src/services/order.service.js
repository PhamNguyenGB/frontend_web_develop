import axios from "axios";
import { useAuthStore } from "../stores/auth.store";

const baseURL = "http://localhost:8888/api/order"

class OrderService {
    constructor() {
        this.user = (useAuthStore()).user
        const commonConfig = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Beare " + this.user.accessToken || ""
            },
        };
        this.api = axios.create({
            baseURL,
            ...commonConfig,
        })
    }

    async fetchAllOrders() {
        return (await axios.get(baseURL + '/all')).data;
    }

    async updateOrderStatus(orderId) {
        const authStore = useAuthStore();
        return (await axios.put(`${baseURL}/updateStatus`, {
            orderId: orderId,
        }, {
            headers: {
                "Authorization": "Beare " + authStore.user.accessToken || ""
            }
        }))
    }

    async fetchAllOrderDetails(orderId) {
        const authStore = useAuthStore();
        return (await axios.get(`http://localhost:8888/api/admin/order/${orderId}`, {
            headers: {
                "Authorization": "Beare " + authStore.user.accessToken || ""
            }
        })).data;;
    }
}

export default OrderService;