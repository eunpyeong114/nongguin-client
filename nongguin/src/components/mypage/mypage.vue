<template>
    <div>
        {{ $route.params.id }}
        {{ store.user }}

        <div>
            <p>{{ store.user.userName}}님의 마이 페이지 </p>
            <button @click="goFriend">내정보 확인/수정</button>
            <button @click="goUpdate">친구 목록</button>
            <button @click="goMyMatch">나의 매치</button>
        </div>
    </div>
</template>

<script setup>
    import { watch,ref,onBeforeMount } from 'vue'
    import { useRouter,useRoute} from 'vue-router'
    import { useNongGuInStore } from '@/stores/nongGuIn'
    
    const router = useRouter()
    const route = useRoute()
    const store = useNongGuInStore()

    const goFriend =  function(){
        router.push({ name: 'mypageUpdate',params:{id:store.user.Userid}})
    }
    const goUpdate =  function(){
        router.push({ name: 'mypageFriend',params:{id:store.user.Userid}})
    }
    const goMyMatch =  function(){
        router.push({ name: 'mypageMatch',params:{id:store.user.Userid}})
    }

    onBeforeMount( async() =>{
        await store.getUser(route.params.id)
    })
    
</script>

<style scoped>
    
</style>