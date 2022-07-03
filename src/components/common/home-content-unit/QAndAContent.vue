<template>
  <div>
    <div
      v-if="isFold"
      class="content-main-fold"
    >
      <div class="content-title-img">
        <img
          v-if="!!question.mainPic"
          :src="question.mainPic"
          alt=""
        >
      </div>
      <div
        :class="{'content-fold-text':true,'content-with-pic':!!question.mainPic}"
      >
        <span>
          {{ question?.answer?.author?.username +"："+ question?.answer?.excerpt }}
        </span>
        <button
          type="button"
          @click="expandHandle"
        >
          阅读全文
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
      <div
        style="{clear:'both'}"
      />
    </div>
    <div
      v-if="!isFold"
      class="content-main-unfold"
    >
      <div class="content-main-unfold-title">
        <AvatarInfo
          :src="question.answer.author.avatar"
          :target-user-id="question.answer.author.id"
        />
        <span
          class="clear-fix"
          style="{verticalAlign:'middle'}"
        >
          <span class="author-name fl">
            <router-link to="{`/people/${question.answer?.author?.username}`">
              {{ question?.answer?.author?.username }}
            </router-link>
          </span>
          <i class="anthor-slogan">
            {{ question.answer?.author?.slogan }}
          </i>
        </span>
      </div>
      <div class="content-main-unfold-content">
        <div
          style="{paddingTop:'5px',textIndent:2}"
          v-html="question.answer?.content"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'

const emit = defineEmits(['expand-handle'])

interface questionType {
  question: {
    id: string,
    title: string,
    mainPic: string,
    answer: {
      author: {
        id: string,
        avatar: string,
        username: string,
        slogan: string
      },
      content: string,
      excerpt: string
    }
  },
  isFold: boolean
}
const props = defineProps<questionType>()

const { question, isFold } = toRefs(props)

const expandHandle = () => {
  emit('expand-handle')
}
</script>

<style scoped>
.content-main-fold{
  display: flex;
}
.content-title-img{
  width: 190px;
  height: 105px;
  margin-right: 18px;

}
.content-title-img img{
  width: 190px;
  height: 105px;
  border-radius: 4px;
}
.content-fold-text{
  font-size: 15px;
  line-height: 1.6;
}
.content-with-pic{
  padding: 5px 0;
}
.content-fold-text button{
  font-size: 1rem;
  border: none;
  background: none;
  color: #175199;
  cursor: pointer;
}
.content-fold-text button:hover{
  color: gray;
}
.content-main-unfold-title{
  margin-bottom:10px;
  align-items: baseline;
}
.author-ava{
  width: 24px;
  height: 24px;
  margin-right: 5px;
}
.author-name{
  font-size: 15px;
  display: inline-block;
}
.anthor-slogan{
  font-size: 12px;
  font-style: normal;
  color: #76839b;
}
.content-main-unfold-content span{
  line-height:24px;
}
</style>
