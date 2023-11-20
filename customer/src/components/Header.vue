<script setup>
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../stores/authStore';
import { useRoute } from 'vue-router';
import router from '../router/index';
import { useCartStore } from '../stores/cart.store';
const authStore = useAuthStore();
const route = useRoute();

const cartStore = useCartStore();

async function handleLogout() {
    await authStore.logout();
    if (route.meta.requireAuth) {
        router.push('/login');
    }
}
</script>
<template>
    <header class="p-3 mb-3 border-bottom header">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start row">
                <RouterLink to="/" class="logo_shop col-3"></RouterLink>

                <div class="col-9 row">
                    <div class="col-7"></div>
                    <form class="d-flex col-4 position-relative" role="search">
                        <input class="form-control me-2" type="search" placeholder="Từ khóa" aria-label="Search">
                        <i class="fas fa-search icon-search position-absolute"></i>
                    </form>
                    <RouterLink to="/cart" class="col-1 icon-cart ">
                        <i class="fas fa-shopping-cart position-relative">
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
                                style="font-size: 12px;">
                                {{ cartStore.numberOfProduct }}
                            </span>
                        </i>
                    </RouterLink>
                    <ul class="nav col-8 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <RouterLink class="nav-link text-white button-manager" to="/">
                            HOME
                        </RouterLink>
                        <RouterLink class="nav-link text-white button-manager" to="/products/COFFEE">
                            COFFEE
                        </RouterLink>
                        <RouterLink class="nav-link text-white button-manager" to="/products/TEA">
                            TEA
                        </RouterLink>
                        <RouterLink class="nav-link text-white button-manager" to="/products/FREEZE">
                            FREEZE
                        </RouterLink>
                    </ul>

                    <div class="dropdown text-end col-4 ">
                        <div class="login-register" v-if="!authStore.user">
                            <RouterLink class="btn btn-success m-1 p-2" to="/login">Đăng nhập</RouterLink>
                            <RouterLink class="btn btn-success m-1 p-2" to="/register">Đăng ký</RouterLink>
                        </div>
                        <div class="dropdown">
                            <div v-if="authStore.user" class="text-white user">Welcome {{
                                authStore.user.username }}
                                <button class="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                    aria-expanded="false" style="border: none; background-color: transparent;">
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item text-center" href="#">Thông
                                            tin</a>
                                    </li>
                                    <hr />
                                    <li><a class="dropdown-item text-center" href="#">Lịch sử đơn
                                            hàng</a></li>
                                    <hr />
                                    <li><a class="dropdown-item text-center" href="#" @click="handleLogout">Đăng
                                            xuất</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style scoped>
.header {
    background-color: #b22830;
    margin-bottom: 0 !important;
}

.button-manager {
    font-weight: 500;
    font-size: 16px;
    top: 47px;
    margin-left: 30px;
    left: 200px;
    height: 49px;
    padding-top: 5px;
    position: relative;
    padding-top: 12px;
}

.button-manager:hover {
    background-color: #333333;
}

.dropdown-toggle:empty::after {
    margin-left: 0;
    color: #fff;
}

.logo_shop {
    background: url('../assets/high_land_logo800.png') center center no-repeat;
    background-size: contain;
    text-decoration: none;
    background-color: transparent;
    width: 110px;
    height: 110px;
    margin-right: 5rem;
}

.login-register {
    margin-top: 30px;
}

.user {
    margin-top: 54px;
    font-size: 16px;
    font-weight: 500;
}

.icon-search {
    right: 31px;
    top: 9px;
    color: #ccc;
    cursor: pointer;
}

.icon-cart {
    color: #fff;
    font-size: 24px;
    cursor: pointer;
}
</style>