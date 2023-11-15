<template>
    <div>
        <h1>회원가입</h1>
        <form @submit.prevent="signup" >
            <input type="text" v-model="name" placeholder="이름">
            <input type="text" v-model="phone" placeholder="전화번호">
            <input type="password" v-model="certificationNumber" placeholder="인증번호">
            <input type="text" v-model="email" placeholder="이메일">
            <input type="password" v-model="pass" placeholder="비밀번호">
            <input type="password" v-model="passCheck" placeholder="비밀번호 확인">
            <select v-model="gender">
                <option value="m">남성</option>
                <option value="fm">여성</option>
            </select>
            <input type="text" v-model="address" placeholder="주소">
            <button type="submit">회원가입</button>
        </form>
    </div>
</template>

<script setup>
    // import
    import { ref } from 'vue'
    import {useRouter} from 'vue-router'
    import { useNongGuInStore } from '@/stores/nongGuIn'
    const store = useNongGuInStore()
    //선언
    const name = ref('')
    const phone = ref('')
    const certificationNumber = ref('')
    const email = ref('')
    const pass = ref('')
    const passCheck = ref('')
    const gender = ref('')
    const address = ref('')
    const router = useRouter()


    //함수
    const signup = ()=>{
        const user ={
            userName:name.value,
            userEmail:email.value,
            userPass:pass.value,
            userGender:gender.value,
            userAddress:address.value,
            userPhone:phone.value
        }
        store.signup(user)
    }



</script>

<style scoped>

</style>