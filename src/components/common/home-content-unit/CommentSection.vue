<template>
  <div class="content-comment-section">
    <div
      v-if="commentsCount !== 0"
      class="comment-section-title"
    >
      <span class="comment-count">{{ commentsCount }}条评论</span>
      <span class="comment-order-btn fr c-8590a6">按时间顺序排列</span>
    </div>
    <div class="comment-section-body">
      <div
        v-if="featureComments.length !== 0"
        class="feature-comment"
      >
        <div class="comment-title">
          精选评论
        </div>
        <ul class="comment-body feature-comment-body">
          <CommentUnit
            v-for="comment,index in featureComments"
            :key="index"
            :comment="comment"
            :comment-id="comment.id"
            :author-id="userId"
            :answer-id="answerId"
            @should-update="shouldUpdate"
          />
        </ul>
      </div>
      <div class="all-comment">
        <div class="comment-title">
          所有评论
        </div>
        <ul class="comment-body all-comment-body">
          <li
            v-for="comment,index in commentsList"
            :key="index"
          >
            <div class="comment-unit all-comment-unit">
              <div
                v-if="!!comment.author.avatar"
                class="comment-header"
              >
                <CommentUnit
                  :comment="comment"
                  :comment-id="comment.id"
                  :author-id="userId"
                  :answer-id="answerId"
                  @should-update="shouldUpdate"
                />
              </div>
              <div
                v-if="comment.moreReply.length > 0"
                class="comment-discussion"
              >
                <div class="comment-unit comment-discussion-unit">
                  <CommentUnit
                    :comment="comment.moreReply[0]"
                    :comment-id="comment.id"
                    :author-id="userId"
                    :answer-id="answerId"
                    @should-update="shouldUpdate"
                  />
                </div>
                <div
                  v-if="comment.moreReply.length >= 2"
                  class="comment-unit comment-discussion-unit"
                >
                  <CommentUnit
                    :comment="comment.moreReply[1]"
                    :comment-id="comment.id"
                    :author-id="userId"
                    :answer-id="answerId"
                    @should-update="shouldUpdate"
                  />
                </div>
                <div
                  v-if="comment.moreReply.length > 2"
                  class="comment-tail c-8590a6"
                >
                  <span
                    v-if="comment.moreReply.length > 5"
                  >查看全部{{ comment.moreReply.length }}条回复</span>
                  <span>展开其他{{ comment.moreReply.length - 2 }}条回复</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="commentsCount > 20"
      class="comment-section-paging"
    >
      <ul>
        <li><span>1</span></li>
        <li v-if="commentsCount > 40">
          <span>2</span>
        </li>
        <li v-if="commentsCount > 60">
          <span>3</span>
        </li>
        <template
          v-if="commentsCount > 80"
        >
          <li><span>4</span></li>
          <li><span>···</span></li>
          <li><span>{Math.ceil(commentsCount / 20)}</span></li>
          <li><span>下一页</span></li>
        </template>
      </ul>
    </div>
    <div
      v-if="commentsCount === 0"
      class="comment-section-title"
    >
      <span class="comment-count">还没有评论</span>
    </div>
    <div class="comment-section-reply">
      <input
        v-model="commentContent"
        class="comment-reply-input"
        placeholder="请输入您的评论！"
      >
      <button
        class="comment-reply-button"
        @click="submitHandle"
      >
        发布
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import api from '@/api'
import { computed, onBeforeMount, ref, toRefs } from 'vue'

interface CommentSectionType {
  answerId: string
  commentsCount: number
}

const props = defineProps<CommentSectionType>()
const { answerId, commentsCount } = toRefs(props)

const emit = defineEmits(['should-update'])
const userId = computed(() => JSON.parse(localStorage.getItem('userInfo') || '{}').id)
const commentsList = ref([{
  id: '',
  moreReply: [],
  author: {
    avatar: ''
  },
  isFeature: null
}])
const commentContent = ref('')

