<template>
    <div id="main">
        <form @submit.prevent="signIn" >
            <input type="text" v-model="email" placeholder="email">
            <input type="password" v-model="password" placeholder="비밀번호">
            <button type="submit">로그인</button>
        </form>
        <a @click="goSignUp">회원가입</a>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import {useRouter} from 'vue-router'
    import { useNongGuInStore } from '@/stores/nongGuIn'
    const store = useNongGuInStore()
    const email = ref('')
    const password = ref('')
    const router = useRouter()
    
    
    const signIn = ()=>{
        let user = {
            userEmail:email.value,
            userPass:password.value
        }
        store.signin(user)
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