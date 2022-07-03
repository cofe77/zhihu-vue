<template>
  <div>
    <HomeContentUnit
      v-for="question in questionList"
      :key="question?.id"
      :question="question"
    />
  </div>
</template>

<script lang="ts" setup>
import api from '@/api'
import { onBeforeMount, ref } from 'vue'
import HomeContentUnit from '../common/home-content-unit/HomeContentUnit.vue'

const questionList = ref([{
  id: '',
  title: '',
  answer: {}
}])

onBeforeMount(() => {
  api.getQuestionByCategory().then((res) => {
    questionList.value = res.data.data.filter((question: { answer: any; }) => !!question.answer)
  })
})
</script>

<style>
</style>
