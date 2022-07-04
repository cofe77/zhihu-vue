<template>
  <div>
    <Header />
    <div class="question-main">
      <div v-if="isObjectEmpty(question)" class="Card">
        没有这个问题
      </div>
      <div v-if="!isObjectEmpty(question)">
        <div class="question-main-header Card">
          <div class="main-header-l">
            <div class="main-header-tag-section">
              {{
                question.tag
              }}
            </div>
            <div class="main-header-question-section">
              <div class="header-question-section-title">
                {{ question.title }}
              </div>
              <div class="header-question-section-body">
                <div
                  style="paddingTop:5, textIndent: 2 "
                  v-html="question.content"
                />
              </div>
            </div>
            <div class="main-header-meta-section">
              <button class="btn btn-primary meta-follow-btn">
                关注问题
              </button>
              <button class="btn btn-blue meta-answer-btn">
                写回答
              </button>
              <button class="btn btn-gray meta-invite-btn">
                邀请回答
              </button>
              <ul class="meta-info">
                <li>
                  <span class="meta-info-collect">
                    <svg
                      class="Zi Zi--Star Button-zi"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                    >
                      <path
                        d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
                        fillRule="evenodd"
                      />
                    </svg>好问题1212321
                  </span>
                </li>
                <li>
                  <span class="meta-info-comment">
                    <svg
                      class="Zi Zi--Comment Button-zi"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                    >
                      <path
                        d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"
                        fillRule="evenodd"
                      />
                    </svg>{{ "20条评论" }}
                  </span>
                </li>
                <li>
                  <span class="meta-info-share">
                    <svg
                      class="Zi Zi--Share Button-zi"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                    >
                      <path
                        d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"
                        fillRule="evenodd"
                      />
                    </svg>分享
                  </span>
                </li>
                <li>
                  <span class="meta-info-more">···</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="main-header-r">
            关注者
          </div>
        </div>
        <div class="question-main-body">
          <div class="question-main-body-l">
            <div v-if="answers !== null && answers?.length !== 0">
              <div class="question-main-body-l-header Card">
                查看全部 {{ question.answerCount }} 个回答
              </div>
              <div
                v-for="answer,index in answers"
                :key="index"
                class="question-main-body-l-body Card"
              >
                <div class="question-section-header">
                  <span class="question-section-author-ava">
                    <img
                      :src="answer.author.avatar"
                      alt="dd"
                    >
                  </span>
                  <div class="">
                    <span class="question-section-author-name">
                      {{ answer.author.authorName }}
                    </span>
                    <div class="question-section-author-slogan">
                      {{ answer.author.slogan }}
                    </div>
                  </div>
                </div>
                <span class="question-section-like">{{ answer.agreeCount }} 人赞同了该回答</span>
                <div class="question-section-body">
                  <div
                    :style="{ paddingTop: '5px', textIndent: '2' }"
                    v-html="answer.content"
                  />
                </div>
                <AnswerOperate
                  :is-fold="isFold"
                  :answer="answer"
                  :set-is-fold="setIsFold(true)"
                />
              </div>
            </div>
            <div
              v-if="answers === null || answers?.length === 0"
              class="question-main-body-l-header Card"
            >
              暂时没有回答
            </div>
          </div>
          <div class="question-main-body-r">
            <div class="question-main-body-r-ad">
              广告
            </div>
            <div class="question-main-body-r-author Card">
              关于作者
            </div>
            <div class="question-main-body-r- Card">
              被收藏
            </div>
            <div class="question-main-body-r- Card">
              相关问题
            </div>
            <div class="question-main-body-r- Card">
              相关推荐
            </div>
            <div class="question-main-body-r-ad">
              广告
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, onBeforeMount, ref } from 'vue'
import { isObjectEmpty } from '@/utils/tools'
import api from '@/api'
interface QuestionType {
  id: string,
  answers: [{
    id: string,
    author: {}
  }]
}
const props = defineProps<QuestionType>()
const { id } = toRefs(props)
const question = ref<QuestionType>({
  id: '',
  answers: [{
    id: '',
    author: {}
  }]
})

onBeforeMount(() => {
  api.getQuestionById(id.value).then(res => {
    console.log(res.data.data)
    if (res.data.data.title) {
      question.value = res.data.data
    }
  }).catch(err => {
    console.log(err)
  })
})
</script>

<style lang="less" scoped>
.question-main{
  display: block;
  position: relative;
  top: 60px;
  padding: 0 16px;
    .question-main-header{
        width: 1000px;
        margin: 0 auto;
        display: flex;
        .main-header-l{
            width: 650px;
            margin-right: 30px;
            .main-header-tag-section{
                display: flex;
                .main-header-tag{
                    height: 20px;
                    line-height: 20px;
                    border-radius: 999px;
                    font-size: 0.8rem;
                    padding: 5px 10px;
                    color: #06f;
                    background: rgba(0,102,255,.1);
                }
                .main-header-tag:not(:first-child){
                    margin-left: 5px;
                }
            }
            .main-header-question-section{
                .header-question-section-title{
                    font-size: 20px;
                    line-height: 40px;
                    font-weight: bold;
                }
                .header-question-section-body{
                    line-height: 24px;
                }
            }
            .main-header-meta-section{
                margin-top: 10px;
                .meta-follow-btn{
                }
                .meta-follow-btn{
                }
                .meta-follow-btn{
                }
            }
        }
    }
    .question-main-body{
        display: flex;
        flex-direction: row;
        width: 1000px;
        margin: 0 auto;
        margin-top: 10px;
        justify-content: space-between;
        .question-main-body-l{
            width: 694px;
            .question-main-body-l-header{
                text-align: center;
                color: #8590a6;
            }
            .question-main-body-l-body{
                margin: 10px 0;
                .question-section-header{
                    display: flex;
                    margin-bottom: 10px;
                    .question-section-author-ava{
                        width: 36px;
                        height: 36px;
                        margin-right: 10px;
                        img{
                            width: 100%;
                        }
                    }
                    .question-section-author-name{
                        font-size: 0.8rem;
                        line-height: 1rem;
                    }
                    .question-section-author-slogan{
                        font-size: 5px;
                        color: #646464;
                    }
                }
                .question-section-like{
                    font-size: 0.6rem;
                    line-height: 2rem;
                    color: #8590a6;
                }
            }
        }
        .question-main-body-r{
            width: 294px;
            .question-main-body-r-ad{
                box-shadow: 0 1px 1px #e1e1e1,0 2px 1px #f5f5f5;
            }
            .question-main-body-r-author{
                margin-top: 10px;
            }
            .question-main-body-r-{
                margin-top: 10px;
            }
        }
    }
}
</style>
