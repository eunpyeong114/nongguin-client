<template>
    <div>
        <div v-for="match in store.myMatchList" :key="match.id">
               매치아이디 {{match.matchId}}매치 날짜{{ match.matchDate }} {{ match.court }} {{ match.matchGender }} 최대 인원{{match.courtCapacity  }} 레벨{{ match.matchLevel }}
        <button @click="cancleMatch(match.matchId)">취소</button>
        </div>
    </div>
</template>

<script setup>
    import { watch,ref, onMounted } from 'vue'
    import { useRouter ,useRoute} from 'vue-router'
    import { useNongGuInStore } from '@/stores/nongGuIn'

    const store = useNongGuInStore()
    const router = useRouter()
    const route =useRoute()
    const cancleMatch=function(){

    }
    onMounted(async () => {
        await store.getMyMatchList(route.params.id)
    })
</script>

<style scoped>

</style>