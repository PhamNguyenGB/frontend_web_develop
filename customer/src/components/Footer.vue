<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
    <div class="footer">
        <div class="container">
            <span class="icon-content">
                <i class="fab fa-facebook-f icon p-2"></i>
                <i class="fab fa-youtube icon"></i>
                <i class="fab fa-instagram icon"></i>
            </span>
            <span class="text-white year-coffee margin-left-50">
                &copy; 2018 Highlands Coffee. All rights reserved
            </span>
            <span>
                <Router-link to="#" class="text-white res-info margin-left-50"><i class="fas fa-paper-plane"></i> Đăng ký để
                    nhận bản
                    tin</Router-link>>
            </span>
            <span>
                <Router-link to="#" class="text-white foo-email margin-left-50"><i class="fas fa-envelope"></i>
                    customerservice@highlandscoffee.com.vn
                    tin</Router-link>>
            </span>
        </div>
    </div>
</template>

<style scoped>
.footer {
    background-color: #53382c;
    padding: 10px;
}

.margin-left-50 {
    margin-left: 50px;
}

.icon {
    background-color: #fff;
    color: #53382c;
    padding: 7px;
    margin: 10px;
    cursor: pointer;
}

.foo-email,
.res-info {
    text-decoration: none;
}
</style>