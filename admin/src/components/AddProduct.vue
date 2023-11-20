<script setup>
import { RouterLink } from 'vue-router';
import { ref, reactive } from 'vue';
import ProductService from '../services/product.service';

const productService = new ProductService();

const changeImage = ref('');
const product = reactive({
    name: null,
    price: null,
    type: null,
    image: null,
    description: null,
})

function handleChangeImage(event) {
    let file = event.target.files[0];
    product.image = file;
    if (file) {
        let objectUrl = URL.createObjectURL(file);
        changeImage.value = objectUrl;
    }
}

async function onSubmit() {
    if (product.name === null || product.price === null || product.type === null || product.image === null) {
        alert('Bạn chưa nhập đày đủ thông tin');
        return;
    }
    let response = await productService.addProduct(product);
    console.log(response);
    if (response && response.EC === 0) {
        alert(response.EM);
    } else {
        alert(response.EM);
    }
}
</script>
<template>
    <div class="contaier">
        <RouterLink class="btn btn-success" to="/products">Trở về</RouterLink>
        <form class="row form-add-product" @submit.prevent="onSubmit" encType="multipart/form-data">
            <h4 class="text-center mb-3">BẢNG THÊM SẢN PHẨM</h4>
            <div class="mb-3 col-6">
                <label for="" class="form-label">Tên sản phẩm:</label>
                <input type="text" class="form-control" id="" aria-describedby="" v-model="product.name">
            </div>
            <div class="mb-3 col-6">
                <label for="" class="form-label">Giá:</label>
                <input type="text" class="form-control" id="exampleInputPassword1" v-model="product.price">
            </div>
            <div class="mb-3 col-6">
                <label for="" class="form-label">Loại:</label>
                <select class="form-select" aria-label="Default select example" v-model="product.type">
                    <option selected>Open this select menu</option>
                    <option value="COFFEE">Coffee</option>
                    <option value="TEA">Tea</option>
                    <option value="FREEZE">Freeze</option>
                </select>
            </div>
            <div class="mb-3 col-6">
                <div className=' form-group col-6'>
                    <label>image:</label>
                    <input type='file' name='image' accept="image/*" @change="handleChangeImage($event)" />
                </div>
                <div className='col-1 check-image'>
                    <img :src="changeImage" style="height: 100px;" />
                </div>
            </div>
            <div class="mb-3 col-12">
                <label for="" class="form-label">Mô tả:</label>
                <input type="text" class="form-control" id="exampleInputPassword1" v-model="product.description">
            </div>
            <button type="submit" class="btn btn-primary m-2 p-2 col-1">Lưu</button>
            <RouterLink class="btn btn-secondary m-2 p-2 col-1" to="/products">Hủy</RouterLink>
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