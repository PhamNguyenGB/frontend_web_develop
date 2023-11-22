<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { ref, reactive, onBeforeMount } from 'vue';
import OrderService from '../services/order.service';
import ProductService from '../services/product.service';
import numeral from 'numeral';

const orderService = new OrderService();
const productService = new ProductService();

const route = useRoute();
const orderId = route.params.id;
const productIds = ref();
const products = ref([]);
const quantity = ref([]);

async function fetchAllOrderDetails() {
    try {
        productIds.value = await orderService.fetchAllOrderDetails(orderId);
        productIds.value.map(async (item, index) => {
            quantity.value = [...quantity.value, item.quantity]
            let product = await productService.findProductById(item.productId);
            products.value = [...products.value, product]
        })
    } catch (error) {
        console.log(error);
    }
}

function formatCash(price) {
    return numeral(price).format('0,0');
}


onBeforeMount(async () => {
    await fetchAllOrderDetails();
})


</script>
<template>
    <div class="container">
        <h3 class="mt-3">Bảng chi tiết sản phẩm</h3>
        <table class="table table-hover mt-5">
            <thead>
                <tr>
                    <th scope="col">Tên Sản phẩm</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Giá</th>
                </tr>
            </thead>
            <tbody v-for="(product, index) in products">
                <tr>
                    <td class="button-action">{{ product.DT.name }}</td>
                    <td><img class="image-admin" :src="product.DT.image_url" style="width: 100px; height: 100px;" /></td>
                    <td class="button-action"> {{ quantity[index] }}</td>
                    <td class="button-action">{{ formatCash((quantity[index]) * product.DT.price) }} vnđ</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>