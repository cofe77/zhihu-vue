<template>
  <div class="edit-info-item">
    <div class="info-item-title">
      教育经历
    </div>
    <div class="info-item-body">
      <div v-if="!isEducationEditShow">
        <div
          class="people-edit-add"
          @click="isEducationEditShow = true"
        >
          <PlusCircleOutlined class="add-icon" />添加教育经历
        </div>
      </div>
      <div v-else>
        <div class="edu-edit-form-top">
          <Space size="middle">
            <Input
              placeholder="学校或教育机构名"
              style="{ width:'190px'}"
              @change="handleSchoolInput"
            />
            <Input
              placeholder="专业方向（选填）"
              style="{ width:'190px'}"
              @change="handleMajorInput"
            />
            <Select
              placeholder="学历"
              style="{ width:'190px'}"
              @change="handleDgreeChange"
            >
              <Option
                v-for="(v,k) in Array.from(new Array(6).keys()).slice(1).reverse()"
                :key="k"
                :value="v"
              >
                {{ dgreesData[v] }}
              </Option>
            </Select>
          </Space>
        </div>
        <div>
          <Space size="middle">
            <Select
              placeholder="入学年份"
              style="{ width:'190px'}"
              @change="handleHireChange"
            >
              <Option
                v-for="v,k in Array.from(new Array(2023).keys()).slice(1950).reverse()"
                :key="k"
                :value="v"
              >
                {{ v }}
              </Option>
            </Select>
            <Select
              placeholder="毕业年份"
              style="{ width:'190px'}"
              @change="handleGraduChange"
            >
              <Option
                v-for="v,k in Array.from(new Array(2023).keys()).slice(1950).concat(0).reverse()"
                :key="k"
                :value="v"
              >
                {{ v === 0 ? "至今" : v }}
              </Option>
            </Select>
            <div
              class="btn btn-primary people-edit-save-btn"
              @click="handleSaveEducation"
            >
              保存
            </div>
            <div
              class="btn btn-grey"
              @click="isEducationEditShow = false"
            >
              取消
            </div>
          </Space>
        </div>
      </div>
      <div class="edu-item-container">
        <div
          v-for="education,key in educations"
          :key="key"
          class="edu-item"
        >
          <div class="edu-item-icon">
            <img
              src="/static/media/2.png"
              alt=""
            >
          </div>
          <div class="edu-item-info">
            <div class="edu-info-date">
              {{ education?.hireTime }}年-{{ education?.graduTime }}年
            </div>
            <div class="edu-info-school">
              {{ education?.school }}{{ education?.dgree && " · " + dgreesData[education?.dgree] }}
            </div>
          </div>
          <div class="edu-item-close">
            <Popconfirm
              title="是否删除这一项？"
              on-confirm="onDeleteConfirm(education?.id)"
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
import EducationTypes from '@/types/education/index.js'
import { ref, toRefs } from 'vue'

const dgreesData: { [key: number]: string } = {
  1: '高中及以下',
  2: '大专',
  3: '本科',
  4: '硕士',
  5: '博士及以上'
}

const props = defineProps<{
  educations: EducationTypes[]
}>()
const { educations } = toRefs(props)

const isEducationEditShow = ref(false)
const handleSchoolInput = () => {

}
const handleMajorInput = () => {

}
const handleDgreeChange = () => {

}
const handleHireChange = () => {

}
const handleGraduChange = () => {

}
const handleSaveEducation = () => {

}
</script>

<style lang="less">

</style>
