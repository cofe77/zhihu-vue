<template>
  <div>{{ props.id }}</div>
</template>

<script lang="ts" setup>
interface peopleType {
  id: String
}
const props = defineProps<peopleType>()
</script>

<style>
</style>
