// import axios from "../setup/axios";
import axios from "axios";
import { useAuthStore } from "../stores/auth.store";

const baseURL = "http://localhost:8888/api/admin/products"

class ProductService {
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

    async fetchALlProducts() {
        return (await axios.get(baseURL)).data;
    }

    async addProduct(product) {
        console.log("check product", product);
        return (await axios.post(baseURL + '/create', product, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Authorization": "Beare " + this.user.accessToken || ""
            }
        })).data
    }

    async updateProduct(product) {
        return (await axios.put(baseURL + '/update', product, {
            headers: {
                "Content-Type": 'multipart/form-data',
                "Authorization": "Beare " + this.user.accessToken || ""
            }
        })).data
    }

    async deleteProduct(productId) {
        return (await axios.delete(baseURL + `/detele/${productId}`, {
            headers: {
                "Authorization": "Beare " + this.user.accessToken || ""
            }
        })).data
    }

    async findProductById(productId) {
        return (await axios.get(baseURL + `/${[productId]}`)).data
    }
}

export default ProductService;