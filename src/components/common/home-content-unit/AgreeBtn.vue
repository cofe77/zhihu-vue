<template>
  <button
    data-id="questionId"
    type="button"
    :class="{'content-agree-or-disagree-btn':true,'content-agree':true,'agree-btn-on': agreeState === 1}"
    @click="updateQuestionAgreeState"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-caret-up-fill"
      viewBox="0 0 16 16"
    >
      <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
    </svg>
    <span>{{ (agreeState === 1 ? `\u00A0\u00A0\u00A0已` : `\u00A0\u00A0\u00A0`) + `赞同   ` + agreeCount }}</span>
  </button>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'

interface agreeBtnPropsType {
  agreeState: number,
  agreeCount: number
}
const props = defineProps<agreeBtnPropsType>()
const emit = defineEmits(['update-handle'])

const { agreeState, agreeCount } = toRefs(props)

const updateQuestionAgreeState = () => {
  emit('update-handle')
}

</script>

<style lang="less">

</style>
