<template>
  <button
    data-id="questionId"
    type="button"
    :class="{'content-agree-or-disagree-btn':true,'content-disagree':true,'agree-btn-on':agreeState === -1}"
    @click="updateQuestionAgreeState"
  >
    &#8203;
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-caret-down-fill"
      viewBox="0 0 16 16"
    >
      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
    </svg>
  </button>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'

interface DisagreeBtnType {
  agreeState: number
}

const props = defineProps<DisagreeBtnType>()
const emit = defineEmits(['update-handle'])

const { agreeState } = toRefs(props)
const updateQuestionAgreeState = () => {
  emit('update-handle')
}
</script>

<style lang="less">

</style>
