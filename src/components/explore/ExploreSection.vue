<template>
  <div class="explore-section">
    <div class="explore-section-header">
      <span class="explore-section-icon">
        <el-icon>
          <QuestionFilled v-if="header === '好问题广场'" />
          <List v-if="header === '最新专题'" />
          <Orange v-if="header === '圆桌讨论'" />
          <StarFilled v-if="header === '热门收藏夹'" />
          <EditPen v-if="header === '专栏'" />
        </el-icon>
      </span>
      <span class="explore-section-title">{{ header }}</span>
    </div>
    <div class="explore-section-body">
      <slot />
    </div>
    <div class="explore-section-footer">
      <span class="explore-section-footer-text">{{ footer }}</span>
      <span class="explore-section-footer-icon"><RightOutlined /></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'
interface ExploreSectionTpye {
  header: string,
  footer: string
}
const props = defineProps<ExploreSectionTpye>()
const { header, footer } = toRefs(props)
</script>

<style lang="less" scoped>
.explore-section{
  margin-top: 20px;
  .explore-section-header{
    font-size: 23px;
    font-weight: 600;
    margin-bottom: 20px;
    .explore-section-icon{
      color: rgb(0, 102, 255);
      margin-right: 16px;
    }
  }
  .explore-section-body{
  }
  .explore-section-footer{
    width: fit-content;
    font-size: 15px;
    color: #8590a6;
    margin: 0 auto;
    line-height: 70px;
    cursor: pointer;
    .explore-section-footer-icon{
      font-size: 12px;
      margin-left: 5px;
    }
  }
}
</style>
