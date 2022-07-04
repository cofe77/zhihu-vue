<template>
  <div>
    <Loading v-if="!complete" />
    <div
      v-if="complete"
    >
      <HomeContentUnit
        v-for="question in questionList"
        :key="question?.id"
        :question="question"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import api from '@/api'
import { onBeforeMount, ref } from 'vue'

const complete = ref(false)

const questionList = ref([{
  id: '',
  title: '',
  answer: {}
}])

onBeforeMount(() => {
  api.getQuestionByCategory().then((res) => {
    questionList.value = res.data.data.filter((question: { answer: any; }) => !!question.answer)
    complete.value = true
  })
})
</script>

<style>
</style>
