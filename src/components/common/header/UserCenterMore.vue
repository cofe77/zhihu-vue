<template>
  <div class="user-center-section">
    <router-link
      class="user-center-li"
      :to="'/people/'+username"
    >
      我的主页
    </router-link>
    <router-link
      class="user-center-li"
      to="/people/creator"
    >
      创作中心
    </router-link>
    <router-link
      class="user-center-li"
      to="/people/settings"
    >
      设置
    </router-link>
    <div
      class="user-center-li"
      @click="handleLogout"
    >
      退出
    </div>
  </div>
</template>

<script lang="ts" setup>
import { userInfoStore } from '@/store/store'
import { useRouter } from 'vue-router'

const store = userInfoStore()

const router = useRouter()
const username = store.getUserName || ''

const handleLogout = () => {
  localStorage.removeItem('token')
  router.push({ path: '/login', replace: true })
}
</script>

<style lang="less">
</style>
