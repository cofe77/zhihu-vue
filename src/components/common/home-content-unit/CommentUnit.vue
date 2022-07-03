<template>
  <div>
    <div class="comment-unit-title">
      <AvatarInfo
        :src="author.avatar"
        :target-user-id="author.id"
      />
      <span
        class="fl"
        style="{ verticalAlign: 'middle' }"
      >
        <span class="author-name">
          <router-link to="/people/${author.username}">
            {{ author?.username }}
          </router-link>
        </span>
        <template v-if="comment?.commentId !== '0'">
          <span class="c-8590a6 m-0-8">回复</span>
          <span class="author-name">
            <router-link to="/people/${comment?.repliedUser.username}">
              {{ author?.username }}
            </router-link>
          </span>
        </template>
      </span>
      <span
        class="fr c-8590a6"
        style="{ verticalAlign: 'middle'}"
      >
        <span class="">{{ proxy.$moment(comment.updateTime).fromNow() }}</span>
      </span>
    </div>
    <div class="comment-unit-body">
      <span>{{ comment?.content }}</span>
    </div>
    <div class="comment-unit-meta">
      <span>
        <svg
          class="Zi Zi--Like"
          fill="currentColor"
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path
            d="M14.445 9h5.387s2.997.154 1.95 3.669c-.168.51-2.346 6.911-2.346 6.911s-.763 1.416-2.86 1.416H8.989c-1.498 0-2.005-.896-1.989-2v-7.998c0-.987.336-2.032 1.114-2.639 4.45-3.773 3.436-4.597 4.45-5.83.985-1.13 3.2-.5 3.037 2.362C15.201 7.397 14.445 9 14.445 9zM3 9h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z"
            fillRule="evenodd"
          />
        </svg>{{ comment?.likeCount }}
      </span>
      <span :class="{'isHidden':comment?.isFeature}">
        <svg
          class="Zi Zi--Comments"
          fill="currentColor"
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path
            d="M11 2c5.571 0 9 4.335 9 8 0 6-6.475 9.764-11.481 8.022-.315-.07-.379-.124-.78.078-1.455.54-2.413.921-3.525 1.122-.483.087-.916-.25-.588-.581 0 0 .677-.417.842-1.904.064-.351-.14-.879-.454-1.171A8.833 8.833 0 0 1 2 10c0-3.87 3.394-8 9-8zm10.14 9.628c.758.988.86 2.009.86 3.15 0 1.195-.619 3.11-1.368 3.938-.209.23-.354.467-.308.722.12 1.073.614 1.501.614 1.501.237.239-.188.562-.537.5-.803-.146-1.495-.42-2.546-.811-.29-.146-.336-.106-.563-.057-2.043.711-4.398.475-6.083-.927 5.965-.524 8.727-3.03 9.93-8.016z"
            fillRule="evenodd"
          />
        </svg>查看回复
      </span>
      <div class="comment-unit-meta-visible">
        <span @click="handleReply">
          <svg
            class="Zi Zi--Reply"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="16"
            height="16"
          >
            <path
              d="M22.959 17.22c-1.686-3.552-5.128-8.062-11.636-8.65-.539-.053-1.376-.436-1.376-1.561V4.678c0-.521-.635-.915-1.116-.521L1.469 10.67a1.506 1.506 0 0 0-.1 2.08s6.99 6.818 7.443 7.114c.453.295 1.136.124 1.135-.501V17a1.525 1.525 0 0 1 1.532-1.466c1.186-.139 7.597-.077 10.33 2.396 0 0 .396.257.536.257.892 0 .614-.967.614-.967z"
              fillRule="evenodd"
            />
          </svg>回复
        </span>
        <span>
          <svg
            class="Zi Zi--Like"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="16"
            height="16"
          >
            <path
              d="M14.445 9h5.387s2.997.154 1.95 3.669c-.168.51-2.346 6.911-2.346 6.911s-.763 1.416-2.86 1.416H8.989c-1.498 0-2.005-.896-1.989-2v-7.998c0-.987.336-2.032 1.114-2.639 4.45-3.773 3.436-4.597 4.45-5.83.985-1.13 3.2-.5 3.037 2.362C15.201 7.397 14.445 9 14.445 9zM3 9h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z"
              fillRule="evenodd"
            />
          </svg>踩
        </span>
        <span>
          <svg
            class="Zi Zi--Report"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="14"
            height="14"
          >
            <path
              d="M19.947 3.129c-.633.136-3.927.639-5.697.385-3.133-.45-4.776-2.54-9.949-.888-.997.413-1.277 1.038-1.277 2.019L3 20.808c0 .3.101.54.304.718a.97.97 0 0 0 .73.304c.275 0 .519-.102.73-.304.202-.179.304-.418.304-.718v-6.58c4.533-1.235 8.047.668 8.562.864 2.343.893 5.542.008 6.774-.657.397-.178.596-.474.596-.887V3.964c0-.599-.42-.972-1.053-.835z"
              fillRule="evenodd"
            />
          </svg>举报
        </span>
      </div>
      <el-form
        v-if="isReplyFormShow"
        :inline="true"
        size="middle"
        class="comment-unit-form"
      >
        <el-form-item
          class="comment-unit-input"
        >
          <el-input
            v-model="commentContent"
          />
        </el-form-item>
        <el-form-item
          class="comment-unit-submit"
        >
          <el-button
            type="primary"
            @click="handleReplySubmit"
          >
            发布
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import api from '@/api'
import { getCurrentInstance, reactive, ref, toRefs } from 'vue'
interface CommentUnitType {
  comment: {
    author: {
      id: string,
      username: string,
      avatar: string
    },
    content: string,
    commentId: string,
    updateTime: string,
    likeCount: boolean,
    isFeature: boolean
  },
  commentId: string,
  authorId: string,
  answerId: string,
}
const props = defineProps<CommentUnitType>()
const { comment, commentId, authorId, answerId } = toRefs(props)
const { proxy } = getCurrentInstance() as any

const emit = defineEmits(['should-update'])

const author = reactive(comment.value.author || {
  id: '',
  avatar: ''
})
const isReplyFormShow = ref(false)
const commentContent = ref('')

const handleReply = () => {
  isReplyFormShow.value = !isReplyFormShow.value
}

const handleReplySubmit = () => {
  api.newComment({
    answerId: answerId.value,
    authorId: authorId.value,
    content: commentContent.value,
    commentId: commentId.value,
    repliedUserId: author.id
  }).then((res: any) => {
    isReplyFormShow.value = false
    commentContent.value = ''
    emit('should-update')
  }).catch((err: any) => {
    console.log(err)
  })
}
</script>

<style lang="less">
.comment-unit-form{
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  .comment-unit-input{
    flex: 1;
    margin-bottom: 0;
    margin-right: 10px;
  }
  .comment-unit-submit{
    margin-bottom: 0;
    margin-right: 0;
  }
}
</style>
