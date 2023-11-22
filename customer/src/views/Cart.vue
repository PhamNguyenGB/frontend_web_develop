<script setup>
import { ref } from "vue";
import { useCartStore } from '../stores/cart.store';
import userService from "../services/user.service";
import numeral from 'numeral';
import orderService from '../services/order.service';

const cartStore = useCartStore();

function addOne(productId) {
    cartStore.addProduct(productId, 1)
}

function subOne(productId) {
    cartStore.addProduct(productId, -1)
}

function deleteProduct(productId) {
    cartStore.deleteProduct(productId)
}

function formatCash(price) {
    return numeral(price).format('0,0');
}

async function handlePay(product) {
    // console.log(product);
    try {
        await orderService.addOrder({
            orderDetail: product,
        })
        alert("Đặt hàng thành công")
        cartStore.clear();
    } catch (err) {
        console.log(err);
        alert("Đặt hàng không thành công")
    }
} 
</script>
<template>
    <section class="h-100 gradient-custom" style="min-height: 700px;">
        <div class="container py-5">
            <div class="row d-flex justify-content-center my-4">
                <div class="col-md-8">
                    <div class="card mb-4">
                        <div class="card-header py-3">
                            <h5 class="mb-0">Cart - {{ cartStore.numberOfProduct }} items</h5>
                        </div>
                        <div class="card-body" v-for="product in cartStore.cart">
                            <!-- Single item -->
                            <div class="row">
                                <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                    <!-- Image -->
                                    <div class="bg-image hover-overlay hover-zoom ripple rounded"
                                        data-mdb-ripple-color="light">
                                        <img v-bind:src="product.image_url" class="w-100" alt="Blue Jeans Jacket" />
                                        <a href="#!">
                                            <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                                        </a>
                                    </div>
                                    <!-- Image -->
                                </div>

                                <div class="col-lg-5 col-md-6 mb-4 mb-lg-0 mt-5">
                                    <!-- Data -->
                                    <p><strong>{{ product.name }}</strong></p>
                                    <button type="button" class="btn btn-danger btn-sm me-1 mb-2 mt-5"
                                        data-mdb-toggle="tooltip" title="Remove item" @click="deleteProduct(product._id)">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                    <!-- Data -->
                                </div>

                                <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                    <!-- Quantity -->
                                    <div class="d-flex mb-4 mt-5" style="max-width: 300px">
                                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                            <button type="button" class="btn btn-success"
                                                @click="subOne(product)">-</button>
                                            <button type="button" class="btn">{{ product.quantity }}</button>
                                            <button type="button" class="btn btn-success"
                                                @click="addOne(product)">+</button>
                                        </div>

                                        <!-- Price -->
                                        <p class=" text-md-center m-1">
                                            <strong class="m-3">{{ formatCash(product.price * product.quantity) }}</strong>
                                        </p>
                                        <!-- Price -->

                                    </div>
                                    <!-- Quantity -->

                                </div>
                            </div>
                            <!-- Single item -->
                            <hr class="my-4" />

                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-header py-3">
                            <h5 class="mb-0">Thanh toán</h5>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li
                                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                    Tạm tính
                                    <span>{{ formatCash(cartStore.total) }}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                    Phí ship
                                    <span>30.000</span>
                                </li>
                                <li
                                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                    <div>
                                        <strong>Tổng tiền</strong>
                                    </div>
                                    <span><strong>{{ formatCash(cartStore.total + 30000) }}</strong></span>
                                </li>
                            </ul>

                            <button type="button" class="btn btn-primary btn-lg btn-block"
                                @click="handlePay(cartStore.cart)">
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>