<script setup>
import { RouterLink } from 'vue-router';
// const app = new Vue({
//     el: '#header',
//     data: {
//         active: active,
//         isActive: false,
//     },
//     methods: {
//         changeActive() {
//             this.isActive == true;
//         }

//     },
// })

</script>
<template>
    <header class="p-3 mb-3 border-bottom header">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <div class="logo_shop"></div>

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <RouterLink class="nav-link" to="/products">
                        <li class="nav-link px-2 text-white button-manager">QL. SẢN PHẨM</li>
                    </RouterLink>
                    <RouterLink class="nav-link" to="/orders">
                        <li class="nav-link px-2 text-white button-manager">QL. ĐƠN HÀNG</li>
                    </RouterLink>
                    <RouterLink class="nav-link" to="#">
                        <li class="nav-link px-2 text-white button-manager">QL. KHÁCH HÀNG</li>
                    </RouterLink>
                    <RouterLink class="nav-link" to="#">
                        <li class="nav-link px-2 text-white button-manager">QL. LỢI NHUẬN</li>
                    </RouterLink>
                </ul>

                <div class="dropdown text-end">
                    <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
                    </a>
                    <ul class="dropdown-menu text-small">
                        <li>
                            <RouterLink class="dropdown-item" to="/profile">Thông tin</RouterLink>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Đăng xuất</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<style scoped>
.header {
    background-color: #b22830;
}

.button-manager:hover {
    background-color: #333333;
}

.active {
    background-color: #333333;
}

.logo_shop {
    background: url('../assets/high_land_logo800.png') center center no-repeat;
    background-size: contain;
    text-decoration: none;
    background-color: transparent;
    width: 80px;
    height: 80px;
    margin-right: 5rem;
}
</style>