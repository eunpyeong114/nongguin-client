<template>
    <div id="main">
        <form @submit.prevent="signIn" >
            <input type="text" :id="id" placeholder="아이디">
            <input type="password" :id="password" placeholder="비밀번호">
            <button type="submit">로그인</button>
        </form>
        <a @click="goSignUp">회원가입</a>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import {useRouter} from 'vue-router'
    const id = ref('')
    const password = ref('')
    const router = useRouter()
    const signIn = ()=>{
        router.push('/user/completesignin')
    }
    const goSignUp= ()=>{
        router.push('/user/signup')
    }
</script>

<style scoped>
    #main{
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 60%;
    }
</style>