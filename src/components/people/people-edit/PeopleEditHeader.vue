<template>
  <div class="edit-info-header">
    <div class="info-header">
      <div class="info-header-main">
        <div
          v-if="!isNickEditShow"
          class="edit-info-header-item"
        >
          <span class="header-main-content">{{ nickNew }}</span>
          <span
            class="people-edit-edit-nick"
            @click="isNickEditShow = true"
          >
            <div class="i-mdi-pencil w-5 h-5 inline-block" />
            修改
          </span>
        </div>
        <div
          v-else
          class="edit-info-header-item"
        >
          <div class="info-header-item-title">
            用户名
          </div>
          <div class="info-header-item-body">
            <div class="info-header-input">
              <el-input
                v-model="nickNew"
                size="large"
              />
            </div>
            <div class="info-header-btn">
              <div
                class="btn btn-primary people-edit-save-btn"
                @click="handleSaveNick"
              >
                保存
              </div>
              <div
                class="btn btn-grey"
                @click="handleCancelEditNick"
              >
                取消
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="info-header-back"
        @click="router.go(-1)"
      >
        返回我的主页 <RightOutlined />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import api from '@/api/index.js'
import { userInfoStore } from '@/store/store.js'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const userStore = userInfoStore()
const id = userStore.getUserId
const nick = ref(userStore.getNick)
const isNickEditShow = ref(false)
const nickNew = ref(nick)
const handleCancelEditNick = () => {
  nickNew.value = nick.value
  isNickEditShow.value = false
}
const handleSaveNick = () => {
  api.updateNick({
    id,
    nick: nickNew.value
  }).then((res: any) => {
    if (res.data.status === 20031) {
      userStore.updateUserInfo()
      ElMessage.success(res.data.msg)
      isNickEditShow.value = false
    }
  }).catch((err: any) => {
    ElMessage.error(err)
  })
}
</script>

<style lang="less">
.edit-info-header{
  border-bottom: 1px solid #eee;
  .info-header{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    .info-header-main{
      display: flex;
      align-items: baseline;
      .edit-info-header-item{
        display: flex;
        align-items: baseline;
        line-height: 80px;
        .info-header-item-title{
          width: 140px;
          font-size: 16px;
          font-weight: 600;
        }
        .info-header-item-body{
          width: 440px;
          .info-header-btn{
            display: flex;
            padding: 0 0 20px 0;
          }
        }
      }
      .edit-info-item:last-child{
        border-bottom: none;
      }
      .edit-info-item:hover{
        .people-edit-edit{
          display: inline-block;
        }
      }
      .header-main-content{
        font-size: 26px;
        font-weight: 700;
        line-height: 50px;
        margin-right: 30px;
      }
      .people-edit-edit-nick{
        font-size: 15px;
        color: #175199;
        cursor: pointer;
      }
    }
    .info-header-back{
      padding-right: 20px;
      cursor: pointer;
    }
  }
}
</style>
