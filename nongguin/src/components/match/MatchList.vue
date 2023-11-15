<template>
    <div>
        <div>
            <VCalendar v-model="select" @dayclick="show"></VCalendar>
            <div v-for="match in matchList" :key="match.ids">
                <p>매치</p>
                <button @click="detailMatch(id)">신청</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    // import
    import { ref } from 'vue'
    import {useRouter} from 'vue-router'
    
    const router = useRouter()
    const matchList = ref([
        {

        },
        {
            
        },
        {

        }

    ])
    const show =  (day,event)=>{
        console.log(day)
    }
    const detailMatch = (id)=>{
        router.push({name:'detailMatch',params:{ matchId:2}})
    }
</script>

<style scoped>

</style>