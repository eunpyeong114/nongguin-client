import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'


export const useNongGuInStore = defineStore('nongGuIn', () => {

  const REST_USER_API = `http://localhost:8080/user`
  const REST_MATCH_API = `http://localhost:8080/Match/search`
  //로그인
  const signin = function(user){
    axios({
      url: REST_USER_API+"/signin",
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      data: user
    })
      .then((res) => {
        console.log(res.data)
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
  const condition=ref({
    date: new Date(),
    gender: "both",
    level: 0,
    region: ""
  })

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
        matchList.value.forEach((match) => {
          if (match.matchGender == 'm') {
            match.matchGender = '남성'
          } else if (match.matchGender == 'fm') {
            match.matchGender= '여성'
          } else if (match.matchGender == "both") {
            match.matchGender= '성별무관'
          }
          let date = new Date(match.matchDate);

          date.setHours(date.getHours() -9);

          let year = date.getFullYear();
          let month = (date.getMonth() + 1).toString().padStart(2, '0');
          let day = date.getDate().toString().padStart(2, '0');
          let hours = date.getHours().toString().padStart(2, '0');
          let minutes = date.getMinutes().toString().padStart(2, '0');

          var formattedDate = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
          match.matchDate = formattedDate;
        })
      })
      .catch((err) => {
      console.log(err)
    })
  }
  const match = ref()
  const getMatch = function(id){
    axios({
      url: REST_MATCH_API+"/detail/"+id,
      method: 'GET'
    })
    .then((res)=>{
      match.value=res.data
      if (match.value.matchGender == 'm') {
        match.value.matchGender = '남성'
      } else if (match.value.matchGender == 'fm') {
        match.value.matchGender= '여성'
      } else if (match.value.matchGender == "both") {
        match.value.matchGender= '성별무관'
      }
      let date = new Date(match.value.matchDate);

      date.setHours(date.getHours() -9);

      let year = date.getFullYear();
      let month = (date.getMonth() + 1).toString().padStart(2, '0');
      let day = date.getDate().toString().padStart(2, '0');
      let hours = date.getHours().toString().padStart(2, '0');
      let minutes = date.getMinutes().toString().padStart(2, '0');

      var formattedDate = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
      match.value.matchDate = formattedDate;
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  const user = ref()
  const getUser =function(id){
    axios({
      url: REST_USER_API+"/id/"+id,
      method: 'GET'
    })
    .then((res)=>{
      user.value=res.data
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  const updateUser = function(user){
    axios({
      url: REST_USER_API+"/"+user.userId,
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      data: user
    })
      .then(() => {
        router.push({ name: 'mypageUpdate'})
      })
      .catch((err) => {
      console.log(err)
    })
  }
  const myMatchList = ref([])
  const getMyMatchList =  function(id){
    axios({
      url: REST_MATCH_API+"/search/user/"+id,
      method: 'GET'
    })
    .then((res)=>{
      console.log("hi"+res.data)
      myMatchList.value=res.data
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return { signin,signup,matchList,getMatchList,getMatch,match,condition,user,getUser,updateUser,myMatchList,getMyMatchList}
  
})
