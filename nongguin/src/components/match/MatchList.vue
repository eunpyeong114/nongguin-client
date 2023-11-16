`<template>
    <div>
        <div>
            <VCalendar  view="weekly" v-model="date" @dayclick="show"></VCalendar>
            <select v-model="region" >
                <option value="">지역선택</option>
                <option value="서울">서울</option>
                <option value="경기">경기</option>
                <option value="인천">인천</option>
                <option value="강원">강원</option>
                <option value="대전">대전</option>
                <option value="세종">세종</option>
                <option value="충북">충북</option>
                <option value="충남">충남</option>
                <option value="대구">대구</option>
                <option value="경북">경북</option>
                <option value="부산">부산</option>
                <option value="울산">울산</option>
                <option value="경남">경남</option>
                <option value="광주">광주</option>
                <option value="전남">전남</option>
                <option value="전북">전북</option>
                <option value="제주">제주</option>
            </select>
            <select v-model="gender">
                <option value="">성별선택</option>
                <option value="m">남성</option>
                <option value="fm">여성</option>
                <option value="both">성별무관</option>
            </select>
            <select v-model="level">
                <option value=0>레벨 선택</option>
                <option value=1>레벨 1</option>
                <option value=2>레벨 2</option>
                <option value=3>레벨 3</option>
            </select>


            <div v-for="match in matchList" :key="match.id">
               매치아이디 {{match.matchId}}매치 날짜{{ match.matchDate }} {{ match.court }} {{ match.matchGender }} 최대 인원{{match.courtCapacity  }} 레벨{{ match.matchLevel }}
                <button @click="detailMatch(match.matchId)">신청</button>
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
        console.log(day.id)
        date.value=day.id
       
    }

    const detailMatch = (id) => {
        router.push({ name: 'detailMatch', params: { matchId: id }})
    }
    const date =ref(new Date())
    const gender =ref('')
    const level =ref(0)
    const region =ref('')
    
    const loadMatchList = () =>{
        store.condition = {
            date: date.value,
            gender:gender.value,
            level: level.value,
            region: region.value
        }
        store.getMatchList(store.condition)
        matchList.value = store.matchList
    }

    onMounted(async () => {
        await store.getMatchList(store.condition)
        matchList.value = store.matchList
    })

    // store.matchList의 변화를 감지하여 matchList를 업데이트
    watch(() => store.matchList, (newValue) => {
        matchList.value = newValue
    }, { immediate: true })
    watch(() => date.value, (newValue) => {
        
        loadMatchList()
    })
    watch(() => gender.value, (newValue) => {
       
        loadMatchList()
    })
    watch(() => level.value, (newValue) => {
        
        loadMatchList()
    })
    watch(() => region.value, (newValue) => {
        
        loadMatchList()
    })

    
</script>


<style scoped>

</style>`