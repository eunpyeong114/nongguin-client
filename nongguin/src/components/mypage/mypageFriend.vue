<template>
    <div>친구페이지</div>


    <div>  
        <h1>친구 신청하기</h1>
        <input v-model="reqEmail" :placeholder="`신청할 친구의 이메일`">
        <button>신청</button>
        <h1>친구 신청 목록</h1>
        <div v-for="friend in store.friendReqList">
            <div>{{ friend.userName }}</div>
            <button>수락</button>
            <button>거절</button>
        </div>
        <h1>내 친구</h1>
        <div v-for="friend in store.friendList">
            <div>{{ friend.userName }}</div>
            <button>친구가 신청한 매치 보기</button>
        </div>
    </div>
</template>

<script setup>
    import { watch,ref, onMounted } from 'vue'
    import { useRouter ,useRoute} from 'vue-router'
    import { useNongGuInStore } from '@/stores/nongGuIn'
    const reqEmail = ref('')
    const store = useNongGuInStore()
    const router = useRouter()
    const route =useRoute()
    
    onMounted(async () => {
        await store.getFriendList(route.params.id)
        await store.getFriendReqList(route.params.id)
            
    })
</script>

<style scoped>

</style>