<template>
  <div>
    <div class="content-info">
      <AgreeBtn
        :question-id="answer?.questionId"
        :agree-count="agreeCount"
        :agree-state="agreeState"
        @update-handle="updateAnswerAgreeState(1)"
      />
      <DisagreeBtn
        :question-id="answer?.questionId"
        :agree-state="agreeState"
        @update-handle="updateAnswerAgreeState(-1)"
      />
      <ul class="meta-info">
        <li @click="toggleIsCommentShow">
          <span class="meta-info-comment">
            <svg
              class="Zi Zi--Comment Button-zi"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
            >
              <path
                d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"
                fillRule="evenodd"
              />
            </svg>{{ isCommentShow ? "收起评论" : answer ? answer.commentsCount + "条评论" : "添加评论" }}
          </span>
        </li>
        <li>
          <span class="meta-info-share">
            <svg
              class="Zi Zi--Share Button-zi"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
            >
              <path
                d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"
                fillRule="evenodd"
              />
            </svg>分享
          </span>
          <div class="isHidden">
            分享
          </div>
        </li>
        <li
          @click="toggleIsCollect"
        >
          <span class="meta-info-collect">
            <svg
              class="Zi Zi--Star Button-zi"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
            >
              <path
                d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
                fillRule="evenodd"
              />
            </svg>{{ isCollect ? `取消收藏` : `收藏` }}
          </span>
        </li>
        <li
          @click="toggleIsLike"
        >
          <span class="meta-info-like">
            <svg
              class="Zi Zi--Heart Button-zi"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
            >
              <path
                d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z"
                fillRule="evenodd"
              />
            </svg>{{ isLike ? `取消喜欢` : `喜欢` }}
          </span>
        </li>
        <li>
          <span class="meta-info-more">…</span>
          <div class="isHidden">
            喜欢
          </div>
        </li>
      </ul>
      <span
        v-if="!isFold"
        class="meta-info-roll-up"
        @click="foldHandle"
      >收起
        <svg
          class="Zi Zi--ArrowDown ContentItem-arrowIcon is-active"
          fill="currentColor"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
            fillRule="evenodd"
          />
        </svg>
      </span>
    </div>
    <CommentSection
      v-if="isCommentShow"
      :key="commentKey"
      :answer-id="answer.id"
      :comments-count="answer.commentsCount"
      @should-update="shouldUpdate"
    />
  </div>
</template>

<script lang="ts" setup>
import api from '@/api'
import { computed, ref, toRefs } from 'vue'

interface AnswerOperateType {
  answer: {
    id: string,
    questionId: string,
    agreeCount: number,
    agreeState: number,
    commentsCount: number,
    isCollect: boolean,
    isLike: boolean
  },
  isFold: boolean
}

const props = defineProps<AnswerOperateType>()
const emit = defineEmits(['fold-handle'])

const { answer, isFold } = toRefs(props)

const agreeCount = ref(answer.value.agreeCount || 0)
const agreeState = ref(answer.value.agreeState || 0)
const isCollect = ref(answer.value.isCollect || false)
const isLike = ref(answer.value.isLike || false)
const commentKey = ref(answer.value.id)

const userId = computed(() => JSON.parse(localStorage.getItem('userInfo') || '{}').id)
const isCommentShow = ref(false)

const foldHandle = () => {
  emit('fold-handle')
}
const toggleIsCommentShow = () => {
  isCommentShow.value = !isCommentShow.value
}
const toggleIsCollect = () => {
  // tudo：切换收藏状态网络请求
  api.updateAnswerMeta({
    answerId: answer.value.id,
    userId: userId.value,
    type: 'collect'
  }).then(res => {
    console.log(res)
    if (res.data.status === 20031) {
      isCollect.value = !isCollect.value
    }
  }).catch(err => {
    console.log(err)
  })
}
const toggleIsLike = () => {
  // tudo：切换喜欢状态网络请求
  api.updateAnswerMeta({
    answerId: answer.value.id,
    userId: userId.value,
    type: 'like'
  }).then(res => {
    if (res.data.status === 20031) {
      isLike.value = !isLike.value
    }
  }).catch(err => {
    console.log(err)
  })
}

const updateAnswerAgreeState = (val: number) => {
  // val有两种情况：1和 - 1
  // 1代表点击了agree btn；-1代表点击了disagree btn
  api.updateAnswerMeta({
    answerId: answer.value.id,
    value: val,
    type: 'agree'
  }).then((res) => {
    if (res.data.status) {
      let state // 计算后的状态值
      if (agreeState.value === 1) {
        state = val === 1 ? 0 : -1
        agreeCount.value = agreeCount.value - 1
      } else if (agreeState.value === 0) {
        state = val
        val === 1 && (agreeCount.value = agreeCount.value + 1)
      } else {
        state = val === 1 ? 1 : 0
        val === 1 && (agreeCount.value = agreeCount.value + 1)
      }
      agreeState.value = state
    }
  }).catch((err) => {
    console.log(err)
  })
}

const shouldUpdate = () => {
  commentKey.value = commentKey.value + 1
}
</script>

<style>
.content-info{
  height: 32px;
  margin-top: 12px;
  padding: 0 20px;
  transition: all 0.5;
  display: flex;
  align-items: center;
}
.question-scroll-on{
  position: sticky;
  bottom: 0;
  padding: 10px 20px;
  background-color: white;
  box-shadow: 0 -1px 3px rgba(18,18,18,.1);
  transition: all 0.5;
}
.content-agree-or-disagree-btn{
  line-height: 30px;
  padding: 0 10px;
  border: 1px solid;
  border-color: transparent;
  background-color: rgba(0,102,255,.1);
  color: #06f;
  font-size: 14px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.content-agree-or-disagree-btn:hover{
  background-color: rgba(0,102,255,.2);
}
.content-agree{
  margin-right: 5px;
}
.agree-btn-on{
  background-color: #0066FF;
  color: white;
}
.agree-btn-on:hover{
  background-color: #0066FF;
  color: white;
}
.meta-info{
  display: inline-block;
}
.meta-info li{
  display: inline-block;
  color: #8590a6;
  margin-left: 20px;
}
.meta-info li span:hover{
  cursor: pointer;
  color: #76839b;
}
/* .meta-info-comment{
}
.meta-info-share{

}
.meta-info-collect{
}
.meta-info-like{
}
.meta-info-more{
} */
.meta-info-roll-up{
  float: right;
  font-size: 15px;
  line-height: 15px;
  color: #76839b;
}
</style>
