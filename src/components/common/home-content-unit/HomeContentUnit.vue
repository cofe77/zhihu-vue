<template>
  <div
    class="bd-content-unit"
  >
    <div class="content-title">
      <a
        :href="`/question/${ question.id }`"
        target="_blank"
        rel="noopener noreferrer"
      >{{ question.title }}</a>
    </div>
    <div class="content-main">
      <QAndAContent
        :question="question"
        :is-fold="isFold"
        @expand-handle="setIsFold(false)"
      />
    </div>
    <AnswerOperate
      :is-fold="isFold"
      :answer="question.answer"
      @fold-handle="setIsFold(true)"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue'

interface questionType {
  question: {
    id: String,
    title: String,
    answer: {}
  }
}
const props = defineProps<questionType>()

const { question } = toRefs(props)

const isFold = ref(true)

const setIsFold = (target: boolean) => {
  isFold.value = target
  console.log(isFold.value)
}
</script>

<style>
.bd-content-unit{
  padding: 20px 0;
  display: block;
  border-bottom: 1px solid #EEEEEE;
}
.content-title{
  margin: 0 20px;
}
.content-title a{
  font-size: 18px;
  font-weight: 600;
  display: inline-block;
}
.content-title a:hover{
  cursor: pointer;
}
.content-main{
  margin: 10px 20px 0 20px;
}
.meta-info-roll-up{
  cursor: pointer;
}
</style>
