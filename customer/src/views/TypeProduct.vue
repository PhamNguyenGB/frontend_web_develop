<script setup>
import { ref, reactive, defineProps, onBeforeMount, watch } from 'vue';
import productService from '../services/product.service';
import numeral from 'numeral';
import router from '../router';
import { useCartStore } from "../stores/cart.store";

const cartStore = useCartStore();

const props = defineProps(['type']);
const products = ref('');

async function fetchAllTypeProducts() {
    try {
        products.value = (await productService.fetchAllTypeProduct(props.type)).DT;
    } catch (error) {
        console.log(error);
    }
}
function formatCash(price) {
    return numeral(price).format('0,0');
}

onBeforeMount(async () => {
    await fetchAllTypeProducts();
});

watch(props, () => {
    fetchAllTypeProducts();
})

function handleClick(productId) {
    router.push(`/products/detail/${productId}`);
}

function addCart(product) {
    console.log(product);
    cartStore.addProduct(
        product
        , 1)
}


</script>
<template>
    <div class="container">
        <div class="row mt-5">
            <div class="card col-3 card-product" v-for="product in products">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img role="button" v-bind:src="product.image_url" class="img-fluid" @click="handleClick(product._id)" />
                </div>
                <div class="card-body">
                    <h5 class="card-title" @click="handleClick(product._id)" role="button">{{ product.name }}</h5>
                    <p class="card-text text-primary" @click="handleClick(product._id)" role="button">{{
                        formatCash(product.price) }} vnđ
                    </p>
                    <a href="#!" class="btn btn-success" @click="addCart(product)">Thêm vào giỏ</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card-product {
    width: 315px;
    margin: 5px 5px;
}
</style>