<template>
    <div>
        내정보 수정 페이지
        <div>
        <h1>내정보</h1>
        <form @submit.prevent="signup" >
            <input type="text" v-model="name" >
            <input type="text" v-model="phone" >
            <input type="text" v-model="email" >
            <input type="text" v-model="pass" >
            <input type="password" v-model="passcheck" placeholder="변경을 원하면 기존 비밀번호를 넣어주세요">
            <input type="text" v-model="address" >
            <button type="submit">수정하기</button>
        </form>
    </div>
    </div>
</template>

<script setup>
    // import
    import { ref ,onBeforeMount} from 'vue'
    import {useRoute} from 'vue-router'
    import { useNongGuInStore } from '@/stores/nongGuIn'
    const store = useNongGuInStore()
    const route = useRoute()
    //선언
    const name = ref('')
    const phone = ref('')
    const email = ref('')
    const pass = ref('')
    const address = ref('')


    //함수
    const signup = ()=>{
        const user ={
            userId:route.params.id,
            userPass:pass.value,
            userAddress:address.value,
            userPhone:phone.value
        }
        store.updateUser(user)
    }
    onBeforeMount( async() =>{
        await store.getUser(route.params.id)
        name.value = store.user.userName
        phone.value = store.user.userPhone
        email.value = store.user.userEmail
        pass.value = store.user.userPass
        address.value = store.user.userAddress
        
    })
</script>

<style scoped>

</style>