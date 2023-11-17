// import axios from "../setup/axios";
import axios from "axios";


class ProductService {

    async fetchALlProducts() {
        return (await axios.get('http://localhost:8888/api/admin/products')).data;
    }

    async addProduct(product) {
        return (await axios.post('http://localhost:5173/api/admin/products/create', product), {
            headers: {
                "Content-Type": 'multipart/form-data',
            }
        });
    }

    async addProduct(product) {
        return (await axios.put('http://localhost:5173/api/admin/products/update', product), {
            headers: {
                "Content-Type": 'multipart/form-data',
            }
        });
    }

    async deleteProduct(product) {
        return (await axios.delete('http://localhost:5173/api/admin/products/detele', product));
    }


}

export default ProductService;