<script setup>
import { ref, reactive } from 'vue';
import router from '../router';
import AuthService from '../services/auth.service';
const authService = new AuthService();

const staffname = ref('');
const password = ref('');
const messageErr = ref('');

async function submit() {
    const response = await authService.login(staffname.value, password.value);
    if (response && response.EC === 0) {
        router.push('/products');
        console.log(response);
    }
    messageErr.value = response.EM;
}

</script>
<template>
    <!-- Section: Design Block -->

    <section class="mt-5">
        <!-- Jumbotron -->
        <div class="px-4 py-5 px-md-5 text-center text-lg-start">
            <div class=" container">
                <div class="row gx-lg-5 align-items-center">
                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <h1 class="my-5 display-3 fw-bold ls-tight text-danger">
                            High Lands <br />
                            <span class="text-success">for staff login</span>
                        </h1>
                    </div>

                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <div class="text-danger text-center">{{ messageErr }}</div>
                        <div class="card">
                            <div class="card-body py-5 px-md-5">

                                <form @submit.prevent="submit">

                                    <!-- Email input -->
                                    <div class="form-outline mb-4">
                                        <input v-model="staffname" type="staffname" id="staffname" class="form-control" />
                                        <label class="form-label" for="staffname">Staff Name</label>
                                    </div>

                                    <!-- Password input -->
                                    <div class="form-outline mb-4">
                                        <input v-model="password" type="password" id="password" class="form-control" />
                                        <label class="form-label" for="password">Password</label>
                                    </div>
                                    <!-- Submit button -->
                                    <button type="submit" class="btn btn-success btn-block mb-4">
                                        Sign up
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Jumbotron -->
    </section>
    <!-- Section: Design Block -->
</template>
