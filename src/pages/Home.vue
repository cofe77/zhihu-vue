<template>
  <div>Home</div>
  <el-button @click="changeUserInfo">
    修改用户信息
  </el-button>
  <div>{{ username }}</div>
</template>

<script lang="ts" setup>
import { SET_USER } from '@/store/constant'
import { computed } from 'vue-demi'
import { useStore } from 'vuex'

const store = useStore()
store.dispatch(SET_USER, { name: '123' })
const username = computed(() => store.state.user.name)
const changeUserInfo = () => {
  console.log('saddsa')
  store.dispatch(SET_USER, { name: 'meenie' })
}
</script>

<style>
</style>
