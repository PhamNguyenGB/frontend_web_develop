<script setup>
import { RouterLink } from 'vue-router';

function onSubmit() {
    console.log(data);
}
</script>
<template>
    <div class="contaier">
        <RouterLink class="btn btn-success" to="/products">Trở về</RouterLink>
        <form class="row form-add-product" @submit.prevent="onSubmit">
            <h4 class="text-center mb-3">BẢNG THÊM SẢN PHẨM</h4>
            <div class="mb-3 col-6">
                <label for="" class="form-label">Tên sản phẩm:</label>
                <input type="text" class="form-control" id="" aria-describedby="">
            </div>
            <div class="mb-3 col-6">
                <label for="" class="form-label">Giá:</label>
                <input type="text" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 col-6">
                <label for="" class="form-label">Loại:</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="COFFEE">Coffee</option>
                    <option value="TEE">Tea</option>
                    <option value="FREEZE">Freeze</option>
                </select>
            </div>
            <div class="mb-3 col-6">
                <form encType="multipart/form-data">
                    <div className=' form-group col-6'>
                        <label>image:</label>
                        <input type='file' name='img' />
                    </div>
                    <div className='col-1 check-image'>
                        <img />
                    </div>
                </form>
            </div>
            <div class="mb-3 col-12">
                <label for="" class="form-label">Mô tả:</label>
                <input type="text" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-primary m-2 p-2 col-1">Lưu</button>
            <RouterLink type=" submit" class="btn btn-secondary m-2 p-2 col-1" to="/products">Hủy</RouterLink>
        </form>
    </div>
</template>

<style scoped>
.form-add-product {
    border: 2px solid #ccc;
    padding: 20px;
    box-shadow: 5px 5px 5px #ccc;
    margin-top: 50px;

}

.check-image {
    margin-top: 10px;
    border: 1px solid #ccc;
    width: 100px;
    height: 100px;
}
</style>