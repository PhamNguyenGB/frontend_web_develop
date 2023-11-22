import axios from "axios"

import { useAuthStore } from "../stores/authStore"

const baseURL = "http://localhost:8888/api"

class OrderService {
    async addOrder(orderDetail) {
        console.log("Order", orderDetail);
        const authStore = useAuthStore()
        return (await axios.post(baseURL + '/order', orderDetail, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Authorization": "Beare " + authStore.user.accessToken
            }
        }))
    }

    async getOrder() {
        const authStore = useAuthStore()
        return (await axios.get(baseURL + '/order', {
            headers: {
                "Authorization": "Beare " + authStore.user.accessToken
            }
        })).data
    }

    async getOrderDetail(orderId) {
        const authStore = useAuthStore();
        return (await axios.get(`${baseURL}/order/${orderId}`, {
            headers: {
                "Authorization": "Beare " + authStore.user.accessToken
            }
        })).data
    }
}

export default new OrderService()