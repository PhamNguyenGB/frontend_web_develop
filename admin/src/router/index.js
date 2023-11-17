import { useAttrs } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import Admin from "@/views/admin.vue";
import Profile from "../components/Profile.vue";
import AllProducts from "../components/AllProducts.vue";
import AddProduct from "../components/AddProduct.vue";
import EditProduct from "../components/EditProduct.vue";
import LoginAdmin from "../components/Login.vue";

const routes = [
    {
        path: '/',
        name: 'Admin',
        component: Admin,
        meta: {
            requireAuth: true,
        },
        redirect: { path: "/profile" },
        children: [
            {
                path: '/profile',
                component: Profile
            },
            {
                path: "/products",
                component: AllProducts,
            },
            {
                path: "/products/add",
                component: AddProduct
            },
            {
                path: "/products/edit/:id",
                component: EditProduct,
                props: true,
            }

        ]
    },
    {
        path: "/login",
        name: "login",
        component: LoginAdmin,
        meta: {
            requireAuth: false,
        }
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

// router.beforeEach(async (to) => {
//     const authStore = useAuthStore(

//     );
// })

export default router;