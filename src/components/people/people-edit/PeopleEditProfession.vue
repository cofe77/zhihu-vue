<template>
  <div class="edit-info-item">
    <div class="info-item-title">
      所在行业
    </div>
    <div class="info-item-body">
      <div
        v-if="!isProfessionEditShow"
        class="edit-flex"
      >
        <span class="item-body-content">{{ professionNew }}</span>
        <span
          class="people-edit-add"
          @click="isProfessionEditShow = true"
        ><EditFilled class="add-icon" />修改</span>
      </div>
      <div
        v-else
        class="edit-flex"
      >
        <div class="profession-input">
          <Select
            :default-value="professionNew"
            style="{ width: 120 }"
            @change="handleProfessionChange"
          >
            <Option value="教育">
              教育
            </Option>
            <Option value="医学">
              医学
            </Option>
          </Select>
        </div>
        <div class="item-body-edit-btn">
          <div
            class="btn btn-primary people-edit-save-btn-inline"
            @click="handleSaveProfession"
          >
            保存
          </div>
          <div
            class="btn btn-grey"
            @click="isProfessionEditShow = false"
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
const isProfessionEditShow = ref(false)
const professionNew = ref('')
const handleProfessionChange = () => {

}
const handleSaveProfession = () => {

}
</script>

<style lang="less">

</style>
