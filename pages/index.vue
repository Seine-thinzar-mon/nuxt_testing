<template>
    <div
        class="flex h-screen w-screen items-center justify-center bg-[url('https://i.pinimg.com/564x/25/51/d3/2551d34cf32210d87ead830ed4225f00.jpg')] bg-center bg-cover bg-rotate-90">
        <div
            class="rounded-md bg-white bg-opacity-20 p-[30px] text-gray-100 drop-shadow-md w-4/5 sm:w-2/4 md:w-2/4 lg:w-2/5 xl:w-1/4 max-w-[420px]">
            <div class="text-center text-[24px] font-bold">Login to Yummy</div>
            <el-form ref="loginFormRef" :model="loginData" :rules="loginRules" class="demo-loginData mt-2" 
                status-icon>
                <el-form-item prop="username">
                    <label class="text-[16px]">Username</label>
                    <el-input size="large" class="" v-model="loginData.username" placeholder="Username" />
                </el-form-item>
                <el-form-item prop="password">
                    <label class="text-[16px]">Password</label>
                    <el-input size="large" type="password" show-password v-model="loginData.password" placeholder="Password" />
                </el-form-item>
                <el-form-item class="">
                    <div class="underline ms-2 text-right w-full text-[12px] text-gray-300 cursor-pointer hover:text-white">Forgot Password?</div>
                </el-form-item>
                <el-form-item>
                    <el-button size="large" class="w-full" type="primary" @click="_handleLogin(loginFormRef)" :loading="loading">
                        <div class="text-[16px]">Login</div>
                    </el-button>
                    <div class="w-full text-center underline text-gray-300 hover:text-white cursor-pointer">Register Account</div>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { useUserStore } from '@/stores/user'

const loginFormRef = ref<FormInstance>();
const {  loginData, loginRules, _handleLogin } = useUserStore();

const loading = computed(() => {
  return useUserStore().loading;
});

</script>
  
<style>
.el-input__wrapper {
    background-color: transparent !important;
    box-shadow: 0 0 0 0.5px var(--el-input-border-color, var(--el-border-color)) inset !important;
}

.el-form-item--default .el-form-item__content {
    line-height: 25px !important;
}

.el-input__inner {
    color: #f3f4f6 !important;
}

.el-form-item--feedback .el-input__validateIcon {
    display: none !important;
}
.el-form-item{
    margin-bottom: 10px ;
}
</style>