const featureComments = computed(() => {
  let preFeatureComments:any[] = []
  preFeatureComments = commentsList.value.filter((comment) => comment.isFeature === 1)
  commentsList.value.forEach((comment: { moreReply: any[] }) => {
    comment.moreReply.length !== 0 && comment.moreReply.forEach((reply:{isFeature:number}) => {
      if (reply.isFeature === 1) {
        preFeatureComments.push(reply)
      }
    })
  })
  return preFeatureComments
})

onBeforeMount(() => {
  api.getCommentsList(answerId.value).then(res => {
    commentsList.value = res.data.data
  })
})
const submitHandle = () => {
  console.log(commentContent.value)
}

const shouldUpdate = () => {
  emit('should-update')
}
</script>

<style lang="less">
.content-comment-section{
  margin: 20px;
  box-shadow: 0 1px 3px rgba(18,18,18,.1);
  border-radius: 4px;
  border: 1px solid #ebebeb;
}
.comment-section-title{
  height: 50px;
  border-bottom: 1px solid #f6f6f6;
  padding: 0 20px;
  line-height: 50px;
}
.comment-count{
  font-weight: 600;
}
.comment-order-btn{
  font-size: 14px;
}
.comment-title{
  height: 39px;
  padding: 0 20px;
  line-height: 39px;
  background-color: #f6f6f6;
}
.comment-body{
  padding: 10px 20px;
}
.feature-comment-body li:hover .comment-unit-meta-visible{
  opacity: 1;
  transition: all 0.3s;
}
.comment-unit{
  padding: 10px 0;
}
.feature-comment-unit{
  border-bottom: 1px solid #f6f6f6;
}
.feature-comment-body>li:last-child>li>.feature-comment-unit:last-child{
  border-bottom: none;
}
.comment-unit-title{
}
.comment-unit-body{
  padding: 10px 0 10px 30px;
  clear: both;
}
.comment-unit-meta{
  padding-left: 30px;
  padding-bottom: 10px;
  color: #8590a6;
  font-size: 14px;
}
.comment-unit-meta>span{
  margin-right: 20px;
  cursor: pointer;
}
.comment-unit-meta-visible{
  display: inline-block;
  font-size: 14px;
  opacity: 0;
  transition: all 0.3s;
}
.comment-unit-meta-visible>span{
  margin-right: 20px;
  cursor: pointer;
}
.comment-tail{
  padding-left: 30px;
  font-size: 14px;
}
.all-comment-unit::after{
  content: "";
  display: block;
  border-bottom: 1px solid #f6f6f6;
}
.all-comment-body>li:last-child>li>.all-comment-unit::after{
  content: "";
  display: block;
  margin-left: 30px;
  border-bottom: none;
}
.comment-header::after{
  content: "";
  display: block;
  margin-left: 30px;
  border-bottom: 1px solid #f6f6f6;
}
.comment-header:hover .comment-unit-meta-visible{
  opacity: 1;
  transition: all 0.3s;
}
.comment-discussion{
  padding: 0 0 10px 30px;
}
.comment-discussion-unit::after{
  content: "";
  display: block;
  margin-left: 30px;
  border-bottom: 1px solid #f6f6f6;
}
.comment-discussion-unit:hover .comment-unit-meta-visible{
  opacity: 1;
  transition: all 0.3s;
}
.content-comment{

}
.comment-section-paging{
  padding: 10px 20px;
  border-top: 1px solid #f6f6f6;
  border-bottom: 1px solid #f6f6f6;
}
.comment-section-paging ul{
  justify-content: center;
  display: flex;
}
.comment-section-paging ul li{
  list-style: none;
  display: inline-block;
  margin: 0 10px;
}
.comment-section-reply{
  margin: 14px 20px;
  display: flex;
  justify-content: space-between;
}
.comment-reply-input{
  height: 38px;
  flex: 1;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #0066FF;
  padding: 0 10px;
}
.comment-reply-button{
  width: 60px;
  height: 40px;
  background-color: #06f;
  color: white;
  border: #175199;
  border-radius: 4px;
  cursor: pointer;
}
</style>
