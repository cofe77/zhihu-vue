import HotVue from '@/components/home/Hot.vue'
import DefaultVue from '@/components/home/Default.vue'
import VideoVue from '@/components/home/Video.vue'
import FollowVue from '@/components/home/Follow.vue'
import LoginVue from '@/components/login/Login.vue'
import PeopleVue from '@/components/people/People.vue'
import PeopleIndexVue from '@/components/people/PeopleIndex.vue'
import PeopleDynamicVue from '@/components/people/PeopleDynamic.vue'
import PeopleAnswersVue from '@/components/people/PeopleAnswers.vue'
import PeopleAsksVue from '@/components/people/PeopleAsks.vue'
import PeopleCollectionsVue from '@/components/people/PeopleCollections.vue'
import PeopleFollowingVue from '@/components/people/PeopleFollowing.vue'
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
    path: '/people',
    component: PeopleIndexVue,
    children: [
      { path: '/people/edit', component: EditVue },
      { path: '/people/settings', component: SettingVue },
      {
        path: '/people/:username',
        component: PeopleVue,
        props: true,
        children: [
          { path: '/people/:username/answers', component: PeopleAnswersVue },
          { path: '/people/:username/asks', component: PeopleAsksVue },
          { path: '/people/:username/collections', component: PeopleCollectionsVue },
          { path: '/people/:username/following', component: PeopleFollowingVue },
          { path: '/people/:username/', component: PeopleDynamicVue }
        ]
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from) => {
  const isAuthenticated = !!JSON.parse(localStorage.getItem('user') as string)?.userInfo.id
  if (
    !isAuthenticated && to.path !== '/login'
  ) {
    return '/login'
  }
})

export default router
