<template>
  <div class="edit-info-item">
    <div class="info-item-title">
      性别
    </div>
    <div class="info-item-body">
      <div v-if="!isSexEditShow">
        <span class="item-body-content">{{ sexNew || "未知" }} </span>
        <span
          class="people-edit-edit"
          @click="isSexEditShow = true"
        ><EditFilled />修改</span>
      </div>
      <div v-else>
        <div class="info-header-input edit-sex-item">
          <el-radio-group
            v-model="sexNew"
            class="ml-4"
          >
            <el-radio
              label="1"
              size="large"
            >
              男
            </el-radio>
            <el-radio
              label="2"
              size="large"
            >
              女
            </el-radio>
          </el-radio-group>
        </div>
        <div class="item-body-edit-btn">
          <div
            class="btn btn-primary people-edit-save-btn"
            @click="handleSaveSex"
          >
            保存
          </div>
          <div
            class="btn btn-grey"
            @click="isSexEditShow = false"
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
const isSexEditShow = ref(false)
const sexNew = ref('')
const handleSaveSex = () => {

}
</script>

<style lang="less">

</style>
