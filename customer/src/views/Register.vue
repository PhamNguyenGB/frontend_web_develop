<script setup>
import { RouterLink } from 'vue-router';
import { ref, reactive } from 'vue';
import userService from "../services/user.service";
import router from "../router";

const userData = reactive({
    username: null,
    fullname: null,
    password: null,
    address: null,
    phone: null,
});


async function onSubmit() {
    console.log(userData);
    let response = await userService.register(userData);
    if (response && response.EC === 0) {
        alert(response.EM);
        router.push('/login');
    } else {
        alert(response.EM);
    }
}
</script>
<template>
    <div class="container">
        <!---heading---->
        <header class="heading"> Đăng ký tài khoản</header>
        <hr />
        <form @submit.prevent="onSubmit">
            <!---Form starting---->
            <div class="row ">
                <!--- For Name---->
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-xs-4">
                            <label class="firstname">Tên đăng nhập :</label>
                        </div>
                        <div class="col-xs-8">
                            <input type="text" name="username" id="username" placeholder="Nhập vào tên đăng nhập"
                                class="form-control " v-model="userData.username">
                        </div>
                    </div>
                </div>


                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-xs-4">
                            <label class="lastname">Họ và tên :</label>
                        </div>
                        <div class="col-xs-8">
                            <input type="text" name="fullname" id="fullname" placeholder="Nhập vào họ và tên"
                                class="form-control last" v-model="userData.fullname">
                        </div>
                    </div>
                </div>
                <!-----For email---->
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-xs-4">
                            <label class="mail">Địa chỉ :</label>
                        </div>
                        <div class="col-xs-8">
                            <input type="text" name="address" id="address" placeholder="Nhập vào địa chỉ"
                                class="form-control" v-model="userData.address">
                        </div>
                    </div>
                </div>
                <!-----For Password and confirm password---->
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-xs-4">
                            <label class="pass">Mật khẩu :</label>
                        </div>
                        <div class="col-xs-8">
                            <input type="password" name="password" id="password" placeholder="Nhập vào mật khẩu"
                                class="form-control" v-model="userData.password">
                        </div>
                    </div>
                </div>

                <!-----------For Phone number-------->
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-xs-4">
                            <label class="mail">Số điện thoại :</label>
                        </div>
                        <div class="col-xs-8">
                            <input type="text" name="phone" id="phone" placeholder="Nhập vào số điện thoại"
                                class="form-control" v-model="userData.phone">
                        </div>
                    </div>
                </div>

                <div class="col-sm-12 mt-5">
                    <div class="row">
                        <div class="col-sm-12">
                            <button type="submit" class="btn btn-warning">Đăng ký</button>
                        </div>
                    </div>
                </div>


            </div>

        </form>
    </div>
</template>

<style scoped>
/*-----for border----*/
.container {
    font-family: Roboto, sans-serif;
    background-image: url(https://image.freepik.com/free-vector/dark-blue-blurred-background_1034-589.jpg);

    border-style: 1px solid grey;
    margin: 0 auto;
    text-align: center;
    opacity: 0.8;
    margin-top: 67px;
    box-shadow: 2px 5px 5px 0px #eee;
    max-width: 500px;
    padding-top: 10px;
    height: 600px;
    margin-top: 100px;
    margin-bottom: 50px;
}

/*--- for label of first and last name---*/
.lastname {
    margin-left: 1px;
    font-family: sans-serif;
    font-size: 14px;
    color: white;
    margin-top: 10px;
}

.firstname {
    margin-left: 1px;
    font-family: sans-serif;
    font-size: 14px;
    color: white;
    margin-top: 5px;
}

#lname {
    margin-top: 5px;
}


/*---for heading-----*/
.heading {
    text-decoration: bold;
    text-align: center;
    font-size: 30px;
    color: #F96;
    padding-top: 10px;
}

/*-------for email----------*/
/*------label----*/
#email {
    margin-top: 5px;
}

/*-----------for Password--------*/
/*-------label-----*/
.mail {
    margin-left: 44px;
    font-family: sans-serif;
    color: white;
    font-size: 14px;
    margin-top: 13px;
}

.pass {
    color: white;
    margin-top: 9px;
    font-size: 14px;
    font-family: sans-serif;
    margin-left: 6px;
    margin-top: 9px;
}

#password {
    margin-top: 6px;
}

/*------------for phone Number--------*/
/*----------label--------*/
.pno {
    font-size: 18px;
    margin-left: -13px;
    margin-top: 10px;
    color: #ff9;

}

/*--------------for Gender---------------*/
/*--------------label---------*/
.gender {
    color: white;
    font-family: sans-serif;
    font-size: 14px;
    margin-left: 28px;
    margin-top: 8px;
}

/*---------- for Input type--------*/
.col-xs-4.male {
    color: white;
    font-size: 13px;
    margin-top: 9px;
    padding-bottom: 16px;
}

.col-xs-4.female {
    color: white;
    font-size: 13px;
    margin-top: 9px;
    padding-bottom: 16px;
    padding-right: 95px;
}

/*------------For submit button---------*/
.sbutton {
    color: white;
    font-size: 20px;
    border: 1px solid white;
    background-color: #080808;
    width: 32%;
    margin-left: 41%;
    margin-top: 16px;
    box-shadow: 0px 2px 2px 0px white;

}

.btn.btn-warning:hover {
    box-shadow: 2px 1px 2px 3px #99ccff;
    background: #5900a6;
    color: #fff;
    transition: background-color 1.15s ease-in-out, border-color 1.15s ease-in-out, box-shadow 1.15s ease-in-out;

}
</style>