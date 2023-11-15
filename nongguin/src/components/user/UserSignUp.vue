<template>
    <div>
        <h1>회원가입</h1>
        <form @submit.prevent="signUp" >
            <input type="text" v-model="userId" placeholder="아이디">
            <input type="text" v-model="userPhone" placeholder="전화번호">
            <input type="password" v-model="certificationNumber" placeholder="인증번호">
            <input type="text" v-model="userEmail" placeholder="이메일">
            <input type="password" v-model="userPass" placeholder="비밀번호">
            <input type="password" v-model="userPassCheck" placeholder="비밀번호 확인">
            <select v-model="userGender">
                <option value="m">남성</option>
                <option value="fm">여성</option>
            </select>
            <input type="text" v-model="userAddress" placeholder="주소">
            <button type="submit">회원가입</button>
        </form>
    </div>
</template>

<script setup>
    // import
    import { ref } from 'vue'
    import {useRouter} from 'vue-router'

    //선언
    const userId = ref('')
    const userPhone = ref('')
    const certificationNumber = ref('')
    const userEmail = ref('')
    const userPass = ref('')
    const userPassCheck = ref('')
    const userGender = ref('')
    const userAddress = ref('')
    const router = useRouter()

    //함수
    const signUp = ()=>{
        router.push('/user/completesignup')
    }



</script>

<style scoped>

</style>