<template>
  <div>
    <el-form
      v-if="!answerSuccess"
      :model="form"
      label-position="top"
      size="default"
    >
      <el-form-item label="问题">
        <p>{{ question.title }}</p>
      </el-form-item>
      <el-form-item label="问题描述">
        <div v-html="question.content" />
      </el-form-item>
      <el-form-item label="您的回答">
        <div style="border: 1px solid #ccc">
          <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editorRef"
            :default-config="toolbarConfig"
            mode="default"
          />
          <Editor
            v-model="valueHtml"
            style="height: 300px; overflow-y: hidden;"
            :default-config="editorConfig"
            mode="default"
            @on-created="handleCreated"
          />
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >
          提交
        </el-button>
      </el-form-item>
    </el-form>
    <div v-if="answerSuccess">
      <el-result
        icon="success"
        title="提问成功"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, shallowRef, onBeforeUnmount, toRefs } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css'
import api from '@/api'
import userInfoStore from '@/store/store'
import { QuestionTypes } from '@/types/question'

const props = defineProps<{question:QuestionTypes}>()
const { question } = toRefs(props)
console.log('question', question)

const userInfo = userInfoStore()
const answerSuccess = ref(false)
const form = reactive({
  content: ''
})
const editorRef = shallowRef()
// 内容 HTML
const valueHtml = ref('')
// 模拟 ajax 异步获取内容
// onMounted(() => {
//   setTimeout(() => {
//     valueHtml.value = '<p>请输入问题描述</p>'
//   }, 1500)
// })
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
const onSubmit = () => {
  api.newAnswer({
    authorId: userInfo.id,
    content: valueHtml.value
  }).then(res => {
    console.log(res)
    answerSuccess.value = true
  }).catch(err => {
    console.log(err)
  })
}
</script>

<style lang="less">

</style>
