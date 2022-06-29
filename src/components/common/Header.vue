<template>
  <div
    id="zhihu-header"
    class=""
  >
    <div class="navHeader">
      <div
        ref="navHeaderBox"
        :class="{
          'navHeaderBox':true,
          'navIsShow':isNavShow
        }"
      >
        <div class="navNoScroll">
          <a
            href="/"
            title="知乎"
          >
            <svg
              viewBox="0 0 64 30"
              fill="#0066FF"
              width="64"
              height="30"
            ><path d="M29.05 4.582H16.733V25.94h3.018l.403 2.572 4.081-2.572h4.815V4.582zm-5.207 18.69l-2.396 1.509-.235-1.508h-1.724V7.233h6.78v16.04h-2.425zM14.46 14.191H9.982c0-.471.033-.954.039-1.458v-5.5h5.106V5.935a1.352 1.352 0 0 0-.404-.957 1.378 1.378 0 0 0-.968-.396H5.783c.028-.088.056-.177.084-.255.274-.82 1.153-3.326 1.153-3.326a4.262 4.262 0 0 0-2.413.698c-.57.4-.912.682-1.371 1.946-.532 1.453-.997 2.856-1.31 3.693C1.444 8.674.28 11.025.28 11.025a5.85 5.85 0 0 0 2.52-.61c1.119-.593 1.679-1.502 2.054-2.883l.09-.3h2.334v5.5c0 .5-.045.982-.073 1.46h-4.12c-.71 0-1.39.278-1.893.775a2.638 2.638 0 0 0-.783 1.874h6.527a17.717 17.717 0 0 1-.778 3.649 16.796 16.796 0 0 1-3.012 5.273A33.104 33.104 0 0 1 0 28.74s3.13 1.175 5.425-.954c1.388-1.292 2.631-3.814 3.23-5.727a28.09 28.09 0 0 0 1.12-5.229h5.967v-1.37a1.254 1.254 0 0 0-.373-.899 1.279 1.279 0 0 0-.909-.37z" /><path d="M11.27 19.675l-2.312 1.491 5.038 7.458a6.905 6.905 0 0 0 .672-2.218 3.15 3.15 0 0 0-.28-2.168l-3.118-4.563zM51.449 15.195V5.842c4.181-.205 7.988-.405 9.438-.483l.851-.05c.387-.399.885-2.395.689-3.021-.073-.25-.213-.666-.638-.555a33.279 33.279 0 0 1-4.277.727c-2.766.321-3.97.404-7.804.682-6.718.487-12.709.72-12.709.72a2.518 2.518 0 0 0 .788 1.834 2.567 2.567 0 0 0 1.883.706c2.278-.095 5.598-.25 8.996-.41v9.203h-12.78c0 .703.281 1.377.783 1.874a2.69 2.69 0 0 0 1.892.777h10.105v7.075c0 .887-.464 1.192-1.231 1.214h-3.92a4.15 4.15 0 0 0 .837 1.544 4.2 4.2 0 0 0 1.403 1.067 6.215 6.215 0 0 0 2.71.277c1.36-.066 2.967-.826 2.967-3.57v-7.607h11.28c.342 0 .67-.135.91-.374.242-.239.378-.563.378-.902v-1.375H51.449z" /><path d="M42.614 8.873a2.304 2.304 0 0 0-1.508-.926 2.334 2.334 0 0 0-1.727.405l-.376.272 4.255 5.85 2.24-1.62-2.884-3.98zM57.35 8.68l-3.125 4.097 2.24 1.663 4.517-5.927-.375-.277a2.32 2.32 0 0 0-1.722-.452 2.327 2.327 0 0 0-1.536.896z" /></svg>
          </a>
          <div class="navNoScrollLink">
            <router-link
              class="navNoScrollLi"
              to="/"
            >
              首页
            </router-link>
            <router-link
              class="navNoScrollLi"
              to="/vip"
            >
              会员
            </router-link>
            <router-link
              class="navNoScrollLi"
              to="/explore"
            >
              发现
            </router-link>
            <router-link
              class="navNoScrollLi"
              to="/question/waiting"
            >
              等你来答
            </router-link>
          </div>
          <div class="header-search">
            <form
              action=""
              method="post"
            >
              <div class="search-label">
                <input
                  id="navSearchInput"
                  type="text"
                  class="navSearchInput"
                  placeholder="请输入要搜索的内容！"
                  @change="onChangeHandle"
                >
                <button
                  id="navSearchBtn"
                  class="navSearchBtn"
                  title="搜索"
                >
                  <span>
                    <svg
                      class="Zi Zi--Search SearchBar-searchIcon css-1dlt5yv"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                    ><path
                      d="M17.068 15.58a8.377 8.377 0 0 0 1.774-5.159 8.421 8.421 0 1 0-8.42 8.421 8.38 8.38 0 0 0 5.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 0 1-6.316-6.316 6.323 6.323 0 0 1 6.316-6.316 6.323 6.323 0 0 1 6.316 6.316 6.323 6.323 0 0 1-6.316 6.316z"
                      fillRule="evenodd"
                    /></svg>
                  </span>
                </button>
              </div>
            </form>
            <button
              id="publishNewQuestionBtn"
              class="publishNewQuestionBtn"
              @click="handlePublishNewQuestion"
            >
              提问
            </button>
          </div>
          <div class="user-nav-center">
            <el-popover
              placement="bottom"
              content="{<Notification"
              trigger="click"
            >
              <span class="user-nav-center-span">
                <svg
                  class="Zi Zi--Bell css-7dgah8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                ><path d="M4.523 15.076l.804-6.757a6.753 6.753 0 0 1 4.945-5.7 1.823 1.823 0 0 1 3.623 0 6.753 6.753 0 0 1 4.945 5.7l.804 6.757a2.293 2.293 0 0 0 1.712 2.108 1.093 1.093 0 0 1-.297 2.15H3.108a1.093 1.093 0 0 1-.297-2.15 2.293 2.293 0 0 0 1.712-2.108zM12.083 23a2.758 2.758 0 0 1-2.753-2.509.229.229 0 0 1 .232-.24h5.043a.229.229 0 0 1 .232.24 2.759 2.759 0 0 1-2.753 2.51z" /></svg>
                <div class="msg-mark">222</div>
              </span>
            </el-popover>
            <el-popover
              placement="bottom"
              content="{<PrivateMessage"
              trigger="click"
            >
              <span class="user-nav-center-span">
                <svg
                  class="Zi Zi--Comments css-7dgah8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                ><path
                  d="M11 2c5.571 0 9 4.335 9 8 0 6-6.475 9.764-11.481 8.022-.315-.07-.379-.124-.78.078-1.455.54-2.413.921-3.525 1.122-.483.087-.916-.25-.588-.581 0 0 .677-.417.842-1.904.064-.351-.14-.879-.454-1.171A8.833 8.833 0 0 1 2 10c0-3.87 3.394-8 9-8zm10.14 9.628c.758.988.86 2.009.86 3.15 0 1.195-.619 3.11-1.368 3.938-.209.23-.354.467-.308.722.12 1.073.614 1.501.614 1.501.237.239-.188.562-.537.5-.803-.146-1.495-.42-2.546-.811-.29-.146-.336-.106-.563-.057-2.043.711-4.398.475-6.083-.927 5.965-.524 8.727-3.03 9.93-8.016z"
                  fillRule="evenodd"
                /></svg>
                <div class="msg-mark">1</div>
              </span>
            </el-popover>
            <el-popover
              placement="bottom"
              content="{<UserCenterMore"
              trigger="click"
            >
              <span class="user-ava-span">
                <img
                  class="user-ava"
                  :src="userInfo.avatar"
                  alt=""
                >
              </span>
            </el-popover>
          </div>
        </div>
        <div class="navScroll">
          <a
            href="/"
            title="知乎"
          >
            <svg
              viewBox="0 0 64 30"
              fill="#0066FF"
              width="64"
              height="30"
            ><path d="M29.05 4.582H16.733V25.94h3.018l.403 2.572 4.081-2.572h4.815V4.582zm-5.207 18.69l-2.396 1.509-.235-1.508h-1.724V7.233h6.78v16.04h-2.425zM14.46 14.191H9.982c0-.471.033-.954.039-1.458v-5.5h5.106V5.935a1.352 1.352 0 0 0-.404-.957 1.378 1.378 0 0 0-.968-.396H5.783c.028-.088.056-.177.084-.255.274-.82 1.153-3.326 1.153-3.326a4.262 4.262 0 0 0-2.413.698c-.57.4-.912.682-1.371 1.946-.532 1.453-.997 2.856-1.31 3.693C1.444 8.674.28 11.025.28 11.025a5.85 5.85 0 0 0 2.52-.61c1.119-.593 1.679-1.502 2.054-2.883l.09-.3h2.334v5.5c0 .5-.045.982-.073 1.46h-4.12c-.71 0-1.39.278-1.893.775a2.638 2.638 0 0 0-.783 1.874h6.527a17.717 17.717 0 0 1-.778 3.649 16.796 16.796 0 0 1-3.012 5.273A33.104 33.104 0 0 1 0 28.74s3.13 1.175 5.425-.954c1.388-1.292 2.631-3.814 3.23-5.727a28.09 28.09 0 0 0 1.12-5.229h5.967v-1.37a1.254 1.254 0 0 0-.373-.899 1.279 1.279 0 0 0-.909-.37z" /><path d="M11.27 19.675l-2.312 1.491 5.038 7.458a6.905 6.905 0 0 0 .672-2.218 3.15 3.15 0 0 0-.28-2.168l-3.118-4.563zM51.449 15.195V5.842c4.181-.205 7.988-.405 9.438-.483l.851-.05c.387-.399.885-2.395.689-3.021-.073-.25-.213-.666-.638-.555a33.279 33.279 0 0 1-4.277.727c-2.766.321-3.97.404-7.804.682-6.718.487-12.709.72-12.709.72a2.518 2.518 0 0 0 .788 1.834 2.567 2.567 0 0 0 1.883.706c2.278-.095 5.598-.25 8.996-.41v9.203h-12.78c0 .703.281 1.377.783 1.874a2.69 2.69 0 0 0 1.892.777h10.105v7.075c0 .887-.464 1.192-1.231 1.214h-3.92a4.15 4.15 0 0 0 .837 1.544 4.2 4.2 0 0 0 1.403 1.067 6.215 6.215 0 0 0 2.71.277c1.36-.066 2.967-.826 2.967-3.57v-7.607h11.28c.342 0 .67-.135.91-.374.242-.239.378-.563.378-.902v-1.375H51.449z" /><path d="M42.614 8.873a2.304 2.304 0 0 0-1.508-.926 2.334 2.334 0 0 0-1.727.405l-.376.272 4.255 5.85 2.24-1.62-2.884-3.98zM57.35 8.68l-3.125 4.097 2.24 1.663 4.517-5.927-.375-.277a2.32 2.32 0 0 0-1.722-.452 2.327 2.327 0 0 0-1.536.896z" /></svg>
          </a>
          <div class="navScrollLink">
            <router-link
              class="navScrollLi"
              to="/follow"
            >
              关注
            </router-link>
            <router-link
              class="navScrollLi"
              to="/"
            >
              推荐
            </router-link>
            <router-link
              class="navScrollLi"
              to="/hot"
            >
              热榜
            </router-link>
            <router-link
              class="navScrollLi"
              to="/video"
            >
              视频
            </router-link>
          </div>
          <div class="nav-scroll-empty-content" />
          <div class="header-search-scroll">
            <form
              action=""
              method="post"
            >
              <div class="search-label-scroll">
                <input
                  id="navSearchInput2"
                  type="text"
                  class="navSearchInput-scroll"
                  placeholder="请输入要搜索的内容！"
                  @change="onChangeHandle"
                >
                <button
                  id="navSearchBtn2"
                  class="navSearchBtn-scroll"
                  title="搜索"
                >
                  <span>
                    <svg
                      class="Zi Zi--Search SearchBar-searchIcon css-1dlt5yv"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                    ><path
                      d="M17.068 15.58a8.377 8.377 0 0 0 1.774-5.159 8.421 8.421 0 1 0-8.42 8.421 8.38 8.38 0 0 0 5.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 0 1-6.316-6.316 6.323 6.323 0 0 1 6.316-6.316 6.323 6.323 0 0 1 6.316 6.316 6.323 6.323 0 0 1-6.316 6.316z"
                      fillRule="evenodd"
                    /></svg>
                  </span>
                </button>
              </div>
            </form>
            <button
              id="publishNewQuestionBtn2"
              class="publishNewQuestionBtn"
              @click="handlePublishNewQuestion"
            >
              提问
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElMessageBox } from 'element-plus'
import { computed, ref } from 'vue'
// import NewQuestionModal from '@/components/common/NewQuestionModal.vue'
import { useStore } from 'vuex'

