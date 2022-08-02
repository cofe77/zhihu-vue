<template>
  <router-link
    :class="{'body-menu-item':true,'body-menu-item-on':on}"
    :to="to"
  >
    <slot />
  </router-link>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'
interface PeopleMenuItemPropsType {
  to:string
  on:boolean
}

const props = defineProps<PeopleMenuItemPropsType>()

const { on, to } = toRefs(props)
</script>

<style lang="less">

</style>
