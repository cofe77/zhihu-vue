import HotVue from '@/components/home/Hot.vue'
import DefaultVue from '@/components/home/Default.vue'
import VideoVue from '@/components/home/Video.vue'
import FollowVue from '@/components/home/Follow.vue'
import LoginVue from '@/components/login/Login.vue'
import PeopleVue from '@/components/people/People.vue'
import SettingVue from '@/components/people/Setting.vue'
import EditVue from '@/components/people/Edit.vue'
import QuestionVue from '@/components/question/Question.vue'
import ExploreVue from '@/pages/Explore.vue'
import HomeVue from '@/pages/Home.vue'
import VIPVue from '@/pages/VIP.vue'
import WaitingVue from '@/pages/Waiting.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/login', component: LoginVue },
  {
    path: '/',
    component: HomeVue,
    children: [
      { path: '/', component: DefaultVue },
      { path: '/hot', component: HotVue },
      { path: '/video', component: VideoVue },
      { path: '/follow', component: FollowVue }
    ]
  },
  {
    path: '/vip',
    component: VIPVue
    // children: [
    //   { path: '/type', component: Index },
    //   { path: '/type/hot', component: Hot }
    // ]
  },
  {
    path: '/explore',
    component: ExploreVue
    // children: [
    //   { path: '/type', component: Index },
    //   { path: '/type/hot', component: Hot }
    // ]
  },
  {
    path: '/question/waiting',
    component: WaitingVue
    // children: [
    //   { path: '/type', component: Index },
    //   { path: '/type/hot', component: Hot }
    // ]
  },
  {
    path: '/question/:id',
    component: QuestionVue,
    props: true
    // children: [
    //   { path: '/type', component: Index },
    //   { path: '/type/hot', component: Hot }
    // ]
  },
  {
    path: '/people/:id',
    component: PeopleVue
  },
  {
    path: '/people/edit',
    component: EditVue
  },
  {
    path: '/people/setting',
    component: SettingVue
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
