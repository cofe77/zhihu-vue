<template>
  <div>
    <Header />
    <div>
      <div class="left">
        <router-view />
      </div>
      <div class="right">
        <Sider />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SET_USER } from '@/store/constant'
import { useStore } from 'vuex'
import Header from '@/components/common/Header.vue'
import Sider from '@/components/common/Sider.vue'

const store = useStore()
store.dispatch(SET_USER, { name: '123' })
</script>

<style>
.left{
  height: 3000px;
}
</style>
