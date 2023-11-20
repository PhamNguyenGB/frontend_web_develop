<script setup>
import { RouterLink } from 'vue-router';
import { ref, reactive } from 'vue';
import { useAuthStore } from "../stores/authStore";
import router from "../router";

const authStore = useAuthStore();

const userLogin = reactive({
    username: null,
    password: null,
});

async function onSubmit() {
    try {
        await authStore.login(userLogin);
        alert("Đăng nhập thành công");
    } catch (error) {
        alert("Đăng nhập thất bại");
        console.log(error);
    }
}

</script>
<template>
    <div class="container">
        <div class="d-flex justify-content-center h-100">
            <div class="card">
                <div class="card-header">
                    <h3>Đăng nhập</h3>
                    <div class="d-flex justify-content-end social_icon">
                        <span><i class="fab fa-facebook-square"></i></span>
                        <span><i class="fab fa-google-plus-square"></i></span>
                        <span><i class="fab fa-twitter-square"></i></span>
                    </div>
                </div>
                <div class="card-body">
                    <form @submit.prevent="onSubmit">
                        <div class="input-group form-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="username" v-model="userLogin.username">

                        </div>
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-key"></i></span>
                            </div>
                            <input type="password" class="form-control" placeholder="password" v-model="userLogin.password">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn float-rigt login_btn">Đăng nhập</button>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-center links">
                        Bạn chưa có tài khoản?<RouterLink to="/register">Đăng ký</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
    height: 100%;
    align-content: center;
    margin-top: 150px;
    min-height: 550px;
}

.card {
    height: 330px;
    margin-top: auto;
    margin-bottom: auto;
    width: 400px;
    background-color: rgba(0, 0, 0, 0.5) !important;
}

.social_icon span {
    font-size: 60px;
    margin-left: 10px;
    color: #b22830;
}

.social_icon span:hover {
    color: #ccc;
    cursor: pointer;
}

.card-header h3 {
    color: white;
}

.social_icon {
    position: absolute;
    right: 20px;
    top: -45px;
}

.input-group-prepend span {
    width: 50px;
    background-color: #b22830;
    padding: 10px 0;
    justify-content: center;
    color: black;
    border: 0 !important;
}

input:focus {
    outline: 0 0 0 0 !important;
    box-shadow: 0 0 0 0 !important;

}

.remember input {
    width: 20px;
    height: 20px;
    margin-left: 15px;
    margin-right: 5px;
}

.login_btn {
    color: black;
    background-color: #198754;
    width: 120px;
    margin-top: 20px;
    color: #fff;
}

.login_btn:hover {
    color: black;
    background-color: white;
}

.links {
    color: white;
}

.links a {
    margin-left: 4px;
}
</style>