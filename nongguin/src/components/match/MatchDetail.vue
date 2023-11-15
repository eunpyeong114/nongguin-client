<template>
    <div>
        <div>
            
        </div>
    </div>
</template>

<script setup>
    // import
    import { ref } from 'vue'
    import {useRouter} from 'vue-router'

    const router = useRouter()
    const matchList = ref(
        {

        }
    )
    const date = ref()
    const attributes = ref([
    {
        highlight: true,
        dates: new Date(),
    },
    ]);
    
    const detailMatch = ()=>{
        router.push('')
    }
</script>

<style scoped>

</style>