const store = useStore()

const userInfo = computed(() => store.state.user)
const windowScrollTop = ref(0)
const lastWindowScrollTop = ref(0)
const isNavShow = ref(false)

function onChangeHandle (): void {
}

window.addEventListener('scroll', headerScroll)

function headerScroll (): void {
  windowScrollTop.value = document.documentElement.scrollTop || document.body.scrollTop
  console.log('windowScrollTop.value:' + windowScrollTop.value)
  console.log('lastWindowScrollTop.value:' + lastWindowScrollTop.value)
  isNavShow.value = !(windowScrollTop.value > lastWindowScrollTop.value)
  if (isNavShow.value === (windowScrollTop.value > lastWindowScrollTop.value)) {
    return
  } else {
    lastWindowScrollTop.value = windowScrollTop.value
  }
  console.log(isNavShow.value)
}

function handlePublishNewQuestion ():void {
  ElMessageBox({
    title: '提问',
    message: '<div>111<div>'
  }).then()
}
</script>

<style>
.navIsShow{
  top:0;
  transition: top 0.4s;
}
.navIsHidden{
  top:-48px;
  transition: top 0.4s ease-in-out;
}
.isShow{
  display: block;
}
.isHidden{
  display: none;
}
.border-bottom{
  border-bottom: 1px solid #FFFFFF;
}
#zhihu-header{
  background-color: white;
  box-shadow: 0 1px 1px #e1e1e1,0 2px 1px #f5f5f5;
  position: sticky;
  top: 0;
}
.navHeader{
  max-width: 1156px;
  min-width: 1000px;
  height: 51px;
  display: block;
  margin: 0 auto;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 30px;
}
.navNoScroll {
  max-width: 1120px;
  min-width: 1000px;
  display: flex;
  height: 51px;
  top:0;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
.navNoScroll>a{
  line-height: 51px;
  position: relative;
  display: inline-block;
}
.navNoScroll>a>svg{
  position: relative;
  transform: translate(0,27%);
}
.navNoScrollLink{
  display: flex;
  color: #0066FF;
  margin-left: 40px;
  flex-shrink: 0;
}
.navNoScrollLi{
  align-items: center;
  display: inline-block;
  margin-right: 30px;
  color: #76839b;
  font-size: 15px;
}
.header-search{
  display: flex;
  flex-grow: 1;
  height: 34px;
  flex-shrink: 0;
  padding: 0 90px;
}
.header-search>form{
  line-height: 30px;
  margin-right: 10px;
}
.search-label{
  height: 34px;
  border: 1px solid #e5e5e5;
  border-radius: 999px;
  line-height: 34px;
  background-color: #f6f6f6;
  padding: 0 15px;
  align-items: center;
}
.navSearchInput{
  width: 300px;
  height: 24px;
  outline: none;
  border: none;
  line-height: 24px;
  font-size: 14px;
  background-color: transparent;
}
.navSearchInput:focus{
  outline: none;
  border: none;
}
.navSearchBtn{
  background: transparent;
  border: none;
  display: inline-block;
  position: relative;
}
.publishNewQuestionBtn{
  width: 70px;
  line-height: 30px;
  background-color: #0066ff;
  border: 1px solid #0066ff;
  font-size: 16px;
  border-radius: 999px;
  outline: none;
  color: white;
  display: inline-block;
}
.user-nav-center{
  display: flex;
  flex-shrink: 0;
  flex-wrap: nowrap;
  align-items: center;
}
.user-nav-center-span{
  margin-right: 20px;
  margin-top: 5px;
  color: #76839b;
  position: relative;
  cursor: pointer;
}
.msg-mark{
  min-width: 16px;
  position: absolute;
  left: 10px;
  top: -7px;
  background-color: red;
  font-size: 11px;
  border-radius: 999px;
  color: white;
  text-align: center;
  outline: 3px solid transparent;
  line-height: 10px;
  padding: 3px;
}
.user-ava{
  width: 25px;
  height: 25px;
  cursor: pointer;
}
.user-center-more{
  width: 100px;
  position: fixed;
  top: 42px;
  right: 314px;
  z-index: 1000;
  display: none;
  opacity: 0;
  transition: 0.4s;
}
.user-center-more-hidden{
  top: 37px;
}
.user-center-section{
  width: 100px;
  padding: 5px 0;
}
.user-center-li{
  height: 36px;
  display: block;
  line-height: 36px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  padding: 0 10px;
}
.user-center-li:hover{
  background-color: rgba(18,18,18,.1);
}
.user-center-more-arrow{
  width: 0;
  height: 0;
  display: block;
  margin: 0 auto;
  border: 8px solid;
  border-color: transparent transparent white;
}
.navScroll{
  height: 48px;
  top: 48px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.navScroll>a{
  line-height: 51px;
  position: relative;
  display: inline-block;
}
.navScroll>a>svg{
  position: relative;
  transform: translate(0,27%);
}
.navScrollLink{
  display: flex;
  color: #0066FF;
  margin-left: 40px;
  flex-shrink: 0;
}
.navScrollLi{
  align-items: center;
  display: inline-block;
  margin-right: 30px;
}
.navScroll form{
  line-height: 48px;
  display: inline-block;
}
.navScroll>ul>li>a{
  color: #76839b;
  font-size: 15px;
}
.nav-scroll-empty-content{
  width: 360px;
  min-height: 1px;
}
.header-search-scroll{
  display: flex;
  flex-grow: 1;
  height: 34px;
  flex-shrink: 0;
  padding: 0 90px;
  justify-content: right;
}
.header-search-scroll>form{
  line-height: 30px;
  margin-right: 10px;
}
.search-label-scroll{
  border: 1px solid #e5e5e5;
  border-radius: 999px;
  line-height: 30px;
  background-color: #f6f6f6;
  padding: 0 15px;
  align-items: center;
}
.navSearchInput-scroll{
  width: 260px;
  height: 24px;
  outline: none;
  border: none;
  line-height: 24px;
  font-size: 14px;
  background-color: transparent;
}
.navSearchInput-scroll:focus{
  outline: none;
  border: none;
}
.navSearchBtn-scroll{
  background: transparent;
  border: none;
  display: inline-block;
  position: relative;
}
</style>
