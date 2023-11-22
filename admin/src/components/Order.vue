<script setup>
import OrderService from '../services/order.service';
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import { RouterLink } from 'vue-router';

const orderService = new OrderService();
const orders = ref();

async function fetchAllOrders() {
    try {
        orders.value = (await orderService.fetchAllOrders());
    } catch (error) {
        console.log(error);
    }
}

async function handleStatus(orderId) {
    let response = await orderService.updateOrderStatus(orderId);
    if (response) {
        alert('updated order status');
    }
}

onBeforeMount(async () => {
    await fetchAllOrders();
});


</script>
<template>
    <div class="container">
        <h3 class="mt-3">Bảng Sản phẩm</h3>
        <table class="table table-hover mt-5">
            <thead>
                <tr>
                    <th scope="col">ID user</th>
                    <th scope="col">Ngày đặt hàng</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody v-for="order in  orders ">
                <tr>
                    <td class="button-action">{{ order.userId }}</td>
                    <td class="button-action">{{ order.orderDate }}</td>
                    <td class="button-action">
                        <div v-if="order.orderStatus === false">Đang đợi xác nhận</div>
                        <div v-else="">Đã xác nhận</div>
                    </td>
                    <td class="button-action">
                        <RouterLink class="btn btn-primary  mb-3 " :to="'/orders/detail/' + order._id">Xem chi tiết
                        </RouterLink>
                        <div v-if="order.orderStatus === false" class="btn btn-danger mb-3" style="margin-left: 10px;"
                            @click="handleStatus(order._id)">
                            Xác nhận</div>
                        <div v-else="" class=""></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
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