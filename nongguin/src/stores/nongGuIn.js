import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'


export const useNongGuInStore = defineStore('counter', () => {

  const REST_USER_API = `http://localhost:8080/user`
  const REST_MATCH_API = `http://localhost:8080/Match/search`
  const signin = function(user){
    axios({
      url: REST_USER_API+"/signin",
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      data: user
    })
      .then(() => {
        router.push({ name: 'matchList'})
      })
      .catch((err) => {
      console.log(err)
    })
  }
  const signup = function(user){
    axios({
      url: REST_USER_API+"/signup",
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      data: user
    })
      .then(() => {
        router.push('/user/completesignup')
      })
      .catch((err) => {
      console.log(err)
    })
  }


  const matchList  = ref([])
  const getMatchList= function(condition){
    axios({
      url: REST_MATCH_API+"/condition",
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      data: condition
    })
      .then((res) => {
        matchList.value=res.data
      })
      .catch((err) => {
      console.log(err)
    })
  }

  const courtList  = ref([])
  const getCourtList= function(condition){
    axios({
      url: REST_MATCH_API+"/condition",
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      data: condition
    })
      .then((res) => {
        matchList.value=res.data
      })
      .catch((err) => {
      console.log(err)
    })
  }

  return { signin,signup,matchList,getMatchList,courtList,getCourtList}
  
})
