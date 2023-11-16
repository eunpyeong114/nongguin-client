<template>
    <div>
        <div>
           
            <div>
                <h2>매치 정보</h2>
                <p>날짜 {{store.match.matchDate}}</p>
                <p>참여자 수 {{store.match.matchApplicantCnt}}</p>
                <p>매치 레벨{{store.match.matchLevel}}</p>
                <p>제한 성별{{store.match.matchGender}}</p>
            </div>
            <div>
                <h2>경기장 정보</h2>
                <p >이름 {{store.match.courtName}}</p>
                <p>주소 {{store.match.courtAddress}}</p>
                <p>번호 {{store.match.courtTel}}</p>
                <p>최대인원 {{store.match.courtCapacity}}</p>
                <p>설명 {{store.match.courtDes}}</p>
            </div>
            <div>여기에 카카오맵</div> 
            <button @click="goPayment">신청</button>
        </div>
    </div>
</template>

<script setup>
    import { watch,ref, onMounted,onBeforeMount } from 'vue'
    import { useRouter,useRoute} from 'vue-router'
    import { useNongGuInStore } from '@/stores/nongGuIn'

    const store = useNongGuInStore()
    const router = useRouter()
    const route = useRoute()
    


    onBeforeMount( async() =>{
        await store.getMatch(route.params.matchId)
        
    })
    const goPayment = function(){
        router.push() 
    }

</script>

<style scoped>
   
</style>

