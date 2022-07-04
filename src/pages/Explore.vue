<template>
  <div>
    <Header />
    <div class="explore-content">
      <ExploreSection
        header="好问题广场"
        footer="查看更多好问题"
      >
        <div class="explore-question-square">
          <div class="question-square-item explore-card">
            <div class="question-square-item-header">
              近期热点
            </div>
            <div class="question-square-item-body">
              <div
                v-for="item,index in exploreData.square.latest"
                :key="index"
                class="square-item-hot"
              >
                <div class="hot-title">
                  <span
                    :class="{'hot-title-icon':true,'`hot-title-icon-${index + 1}`':true}"
                  >
                    {{ index + 1 }}
                  </span>
                  <router-link
                    class="hot-title-link"
                    to="/"
                  >
                    {{ item.title }}
                  </router-link>
                </div>
                <div class="hot-meta">
                  {{ item.viewCount }}{{ ` 浏览 · ` }}{{ item.followCount }}{{ ` 关注 · ` }}{{ item.answerCount }}{{ ` 回答` }}
                </div>
              </div>
            </div>
            <div class="question-square-item-footer">
              <span class="question-square-item-footer-text">查看全部热点问题</span>
              <span class="question-square-item-footer-icon">
                <RightOutlined />
              </span>
            </div>
          </div>
          <div class="question-square-item explore-card">
            <div class="question-square-item-header">
              潜力好问题
            </div>
            <div class="question-square-item-body">
              <div
                v-for="item,index in exploreData.square.potential"
                :key="index"
                class="square-item-hot"
              >
                <div class="hot-title">
                  <span :class="{'hot-title-icon':true,'`hot-title-icon-${index + 1}`':true}">{{ index + 1 }}
                  </span>
                  <router-link
                    class="hot-title-link"
                    to="/"
                  >
                    {{ item.title }}
                  </router-link>
                </div>
                <div class="hot-meta">
                  {{ item.viewCount }}{{ ` 浏览 · ` }}{{ item.followCount }}{{ ` 关注 · ` }}{{ item.answerCount }}{{ ` 回答` }}
                </div>
              </div>
            </div>
            <div class="question-square-item-footer">
              <span class="question-square-item-footer-text">查看全部潜力问题</span>
              <span class="question-square-item-footer-icon">
                <RightOutlined />
              </span>
            </div>
          </div>
        </div>
      </ExploreSection>
      <ExploreSection
        header="最新专题"
        footer="查看更多专题"
      >
        <div class="explore-latest-post">
          <div
            v-for="item,index in exploreData.post"
            :key="index"
            class="post-item explore-card"
          >
            <div class="post-item-img">
              <img
                :src="item.img"
                alt=""
              >
            </div>
            <div class="post-item-header">
              <div class="post-header-left">
                <div class="post-title">
                  {{ item.title }}
                </div>
                <div class="post-meta">
                  {{ item.updateTime }} 更新{{ item.viewCount }} 浏览
                </div>
              </div>
              <div class="post-header-right">
                <div class="post-btn">
                  关注专题
                </div>
              </div>
            </div>
            <div class="post-item-body">
              <div
                v-for="post,index in item.posts"
                :key="index"
                class="post-body-part"
              >
                <span class="post-part-keyword">{{ post.keyword }}</span>
                <span class="post-part-content">{{ post.content }}</span>
              </div>
            </div>
          </div>
        </div>
      </ExploreSection>
      <ExploreSection
        header="圆桌讨论"
        footer="查看更多圆桌"
      >
        <div class="explore-discuss">
          <div
            v-for="item,index in exploreData.discuss"
            :key="index"
            class="discuss-item explore-card"
          >
            <div class="discuss-header">
              <div class="discuss-background">
                <div
                  class="discuss-background-left"
                  :style="{ backgroundColor:`rgb(${item.background})` }"
                />
                <div class="discuss-background-right">
                  <div
                    class="discuss-background-img"
                    :style="{ backgroundImage:`url(${item.img})`,backgroundPosition:'center'}"
                  />
                  <div
                    class="discuss-background-img"
                    :style="{ background: `linear-gradient(to right, rgb(${item.background}) 0%, rgba(${item.background}, 0) 100%)` }"
                  />
                  <div
                    class="discuss-background-img"
                    style="{ background: `linear-gradient(to right, rgba(${item.background}, 0.5) 0%, rgba(${item.background}, 0) 100%)` }"
                  />
                </div>
              </div>
              <div class="discuss-header-content">
                <div class="discuss-content-left">
                  <div class="discuss-title">
                    {{ item.title }}
                  </div>
                  <div class="discuss-sub">
                    {{ item.sub }}
                  </div>
                  <div class="discuss-meta">
                    <div
                      v-for="guest,index1 in item.guests"
                      :key="index1"
                      class="discuss-people"
                    >
                      <img
                        :src="guest.ava"
                        alt=""
                      >
                    </div>
                    <div class="discuss-people-meta">
                      8 位嘉宾参与 | 16 人关注
                    </div>
                  </div>
                </div>
                <div class="discuss-content-right">
                  <div class="discuss-btn">
                    关注圆桌
                  </div>
                </div>
              </div>
            </div>
            <div class="discuss-body">
              <div
                v-for="discuss,index2 in item.discuss"
                :key="index2"
                class="discuss-part"
              >
                <div class="discuss-part-title">
                  {{ discuss.title }}
                </div>
                <div class="discuss-part-meta">
                  {{ discuss.answerCount }} 个回答
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExploreSection>
      <ExploreSection
        header="热门收藏夹"
        footer="查看更多收藏夹"
      >
        <div class="explore-hot-collection">
          <div
            v-for="item,index in exploreData.collect"
            :key="index"
            class="hot-collect-item explore-card"
          >
            <div class="hot-collect-header">
              <div class="collect-header-title">
                <div class="collect-title-text">
                  {{ item.title }}
                </div>
                <div class="collect-title-btn">
                  关注收藏夹
                </div>
              </div>
              <div class="collect-header-meta">
                <div class="collect-author">
                  <img
                    class="collect-author-ava"
                    :src="item.author.ava"
                    alt=""
                  >
                  <span class="collect-author-name">{{ item.author.name }}</span>
                  <span class="collect-author-create">创建</span>
                </div>
                <span class="collect-header-meta-follow">{{ item.author.followerCount }}人关注</span>
              </div>
            </div>
            <div class="hot-collect-body">
              <div
                v-for="collect,index in item.items"
                :key="index"
                class="collect-body-item"
              >
                <div class="collect-item-title">
                  {{ collect.title }}
                </div>
                <div class="collect-item-sub">
                  {{ collect.sub }}
                </div>
                <div class="collect-item-meta">
                  {{ `回答 ` }}{{ collect.agreeCount }}{{ ` 赞同 · ` }}{{ collect.commentCount }}{{ ` 评论` }}
                </div>
              </div>
            </div>
            <div class="hot-collect-footer">
              <span class="collect-footer-content">已收藏{{ item.collectedCount }}条内容</span>
              <span class="collect-footer-icon">
                <RightOutlined />
              </span>
            </div>
          </div>
        </div>
      </ExploreSection>
      <ExploreSection
        header="专栏"
        footer="查看更多专栏"
      >
        <div class="explore-column">
          <div
            v-for="item,index in exploreData.column"
            :key="index"
            class="column-item explore-card"
          >
            <div class="column-icon">
              <img
                :src="item.ava"
                alt=""
              >
            </div>
            <div class="column-name">
              {{ item.name }}
            </div>
            <div class="column-meta">
              {{ item.followerCount }}{{ ` 关注 · ` }}{{ item.postsCount }}{{ ` 文章` }}
            </div>
            <div class="column-desc">
              {{ item.desc }}
            </div>
            <div class="column-btn">
              进入专栏
            </div>
          </div>
        </div>
      </ExploreSection>
      <div class="explore-footer">
        刘看山·知乎指南·知乎协议·应用·工作·联系我们 © 2022 知乎
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import mockData from '@/mock/Explore'

