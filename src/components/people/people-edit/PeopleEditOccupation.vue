<template>
  <div class="edit-info-item">
    <div class="info-item-title">
      职业经历
    </div>
    <div class="info-item-body">
      <div
        v-if="!isOccupationEditShow"
        class="edit-flex"
      >
        <span
          class="people-edit-add"
          @click="isOccupationEditShow = true"
        ><PlusCircleOutlined class="add-icon" />添加职业经历</span>
      </div>
      <div
        v-else
        class="edit-flex"
      >
        <div class="occupation-input">
          <Input
            placeholder="公司或组织名称"
            :value="occupationNew?.organization"
            style="{marginRight: '20px'}"
            @change="handleInputOrganization"
          />
          <Input
            placeholder="您的职位（选填）"
            :value="occupationNew?.position"
            @change="handleInputPosition"
          />
        </div>
        <div class="item-body-edit-btn-inline">
          <div
            class="btn btn-primary people-edit-save-btn-inline"
            @click="handleSaveOccupation"
          >
            保存
          </div>
          <div
            class="btn btn-grey"
            @click="isOccupationEditShow = false"
          >
            取消
          </div>
        </div>
      </div>
      <div class="occupation-item-container">
        <div
          v-for="occupation,key in occupations"
          :key="key"
          class="occupation-item"
        >
          <div class="occupation-item-icon">
            <img
              src="occupation?.icon"
              alt=""
            >
          </div>
          <div class="occupation-item-info">
            <div class="occupation-info-content">
              {{ occupation?.organization }}·{{ occupation?.position }}
            </div>
          </div>
          <div class="occupation-item-close">
            <Popconfirm
              title="是否删除这一项？"
              on-confirm="() => onDeleteConfirm(occupation?.id)"
              ok-text="确认"
              cancel-text="取消"
            >
              ×
            </Popconfirm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { userInfoStore } from '@/store/store.js'
import OccupationsTypes from '@/types/occupations/index.js'
import { ref } from 'vue'

const occupations = userInfoStore().getOccupations
const isOccupationEditShow = ref(false)
const occupationNew = ref<OccupationsTypes>()
const handleInputOrganization = () => {

}
const handleInputPosition = () => {

}
const handleSaveOccupation = () => {

}
</script>

<style lang="less">

</style>
