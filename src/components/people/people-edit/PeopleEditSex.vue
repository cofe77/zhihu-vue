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
              label="男"
              size="large"
            >
              男
            </el-radio>
            <el-radio
              label="女"
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
            @click="handleCancelEditSex"
          >
            取消
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import api from '@/api/index.js'
import { userInfoStore } from '@/store/store.js'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
const store = userInfoStore()
const id = store.getUserId
const sex = ref(store.getSex)
const isSexEditShow = ref(false)
const sexNew = ref(sex)
const handleCancelEditSex = () => {
  sexNew.value = sex.value
  isSexEditShow.value = false
}
const handleSaveSex = () => {
  api.updateUserSex({
    id,
    sex: sexNew.value
  }).then((res: any) => {
    if (res.data.status === 20031) {
      store.updateUserInfo()
      console.log('sex', sex)
      console.log('sexNew', sexNew.value)
      isSexEditShow.value = false
      ElMessage.success(res.data.msg)
    }
  }).catch((err: any) => {
    ElMessage.error(err.data.error)
  })
}
</script>

<style lang="less">

</style>
