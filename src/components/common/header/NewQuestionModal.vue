<template>
  <el-form
    v-if="!publishSuccess"
    :model="form"
    label-position="top"
    size="default"
  >
    <el-form-item label="问题">
      <el-input v-model="form.title" />
    </el-form-item>
    <el-form-item label="标签">
      <el-input v-model="form.tag" />
    </el-form-item>
    <el-form-item label="问题描述">
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
        确认提问
      </el-button>
    </el-form-item>
  </el-form>
  <div v-if="publishSuccess">
    <el-result
      icon="success"
      title="提问成功"
    />
  </div>
</template>

<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css'
import api from '@/api'
import { reactive, onBeforeUnmount, ref, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import userInfoStore from '@/store/store'

const userInfo = userInfoStore()
const publishSuccess = ref(false)

// do not use same name with ref
const form = reactive({
  content: '',
  title: '',
  tag: ''
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
  api.newQuestion({
    authorId: userInfo.id,
    mainPic: '/api/static/media/1.b4b91e14.jpg',
    content: valueHtml.value,
    title: form.title,
    tag: form.tag
  }).then(res => {
    console.log(res)
    publishSuccess.value = true
  }).catch(err => {
    console.log(err)
  })
}
</script>

<style scoped>
.el-form-item__content{
  justify-content: flex-end;
}
</style>
