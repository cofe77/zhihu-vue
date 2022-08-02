<template>
  <div class="edit-info-item">
    <div class="info-item-title">
      居住地
    </div>
    <div class="info-item-body">
      <div
        v-if="!isAddressEditShow"
        class="edit-flex"
      >
        <span class="item-body-content">{{ addressNew }}</span>
        <span
          class="people-edit-add"
          @click="isAddressEditShow = true"
        ><PlusCircleOutlined class="add-icon" />添加居住地</span>
      </div>
      <div
        v-else
        class="edit-flex"
      >
        <div class="address-input">
          <Input
            :value="addressNew"
            @change="handleInputAddress"
          />
        </div>
        <div class="item-body-edit-btn">
          <div
            class="btn btn-primary people-edit-save-btn-inline"
            @click="handleSaveAddress"
          >
            保存
          </div>
          <div
            class="btn btn-grey"
            @click="isAddressEditShow = false"
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
const isAddressEditShow = ref(false)
const addressNew = ref('')
const handleInputAddress = () => {

}
const handleSaveAddress = () => {

}
</script>

<style lang="less">

</style>
