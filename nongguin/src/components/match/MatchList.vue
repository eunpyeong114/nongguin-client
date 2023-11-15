<template>
    <div>
        <div>
            <VCalendar v-model="select" @dayclick="show"></VCalendar>
            <div v-for="match in matchList" :key="match.ids">
                {{ match.matchDate }} {{  }}
                <button @click="detailMatch(id)">신청</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    // import
    import { watch,ref, onMounted } from 'vue'
    import { useRouter } from 'vue-router'
    import { useNongGuInStore } from '@/stores/nongGuIn'

    const store = useNongGuInStore()
    const router = useRouter()
    const matchList = ref([])

    const show = (day, event) => {
        console.log(day)
    }

    const detailMatch = (id) => {
        router.push({ name: 'detailMatch', params: { matchId: id }})
    }

    onMounted(async () => {
        const condition = {
            date: "2023-11-15",
            gender: "both",
            level: 0,
            region: ""
        }

        // 비동기 데이터 로딩 처리
        await store.getMatchList(condition)

        // store.matchList가 업데이트 되면 matchList도 업데이트
        matchList.value = store.matchList
    })

    // store.matchList의 변화를 감지하여 matchList를 업데이트
    watch(() => store.matchList, (newValue) => {
        matchList.value = newValue
    }, { immediate: true })
</script>


<style scoped>

</style>