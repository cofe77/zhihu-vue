<template>
  <div class="edit-info-item">
    <div class="info-item-title">
      个人简介
    </div>
    <div class="info-item-body userDesc-input-container">
      <div
        v-if="!isUserDescEditShow"
        class="edit-flex"
      >
        <span class="item-body-content">{{ userDescNew }}</span>
        <span
          class="people-edit-write"
          @click="isUserDescEditShow = true"
        ><EditFilled />填写</span>
      </div>
      <div v-else>
        <div class="userDesc-input">
          <TextArea
            rows="7"
            :value="userDescNew"
            @change="handleInputUserDesc"
          />
        </div>
        <div class="item-body-edit-btn">
          <div
            class="btn btn-primary people-edit-save-btn"
            @click="handleSaveUserDesc"
          >
            保存
          </div>
          <div
            class="btn btn-grey"
            @click="isUserDescEditShow = false"
          >
            取消
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const isUserDescEditShow = ref(false)
const userDescNew = ref('')
const handleInputUserDesc = () => {

}
const handleSaveUserDesc = () => {

}
</script>

<style lang="less">

</style>