const exploreData = mockData
</script>

<style lang="less" scoped>
.explore-content{
  padding-top: 75px;
  width: 1000px;
  margin: 0 auto;
  .explore-question-square{
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 490px);
    .question-square-item{
      padding: 20px;
      .question-square-item-header{
        font-size: 20px;
        font-weight: 600;
        border-bottom: 1px solid #eee;
        padding-bottom: 20px;
      }
      .question-square-item-body{
        .square-item-hot{
          margin-top: 16px;
          .hot-title{
            display: flex;
            align-items: baseline;
            .hot-title-icon{
              min-width: 18px;
              height: 18px;
              border-radius: 5px;
              text-align: center;
              line-height: 18px;
              color: #fff;
              margin-right: 5px;
            }
            .hot-title-icon-1{
              background-color: red;
            }
            .hot-title-icon-2{
              background-color: peru;
            }
            .hot-title-icon-3{
              background-color: burlywood;
            }
            .hot-title-icon-4{
              background-color: grey;
            }
            .hot-title-link{
              font-size: 15px;
              font-weight: 600;
              width: 420px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          .hot-meta{
            padding-left: 22px;
            font-size: 12px;
            color: grey;
            line-height: 24px;
          }
        }
      }
      .question-square-item-footer{
        width: fit-content;
        font-size: 13px;
        margin-top: 10px;
        color: #8590a6;
        line-height: 30px;
        cursor: pointer;
        .question-square-item-footer-icon{
          font-size: 12px;
          margin-left: 5px;
        }
      }
    }
  }
  .explore-latest-post{
    display: grid;
    grid-template-columns: repeat(2,490px);
    grid-gap: 20px;
    .post-item{
      .post-item-img{
        width: 490px;
        height: 200px;
        img{
          width: inherit;
        }
      }
      .post-item-header{
        display: flex;
        margin: 28px 22px 0 22px;
        padding-bottom: 28px;
        border-bottom: 1px solid #eee;
        align-items: center;
        .post-header-left{
          flex-grow: 1;
          flex-shrink: 1;
          .post-title{
            width: 330px;
            font-size: 20px;
            font-weight: 600;
          }
          .post-meta{
            font-size: 12px;
            color: grey;
          }
        }
        .post-header-right{
          flex: auto;
          flex-shrink: 0;
          margin-left: 30px;
          .post-btn{
            width: fit-content;
            color: #06f;
            font-weight: 600;
            line-height: 30px;
            padding: 0 20px;
            border-radius: 3px;
            background-color: rgba(0,102,255,.08);
          }
        }
      }
      .post-item-body{
        padding: 20px 22px;
        .post-body-part{
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          .post-part-keyword{
            background-color: #eee;
            font-size: 12px;
            color: #8590a6;
            margin-right: 15px;
            white-space: nowrap;
          }
          .post-part-content{
            flex: auto;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 38px;
            font-size: 15px;
          }
        }
      }
    }
  }
  .explore-discuss{
    display: grid;
    grid-template-columns: repeat(2,490px);
    grid-gap: 20px;
    .discuss-item{
      .discuss-header{
        position: relative;
        .discuss-background{
          display: flex;
          .discuss-background-left{
            width: 245px;
            height: 245px;
          }
          .discuss-background-right{
            width: 245px;
            height: 245px;
            position: relative;
            .discuss-background-img{
              width: 245px;
              height: 245px;
              position: absolute;
            }
          }
        }
        .discuss-header-content{
          width: 100%;
          position: absolute;
          top: 0;
          height: 245px;
          padding: 22px;
          display: flex;
          .discuss-content-left{
            width: 308px;
            .discuss-title{
              font-size: 20px;
              font-weight: 600;
              color: white;
              margin-top: 44px;
            }
            .discuss-sub{
              color: white;
              margin-top: 10px;
            }
            .discuss-meta{
              display: flex;
              margin-top: 20px;
              align-items: center;
              .discuss-people{
                margin-right: 8px;
                img{
                  width: 26px;
                  height: 26px;
                  border-radius: 3px;
                }
              }
              .discuss-people-meta{
                font-size: 12px;
                color: hsla(0,0%,100%,.6);
                margin-left: 3px;
              }
            }
          }
          .discuss-content-right{
            flex: auto;
            position: relative;
            .discuss-btn{
              position: absolute;
              width: fit-content;
              background-color: #fff;
              bottom: 0;
              right: 0;
              padding: 0 22px;
              line-height: 35px;
              color: rgb(118, 153, 168);
              border-radius: 3px;
            }
          }
        }
      }
      .discuss-body{
        padding: 0 22px 22px 22px;
        .discuss-part{
          margin-top: 17px;
          .discuss-part-title{
            font-size: 15px;
          }
          .discuss-part-meta{
            font-size: 12px;
            color: #999;
            line-height: 19px;
          }
        }
      }
    }
  }
  .explore-hot-collection{
    display: grid;
    grid-template-columns: repeat(2,490px);
    grid-gap: 20px;
    .hot-collect-item{
      padding: 22px;
      .hot-collect-header{
        border-bottom: 1px solid #ebebeb;
        padding-bottom: 20px;
        .collect-header-title{
          display: flex;
          justify-content: space-between;
          align-items: center;
          .collect-title-text{
            font-size: 20px;
            font-weight: 600;
          }
          .collect-title-btn{
            width: fit-content;
            color: #06f;
            font-weight: 600;
            line-height: 30px;
            padding: 0 20px;
            border-radius: 3px;
            background-color: rgba(0,102,255,.08);
          }
        }
        .collect-header-meta{
          display: flex;
          align-items: flex-end;
          margin-top: 10px;
          .collect-author{
            display: flex;
            align-items: flex-end;
            .collect-author-ava{
              width: 28px;
              height: 28px;
            }
            .collect-author-name{
              margin-left: 8px;
              font-size: 15px;
            }
            .collect-author-create{
              margin-left: 5px;
              font-size: 13px;
              color: #999;
              margin-right: 22px;
            }
          }
          .collect-header-meta-follow{
            position: relative;
            color: #999;
          }
          .collect-header-meta-follow::before{
            content: "";
            width: 2px;
            height: 18px;
            background-color: #eee;
            display: block;
            position: absolute;
            left: -11px;
            top: 2px;
          }
        }
      }
      .hot-collect-body{
        .collect-body-item{
          margin-top: 20px;
          .collect-item-title{
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .collect-item-sub{
            line-height: 26px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .collect-item-meta{
            font-size: 12px;
            color: #999;
            line-height: 25px;
          }
        }
      }
      .hot-collect-footer{
        margin-top: 20px;
        color: #8590a6;
        .collect-footer-content{
          font-weight: 600;
        }
        .collect-footer-icon{
          margin-left: 10px;
          font-size: 12px;
        }
      }
    }
  }
  .explore-column{
    display: grid;
    grid-template-columns: repeat(4,235px);
    grid-gap: 20px;
    .column-item{
      padding: 28px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      .column-icon{
        img{
          width: 80px;
          height: 80px;
          border-radius: 999px;
        }
      }
      .column-name{
        margin-top: 20px;
        font-size: 16px;
        font-weight: 600;
      }
      .column-meta{
        font-size: 12px;
        color: #999;
      }
      .column-desc{
        margin-top: 20px;
        height: 40px;
      }
      .column-btn{
        margin-top: 20px;
        width: fit-content;
        color: #06f;
        font-weight: 600;
        line-height: 34px;
        padding: 0 20px;
        border-radius: 3px;
        background-color: rgba(0,102,255,.08);
      }
    }
  }
  .explore-footer{
    color: #8590a6;
    line-height: 180px;
    text-align: center;
  }
  .explore-card{
    background-color: #fff;
    box-shadow: 0px 1px 3px rgb(18 18 18 / 20%);
    border-radius: 5px;
  }
}
</style>
