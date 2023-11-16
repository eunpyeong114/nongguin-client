import { createRouter, createWebHistory } from 'vue-router'
// views
import matchView from "@/views/MatchView.vue"
import userView from "@/views/UserView.vue"
import myPageView from "@/views/MyPageView.vue"

// user components
import userSignin from "@/components/user/UserSignin.vue"
import userSigninComplete from "@/components/user/UserSigninComplete.vue"
import userSignup from "@/components/user/UserSignup.vue"
import userSignupComplete from "@/components/user/UserSignupComplete.vue"

// match components
import matchList from "@/components/match/MatchList.vue"
import matchDetail from "@/components/match/matchDetail.vue"

// mypage components
import mypage from "@/components/mypage/mypage.vue"
import mypageUpdate from "@/components/mypage/mypageUpdate.vue"
import mypageFriend from "@/components/mypage/mypageFriend.vue"
import myMatch from "@/components/mypage/myMatch.vue"

//router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'match',
      children:[
        {
          path:'',
          name:'matchList',
          component : matchList,
        },
        {
          path:'detailmatch/:matchId',
          name:'detailMatch',
          component : matchDetail
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      children:[
        {
          path:'',
          name:'userSignin',
          component : userSignin,
        },
        {
          path:'completesignin',
          name:'completesignin',
          component : userSigninComplete
        },
        {
          path:'signup',
          name:'signup',
          component : userSignup
        },
        {
          path:'completesignup',
          name:'completesignup',
          component : userSignupComplete
        }
      ] 
    },
    {
      path: '/mypage',
      name: 'mypage',
      children:[
        {
          path:'/mypage/:id',
          name:'mypage',
          component : mypage,
        },
        {
          path:'/update/:id',
          name:'mypageUpdate',
          component : mypageUpdate,
        },
        {
          path:'/friend/:id',
          name:'mypageFriend',
          component : mypageFriend,
        },
        {
          path:'/match/:id',
          name:'mypageMatch',
          component : myMatch,
        }
      ] 
    }
  ]
})

export default router
