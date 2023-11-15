<template>
    <div>
        <div>
            <VCalendar :min-date="new Date()"></VCalendar>
            <div v-for="match in matchList" :key="match.ids">
                <p>매치</p>
                <button @click="detailMatch">신청</button>
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
   
    
        

    const detailMatch = ()=>{
        router.push('')
    }
</script>

<style scoped>

</style>