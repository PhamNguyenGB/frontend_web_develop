<script setup>
import orderService from "../services/order.service";
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import { RouterLink } from 'vue-router';


const orders = ref();

async function fetchAllOrders() {
    try {
        orders.value = (await orderService.getOrder());
        console.log(orders.value);
    } catch (error) {
        console.log(error);
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
                    <th scope="col">ID order</th>
                    <th scope="col">Ngày đặt hàng</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody v-for="order in orders">
                <tr>
                    <td class="button-action">{{ order._id }}</td>
                    <td class="button-action">{{ order.orderDate }}</td>
                    <td class="button-action">
                        <div v-if="order.orderStatus === true">Đã xác nhận</div>
                        <div v-else>Đợi xác nhận</div>
                    </td>
                    <td class="button-action">
                        <RouterLink class="btn btn-primary  mb-3 " :to="'/history/detail/' + order._id">Xem chi tiết
                        </RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.container {
    min-height: 700px;
}

.image-admin {
    width: 100px;
    height: 100px;
}

.button-action {
    padding-top: 30px;
}
</style>