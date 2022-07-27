<template>
  <div class="user-center-section">
    <router-link
      class="user-center-li"
      :to="`/people/${username}`"
    >
      我的主页
    </router-link>
    <router-link
      class="user-center-li"
      to="/creator"
    >
      创作中心
    </router-link>
    <router-link
      class="user-center-li"
      to="/settings"
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
import userInfoStore from '@/store/store'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const userInfo = userInfoStore()
console.log('userInfo id', userInfo.id)

const router = useRouter()
const username = computed(() => userInfo.username)
const handleLogout = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  router.push({ path: '/login', replace: true })
}
</script>

<style lang="less">
</style>
