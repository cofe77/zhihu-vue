<template>
  <div
    class="avatar-info"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
  >
    <img
      class="author-ava"
      :src="src"
      alt=""
    >
    <div
      v-if="isAvatarInfoShow"
      class="avatar-info-container"
      @mouseenter.stop="mouseEnterInfo"
    >
      <Loading v-if="isAvatarInfoShow && isLoadingShow" />
      <template v-if="!isLoadingShow">
        <div class="avatar-info-header">
          <img
            class="avatar-info-ava"
            :src="userInfo.avatar"
            alt=""
          >
          <div class="avatar-info-title">
            <div>{{ userInfo?.username }}</div>
            <div>{{ userInfo?.slogan }}</div>
          </div>
        </div>
        <div class="avatar-info-body">
          <div class="avatar-info-body-item">
            <div class="avatar-info-body-item-title">
              回答
            </div>
            <div class="avatar-info-body-item-content">
              {{ 1231 }}
            </div>
          </div>
          <div class="avatar-info-body-item">
            <div class="avatar-info-body-item-title">
              文章
            </div>
            <div class="avatar-info-body-item-content">
              {{ 123 }}
            </div>
          </div>
          <div class="avatar-info-body-item">
            <div class="avatar-info-body-item-title">
              关注者
            </div>
            <div class="avatar-info-body-item-content">
              {{ 3213213 }}
            </div>
          </div>
        </div>
        <div
          v-if="!(userId === targetUserId)"
          class="avatar-info-footer"
        >
          <div
            class="btn btn-primary"
            @click="handleFollow"
          >
            {{ follow ? `取消关注` : `+关注他` }}
          </div>
          <div
            class="btn btn-gray"
            @click="handleMsg"
          >
            发私信
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import api from '@/api'
import { computed, ref, toRefs } from 'vue'

interface AvatarInfoType {
  src: string,
  targetUserId: string
}

const props = defineProps<AvatarInfoType>()

const { src, targetUserId } = toRefs(props)

const isAvatarInfoShow = ref(false)
const isLoadingShow = ref(true)
const userInfo = ref({
  avatar: '',
  username: '',
  slogan: ''
})
const follow = ref(false)

const userId = computed(() => JSON.parse(localStorage.getItem('userInfo') || '{}').id)

const mouseEnter = () => {
  isAvatarInfoShow.value = true
  api.getUserInfoById(targetUserId.value).then((res: any) => {
    if (res.data.data) {
      userInfo.value = res.data.data
      follow.value = res.data.data.follow
      isLoadingShow.value = false
    }
  }).catch((err: any) => {
    console.log(err)
  })
}
let showTimer: ReturnType<typeof setTimeout>
const mouseLeave = () => {
  showTimer = setTimeout(() => {
    isAvatarInfoShow.value = false
  }, 200)
}
const mouseEnterInfo = (e: any) => {
  clearTimeout(showTimer)
}
const handleFollow = () => {
  api.toggleFollow({
    userId: userId.value,
    targetUserId: targetUserId.value
  }).then((res: any) => {
    follow.value = res.data.data
  }).catch((err: any) => {
    console.log(err)
  })
}
const handleMsg = () => {
}
</script>

<style lang="less">

.avatar-info{
  position: relative;
  .author-ava{
    width: 24px;
    height: 24px;
    margin-right: 5px;
    float: left;
  }
  .avatar-info-container{
    width: 340px;
    position: absolute;
    top: 40px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 4px 18px -5px gray;
    z-index: 999;
    .avatar-info-header{
      display: flex;
      border-bottom: 1px solid #eee;
      .avatar-info-ava{
        width: 55px;
        height: 55px;
        position: relative;
        top: -10px;
        left: 10px;
      }
      .avatar-info-title{
        flex: auto;
        text-align: left;
        padding-left: 20px;
      }
    }
    .avatar-info-body{
      display: flex;
      padding: 10px 20px;
      .avatar-info-body-item{
        flex: 1;
        .avatar-info-body-item-title{
          text-align: center;
          color: gray;
        }
        .avatar-info-body-item-content{
          text-align: center;
          font-weight: 700;
          font-size: 20px;
        }
      }
      .avatar-info-body-item:hover{
        cursor: pointer;
        .avatar-info-body-item-title,
        .avatar-info-body-item-content{
          color: #f60;
        }
      }
    }
    .avatar-info-footer{
      display: flex;
      justify-content: space-around;
      padding: 20px 0;
    }
  }
}
.avatar-info:hover{
  cursor:pointer;
}

</style>
