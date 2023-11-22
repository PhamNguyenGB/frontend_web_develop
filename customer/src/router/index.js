import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/home.vue";
import Products from "../views/products.vue";
import TypeProduct from "../views/typeProduct.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ProductDetail from "../views/ProductDetail.vue";
import Cart from "../views/Cart.vue";
import HistoryOrder from "../views/HistoryOrder.vue";
import HistoryOrderDetail from "../views/HistoryOrderDetail.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            requireAuth: false
        },
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            requireAuth: false
        },
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            requireAuth: false
        },
        component: Register
    },
    {
        path: '/products',
        name: 'Products',
        meta: {
            requireAuth: false
        },
        component: Products,
        children: [
            {
                path: '/products/:type',
                name: 'TypeProduct',
                meta: {
                    requireAuth: false
                },
                props: true,
                component: TypeProduct,
            },
            {
                path: '/products/detail/:id',
                name: 'ProductDetail',
                meta: {
                    requireAuth: false
                },
                props: true,
                component: ProductDetail,
            }
        ]
    },
    {
        path: '/cart',
        name: 'Cart',
        meta: {
            requireAuth: true
        },
        component: Cart
    },
    {
        path: '/history',
        name: 'HistoryOrder',
        meta: {
            requireAuth: true
        },
        component: HistoryOrder
    },
    {
        path: '/history/detail/:id',
        name: 'HistoryOrderDetail',
        meta: {
            requireAuth: true
        },
        component: HistoryOrderDetail
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;