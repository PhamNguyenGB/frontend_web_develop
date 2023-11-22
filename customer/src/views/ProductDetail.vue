<script setup>
import productService from '../services/product.service';
import { ref, reactive, defineProps, onBeforeMount, watch, defineEmits } from 'vue';
import numeral from 'numeral';
import router from '../router';
import { useCartStore } from "../stores/cart.store";

const cartStore = useCartStore();
let quantity = ref(1);

const emits = defineEmits(['addOne', 'subOne', 'deleteProduct'])

const props = defineProps(['id']);
const product = ref('');

async function getOneProduct() {
    try {
        product.value = (await productService.findOneProduct(props.id)).DT;
        console.log(product);
    } catch (error) {
        console.log(error);
    }
}

function formatCash(price) {
    return numeral(price).format('0,0');
}

function increase() {
    quantity.value += 1;
}

function decrease() {
    if (quantity.value < 2) {
        quantity.value = 1;
    } else {
        quantity.value -= 1;
    }
}

onBeforeMount(async () => {
    await getOneProduct();
});

watch(props, () => {
    getOneProduct();
})

function addCart(product) {
    console.log(product);
    cartStore.addProduct(
        product
        , quantity.value)
}
</script>

<template>
    <div class="container mt-5 mb-5">
        <div class="row d-flex justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="images p-3">
                                <div class="text-center p-4"> <img id="main-image" v-bind:src="product.image_url"
                                        width="250" /> </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="product p-4">
                                <div class="mt-4 mb-3">
                                    <h5 class="text-uppercase">{{ product.name }}</h5>
                                    <div class="price d-flex flex-row align-items-center"> <span class="act-price">{{
                                        formatCash(product.price) }} vnđ</span>
                                    </div>
                                </div>
                                <p class="about">{{ product.description }}</p>
                                <div class="sizes mt-5">
                                    <h6 class="text-uppercase">Số lượng: </h6>
                                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" class="btn btn-success" @click="decrease">-</button>
                                        <button type="button" class="btn">{{ quantity }}</button>
                                        <button type="button" class="btn btn-success" @click="increase">+</button>
                                    </div>
                                </div>
                                <div class="cart mt-4 align-items-center"> <button
                                        class="btn btn-success text-uppercase mr-2 px-4" @click="addCart(product)">Thêm vào
                                        giỏ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
body {
    background-color: #000
}

.card {
    border: none
}

.product {
    background-color: #eee
}

.brand {
    font-size: 13px
}

.act-price {
    color: red;
    font-weight: 700
}

.dis-price {
    text-decoration: line-through
}

.about {
    font-size: 14px
}

.color {
    margin-bottom: 10px
}

label.radio {
    cursor: pointer
}

label.radio input {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    pointer-events: none
}

label.radio span {
    padding: 2px 9px;
    border: 2px solid #ff0000;
    display: inline-block;
    color: #ff0000;
    border-radius: 3px;
    text-transform: uppercase
}

label.radio input:checked+span {
    border-color: #ff0000;
    background-color: #ff0000;
    color: #fff
}

.btn-danger {
    background-color: #ff0000 !important;
    border-color: #ff0000 !important
}

.btn-danger:hover {
    background-color: #da0606 !important;
    border-color: #da0606 !important
}

.btn-danger:focus {
    box-shadow: none
}

.cart i {
    margin-right: 10px
}
</style>