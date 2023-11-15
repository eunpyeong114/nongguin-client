import { createRouter, createWebHistory } from 'vue-router'
// views
import matchView from "@/views/MatchView.vue"
import userView from "@/views/UserView.vue"
import myPageView from "@/views/MyPageView.vue"

// user components
import userSignIn from "@/components/user/UserSignIn.vue"
import userSignInComplete from "@/components/user/UserSignInComplete.vue"
import userSignUp from "@/components/user/UserSignUp.vue"
import userSignUpComplete from "@/components/user/UserSignUpComplete.vue"

// match components
import matchList from "@/components/match/MatchList.vue"

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
          component : matchList,
        },
        {
          path:'detailmatch',
          component : userSignInComplete
        },
        {
          path:'signup',
          component : userSignUp
        },
        {
          path:'completesignup',
          component : userSignUpComplete
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      children:[
        {
          path:'',
          component : userSignIn,
        },
        {
          path:'completesignin',
          component : userSignInComplete
        },
        {
          path:'signup',
          component : userSignUp
        },
        {
          path:'completesignup',
          component : userSignUpComplete
        }
      ] 
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: myPageView,
    }
  ]
})

export default router
