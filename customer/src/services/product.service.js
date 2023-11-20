import axios from "axios"

class ProductService {
    async fetchAllTypeProduct(type) {
        return (await axios.get(`http://localhost:8888/api/admin/products/type/${type}`)).data
    }
    async findOneProduct(productId) {
        console.log(productId);
        return (await axios.get(`http://localhost:8888/api/admin/products/${productId}`)).data
    }
}

export default new ProductService()