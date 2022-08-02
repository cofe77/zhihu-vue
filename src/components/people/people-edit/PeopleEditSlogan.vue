<template>
  <div class="edit-info-item">
    <div class="info-item-title">
      一句话介绍
    </div>
    <div class="info-item-body">
      <div
        v-if="!isSloganEditShow"
        class="edit-flex"
      >
        <span class="item-body-content">{{ sloganNew }}</span>
        <span
          class="people-edit-write"
          @click="isSloganEditShow = true"
        ><EditFilled />修改</span>
      </div>
      <div v-else>
        <div class="slogan-input">
          <Input
            :value="sloganNew"
            @change="handleInputSlogan"
          />
        </div>
        <div class="item-body-edit-btn">
          <div
            class="btn btn-primary people-edit-save-btn"
            @click="handleSaveSlogan"
          >
            保存
          </div>
          <div
            class="btn btn-grey"
            @click="isSloganEditShow = false"
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
const isSloganEditShow = ref(false)
const sloganNew = ref('')
const handleInputSlogan = () => {

}
const handleSaveSlogan = () => {

}
</script>

<style lang="less">
.slogan-input{
  width: 400px;
}
</style>
