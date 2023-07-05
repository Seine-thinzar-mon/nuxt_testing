import { defineStore, acceptHMRUpdate } from "pinia";
import type { FormInstance, FormRules } from 'element-plus'
import { Users } from '../models/user.model'
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {

    /**
       State
    **/
    const loading = ref(false);
    const loginData = reactive<Users>({
        username: 'J-dea',
        password: 'J-dea@116',

    });
    const loginRules = reactive<FormRules<Users>>({
        username: [
            {
                required: true,
                message: 'Please enter username!',
                trigger: 'change'
            },
        ],
        password: [
            {
                required: true,
                message: 'Please enter password!',
                trigger: 'change',
            },
        ],

    })

    /**
       Functions
    **/
    const _handleLogin = async (formEl: FormInstance | undefined) => {
        if (!formEl) return
        await formEl.validate((valid, fields) => {
            if (valid) {
                loading.value = true;
                // call login api
                fetch('./data/users.json')
                    .then(res => res.json())
                    .then(data => {
                        loading.value = false;
                        const isLoginUserExist = data.some((v: Users) => v.username === loginData.username && v.password === loginData.password);
                        if (isLoginUserExist) {
                            ElMessage.success("Login Success!");
                            navigateTo('/home')
                        } else {
                            ElMessage.warning("Incorrect Username or Password!")
                        }
                    })
                    .catch(err => {
                        console.log('fetch err =>', err)
                    })
            } else {
                console.log('error submit!', fields)
            }
        })

    }

    return {
        loading,
        loginData,
        loginRules,
        _handleLogin,
    }


})
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}