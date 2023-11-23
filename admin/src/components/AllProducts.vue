<script setup>
import ProductService from '../services/product.service';
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import { RouterLink } from 'vue-router';
import numeral from 'numeral';

const productService = new ProductService();
const products = ref();

async function fetchAllProducts() {
    try {
        products.value = (await productService.fetchALlProducts()).DT;
    } catch (error) {
        console.log(error);
    }
}

async function handleDelete(productId) {
    let response = await productService.deleteProduct(productId);
    if (response && response.EC === 0) {
        alert(response.EM);
        window.location.reload();
        return;
    }
    alert('error delete');
}

function formatCash(price) {
    return numeral(price).format('0,0');
}

onBeforeMount(async () => {
    await fetchAllProducts();
});


</script>
<template>
    <div class="container">
        <RouterLink class="btn btn-success" to="/products/add">Thêm mới sản phẩm</RouterLink>
        <h3 class="mt-3">Bảng Sản phẩm</h3>
        <table class="table table-hover mt-5">
            <thead>
                <tr>
                    <th scope="col">Tên Sản phẩm</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Loại</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody v-for="product in  products ">
                <tr>
                    <td class="button-action">{{ product.name }}</td>
                    <td><img class="image-admin" v-bind:src='product.image_url' /></td>
                    <td class="button-action">{{ formatCash(product.price) }} vnđ</td>
                    <td class="button-action">{{ product.type }}</td>
                    <td class="button-action">
                        <RouterLink class="btn btn-primary m-1" :to="'/products/edit/' + product._id">Edit
                        </RouterLink>
                        <div class="btn btn-danger m-1" v-on:click="handleDelete(product._id)">Delete</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <router-view />
</template>

<style scoped>
.image-admin {
    width: 100px;
    height: 100px;
}

.button-action {
    padding-top: 30px;
}
</style>