<template>
  <div>
    <Header />
    <div id="zhihu-body">
      <div class="waiting-main bd-l">
        <div class="waiting-mask" />
        <div class="waiting-header">
          <router-link to="/">
            <span class="header-router-link">
              <StarFilled />为你推荐
            </span>
          </router-link>
          <router-link to="/">
            <span class="header-router-link">
              <StarFilled />邀请回答
            </span>
          </router-link>
          <router-link to="/">
            <span class="header-router-link">
              <StarFilled />最新问题
            </span>
          </router-link>
          <router-link to="/">
            <span class="header-router-link">
              <StarFilled />人气问题
            </span>
          </router-link>
        </div>
        <div class="waiting-body">
          <div
            v-for="question in questions"
            :key="question?.id"
            class="question-unit"
          >
            <div class="question-unit-header">
              <img
                :src="question.author.avatar"
                alt=""
              >
              {{ question.author.username }} 的提问
              <span>{{ moment(question.updateTime).fromNow() }} 期待你的回答</span>
            </div>
            <div class="question-unit-body">
              <div class="unit-body-left">
                <router-link to="`/question/${question.id}`}">
                  {{ question.title }}
                </router-link>
              </div>
              <div
                class="btn btn-primary"
                @click="handleAnswer(question)"
              >
                <StarFilled /> 写回答
              </div>
            </div>
            <div class="question-unit-footer">
              22 小时前提问 · 210 回答 · 223 关注
            </div>
          </div>
        </div>
      </div>
      <Sider />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less">
.waiting-main{
    width: 650px;
    .waiting-mask{
        width: 650px;
        height: 20px;
        position: fixed;
        top: 60px;
        background-color: #f6f6f6;
        transform: translateY(-10px);
    }
    .waiting-header{
        display: flex;
        position: sticky;
        top: 60px;
        background-color: white;
        padding: 10px 0;
        .header-router-link{
            display: flex;
            line-height: 30px;
            background-color: rgba(133,144,166,.12);
            border-radius: 35px;
            align-items: center;
            padding: 0 10px;
            margin-left: 20px;
            color: #8590a6;
            p{
                align-items: center;
            }
        }
        .header-router-link:hover{
            background-color: rgba(0,102,255,.08);
        }
    }
    .waiting-body{
        padding: 15px;
        height: 1200px;
        .question-unit{
            padding: 15px 0;
            border-bottom: 1px solid rgb(235, 235, 235);
            .question-unit-header{
                img{
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    margin-right: 5px;
                }
                span{
                    margin-left: 5px;
                    color: gray;
                }
            }
            .question-unit-body{
                display: flex;
                justify-content: space-between;
                line-height: 30px;
                .unit-body-left{
                    font-size: 15px;
                }
            }
            .question-unit-footer{
                color: gray;
            }
        }
    }
}
</style>
