<template>
  <div>
    <Header />
    <div class="vip-content">
      <div class="vip-content-header">
        <el-carousel
          class="vip-carousel"
          height="500px"
        >
          <el-carousel-item
            v-for="item,index in vipData.carousel"
            :key="index"
            class="vip-carousel-item"
          >
            <img
              :src="item.src"
            >
          </el-carousel-item>
        </el-carousel>
        <div class="vip-subscribe-container">
          <div class="vip-subscribe">
            <div class="subscribe-header">
              <img
                src="/static/media/2.png"
                alt=""
                class="subscribe-ava"
              >
            </div>
            <div class="subscribe-body">
              <div class="subscribe-username">
                {{ "liminyi" }}
              </div>
              <div class="subscribe-discount-info">
                新会员首月仅9元<el-icon><ArrowRightBold /></el-icon>
              </div>
              <div class="subscribe-btn">
                立即开通
              </div>
            </div>
            <div class="subscribe-footer">
              <div class="subscribe-title">
                <span class="subscribe-title-line" />
                <span class="subscribe-title-dot" />
                <span class="subscribe-title-content">盐选会员尊享权益</span>
                <span class="subscribe-title-dot" />
                <span class="subscribe-title-line" />
              </div>
              <div class="subscribe-content">
                <div class="subscribe-content-item">
                  <div class="subscribe-content-item-icon">
                    <img
                      src="/static/media/2.png"
                      alt=""
                    >
                  </div>
                  <div class="subscribe-content-item-content">
                    <div class="subscribe-content-item-title">
                      内容特权
                    </div>
                    <div class="subscribe-content-item-sub">
                      盐选专栏、电子书<br>等价值百万内容
                    </div>
                  </div>
                </div>
                <div class="subscribe-content-item">
                  <div class="subscribe-content-item-icon">
                    <img
                      src="/static/media/2.png"
                      alt=""
                    >
                  </div>
                  <div class="subscribe-content-item-content">
                    <div class="subscribe-content-item-title">
                      功能特权
                    </div>
                    <div class="subscribe-content-item-sub">
                      卡片贴纸、评论表情<br>等超多专属特权
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vip-nav">
        <div class="vip-nav-left">
          <div class="vip-nav-left-item">
            <div class="vip-nav-left-title">
              盐选专栏
            </div>
            <div class="vip-nav-left-translate">
              VIP COLUMN
            </div>
          </div>
          <div class="vip-nav-left-item">
            <div class="vip-nav-left-title">
              读书会
            </div>
            <div class="vip-nav-left-translate">
              BOOK CLUB
            </div>
          </div>
          <div class="vip-nav-left-item">
            <div class="vip-nav-left-title">
              Live 讲座
            </div>
            <div class="vip-nav-left-translate">
              LIVE LECTURE
            </div>
          </div>
          <div class="vip-nav-left-item">
            <div class="vip-nav-left-title">
              杂志
            </div>
            <div class="vip-nav-left-translate">
              MAGAZINE
            </div>
          </div>
        </div>
        <div class="vip-nav-right">
          <div class="vip-nav-right-item">
            科学
          </div>
          <div class="vip-nav-right-item">
            科学
          </div>
          <div class="vip-nav-right-item">
            科学
          </div>
          <div class="vip-nav-right-item">
            科学
          </div>
          <div class="vip-nav-right-item">
            科学
          </div>
          <div class="vip-nav-right-item">
            科学
          </div>
          <div class="vip-nav-right-item">
            科学
          </div>
          <div class="vip-nav-right-item">
            科学
          </div>
          <div class="vip-nav-right-item">
            科学
          </div>
          <div class="vip-nav-right-item">
            科学
          </div>
          <div class="vip-nav-right-item">
            科学
          </div>
          <div class="vip-nav-right-item">
            科学
          </div>
          <div class="vip-nav-right-item">
            科学
          </div>
          <div class="vip-nav-right-item">
            更多…
          </div>
        </div>
      </div>
      <div class="vip-strip" />
      <div class="vip-content-body">
        <div class="vip-body-rank">
          <div class="vip-body-header">
            <div class="vip-body-header-left">
              <div class="vip-body-header-title">
                VIP 榜单
              </div>
              <div class="vip-body-header-nav">
                <div
                  class="nav-tab"
                  @mouseenter="setType('hot')"
                >
                  热度榜
                </div>
                <div
                  class="nav-tab nav-tab-hover"
                  @mouseenter="setType('tech')"
                >
                  技能榜
                </div>
                <div
                  class="nav-tab"
                  @mouseenter="setType('story')"
                >
                  故事榜
                </div>
                <div
                  class="nav-tab"
                  @mouseenter="setType('live')"
                >
                  Live 榜
                </div>
              </div>
            </div>
            <div class="vip-body-header-right">
              <div class="vip-body-header-link">
                查看全部<el-icon><ArrowRightBold /></el-icon>
              </div>
            </div>
          </div>
          <div class="vip-body-main">
            <div class="vip-first-item">
              <div class="vip-first-item-img">
                <VIPRankItem :src="vipRankData?.rankList[0]?.img">
                  <el-icon><Headset /></el-icon>
                  <span>{{ vipRankData.rankList[0]?.cornerMark }}</span>
                </VIPRankItem>
              </div>
              <div class="first-item-main">
                <div class="first-item-main-title">
                  {{ vipRankData.rankList[0]?.title }}
                </div>
                <div class="first-item-main-sub">
                  {{ vipRankData.rankList[0]?.sub }}
                </div>
                <div class="first-item-main-author">
                  <img
                    :src="vipRankData.rankList[0]?.author.ava"
                    alt=""
                  >
                  <span>作者：{{ vipRankData.rankList[0]?.author.name }}</span>
                </div>
              </div>
              <div class="first-item-order">
                01
              </div>
              <div class="first-item-nav">
                <div class="first-item-nav-item first-item-nav-disable">
                  <el-icon><ArrowLeftBold /></el-icon>
                </div>
                <div class="first-item-nav-item first-item-nav-hover">
                  <el-icon><ArrowRightBold /></el-icon>
                </div>
              </div>
            </div>
            <div class="vip-item-swiper">
              <div
                v-for="item,index in vipRankData.rankList"
                :key="index"
                class="vip-swiper-item"
              >
                <div class="vip-swiper-item-header">
                  <div class="vip-swiper-item-img">
                    <VIPRankItem
                      :src="item.img"
                      :vip="item.vip"
                    >
                      <span>{{ item.cornerMark }}</span>
                    </VIPRankItem>
                  </div>
                  <div class="vip-swiper-item-main" />
                  <div class="vip-swiper-item-order">
                    0{{ index + 2 }}
                  </div>
                </div>
                <div class="vip-swiper-item-body">
                  <div class="vip-swiper-item-title">
                    {{ item.title }}
                  </div>
                  <div class="vip-swiper-item-sub">
                    {{ item.sub }}
                  </div>
                </div>
                <div class="vip-swiper-item-footer">
                  <img
                    :src="item.author.ava"
                    alt=""
                  >
                  <span>作者：{{ item.author.name }}</span>
                </div>
              </div>
            </div>
            <div class="vip-famous-people">
              <div class="vip-famous-people-header">
                <div class="vip-body-header-title">
                  大咖驾到
                </div>
              </div>
              <div class="vip-famous-people-body">
                <div class="vip-famous-people-items">
                  <div
                    v-for="star,index in vipRankData.superStar"
                    :key="index"
                    class="vip-famous-people-item"
                  >
                    <div class="vip-star-ava">
                      <img
                        :src="star.ava"
                        alt=""
                      >
                    </div>
                    <div class="vip-star-name">
                      {{ star.name }}
                    </div>
                  </div>
                </div>
                <div class="vip-famous-people-flag">
                  <span />
                </div>
                <div class="vip-famous-people-content">
                  <div
                    v-for="writing,index in vipRankData.superStar[0]?.writings"
                    :key="index"
                    class="vip-famous-people-content-item"
                  >
                    <div class="vip-famous-people-content-item-img">
                      <VIPRankItem
                        :src="writing.img"
                        :vip="writing.vip"
                      >
                        <span>{{ writing.cornerMark }}</span>
                      </VIPRankItem>
                    </div>
                    <div class="vip-famous-people-content-item-title">
                      {{ writing.title }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="vip-all-list">
              <div class="vip-all-list-header">
                <div class="vip-all-list-title">
                  大家都在看
                </div>
              </div>
              <div class="vip-all-list-body">
                <div
                  v-for="item,index in vipRankData.recommend"
                  :key="index"
                  class="vip-all-list-body-item"
                >
                  <div class="vip-list-item-header">
                    {{ item.title }}
                  </div>
                  <div class="vip-list-item-body">
                    <div class="vip-list-item-img">
                      <VIPRankItem
                        :src="item.img"
                        :vip="item.vip"
                      >
                        <span style="{ fontSize:'14px' }">{{ item.cornerMark }}</span>
                      </VIPRankItem>
                    </div>
                    <div class="vip-list-item-right">
                      <div class="vip-list-item-content">
                        {{ item.sub }}
                      </div>
                      <div class="vip-list-item-meta">
                        {{ item.meta }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vip-body-mybook">
          <div class="vip-body-header">
            <div class="vip-body-header-left">
              <div class="vip-body-header-title">
                我的书架
              </div>
            </div>
            <div class="vip-body-header-right">
              <div class="vip-body-header-link">
                前往书架<el-icon><ArrowRightBold /></el-icon>
              </div>
            </div>
          </div>
          <div class="vip-mybook-body">
            <div
              v-for="book,index in vipData.books"
              :key="index"
              class="vip-mybook-book"
            >
              <div class="vip-mybook-book-img">
                <VIPRankItem :src="book.img">
                  <span style="{ fontSize:'12px' }">{{ book.cornerMark }}</span>
                </VIPRankItem>
              </div>
              <div class="vip-mybook-book-right">
                <div class="vip-mybook-book-title">
                  {{ book.title }}
                </div>
                <div class="vip-mybook-book-progress">
                  已读 {{ book.progress }}
                </div>
                <div class="vip-mybook-book-update">
                  更新到第{{ book.update }}节
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import mockData from '@/mock/VIP'
import { ref, computed } from 'vue'

type vipRankType = keyof typeof mockData.rank

const vipData = mockData
const type = ref('hot')
const vipRankData = computed(() => mockData.rank[type.value as vipRankType])

const setType = (targetType: string) => {
  type.value = targetType
}

</script>

<style lang="less" scoped>
.vip-content{
  min-width: 1200px;
  .vip-content-header{
    position: relative;
    .vip-carousel{
      min-width: 1000px;
      .vip-carousel-item{
        height: 500px;
        img{
          width: 100%;
          height: 500px;}
      }
      .slick-dots{
        li{
          width: 15px;
          button{
            width: 10px;
            height: 10px;
            border-radius: 10px;
          }
        }
        .slick-active{
          width: 15px;
        }
      }
    }
    .ant-carousel .slick-prev,
    .ant-carousel .slick-prev:hover {
      left: 10px;
      z-index: 2;
      color: white;
      font-size: 20px;
      height: 30px;
    }

    .ant-carousel .slick-next,
    .ant-carousel .slick-next:hover {
      right: 30px;
      z-index: 2;
      color: white;
      font-size: 20px;
      height: 30px;
    }
    .vip-subscribe-container{
      width: 1100px;
      position: absolute;
      z-index: 9;
      top: 0;
      left: 50%;
      margin-left: -500px;
      .vip-subscribe{
        width: 300px;
        border-radius: 5px;
        background-color: #fff;
        float: right;
        margin-top: 50px;
        padding: 0 15px 15px 15px;
        .subscribe-header{
          .subscribe-ava{
            width: 50px;
            height: 50px;
            border-radius: 999px;
            margin: 0 auto;
            display: block;
            margin-top: -17px;
          }
        }
        .subscribe-body{
          text-align: center;
          .subscribe-username{
            margin-top: 5px;
            font-size: 16px;
            font-weight:700;
            line-height: 30px;
          }
          .subscribe-discount-info{
            font-size: 12px;
            color: #ce994f;
          }
          .subscribe-btn{
            width: 260px;
            height: 32px;
            background: linear-gradient(98deg,#f8e2c4,#f3bb6c);
            margin: 10px auto;
            line-height: 32px;
            cursor: pointer;
            border-radius: 999px;
            color: #754e19;
          }
          .subscribe-btn:hover{
            background: linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.1)),linear-gradient(98deg,#f8e2c4,#f3bb6c);
          }
        }
        .subscribe-footer{
          .subscribe-title{
            color: #ce994f;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .subscribe-title-line{
              content: "";
              width: 50px;
              height: 1px;
              background-color: #ce994f;
              display: inline-block;
            }
            .subscribe-title-content{
              margin: 20px;
              font-size: 12px;
            }
            .subscribe-title-dot{
              width: 4px;
              height: 4px;
              border-radius: 999px;
              background-color: #ce994f;
              display: inline-block;
            }
          }
          .subscribe-content{
            display: flex;
            justify-content: space-between;
            .subscribe-content-item{
              display: flex;
              .subscribe-content-item-icon{
                margin-right: 10px;
                img{
                  width: 20px;
                  height: 20px;
                }
              }
              .subscribe-content-item-content{
                .subscribe-content-item-title{
                  font-size: 12px;
                  font-weight: 600;
                  color: #754e19;
                }
                .subscribe-content-item-sub{
                  font-size: 6px;
                  color: grey;
                }
              }
            }
          }
        }
      }
    }
  }
  .vip-nav{
    width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 20px 0;
    .vip-nav-left{
      display: flex;
      flex: 1;
      .vip-nav-left-item{
        flex: 1;
        text-align: center;
        margin-right: 60px;
        cursor: pointer;
        .vip-nav-left-title{
          font-size: 16px;
        }
        .vip-nav-left-translate{
          font-size: 10px;
        }
      }
      .vip-nav-left-item:hover{
        color: #ce994f;
      }
    }
    .vip-nav-right{
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      .vip-nav-right-item{
        width: 78px;
        cursor: pointer;
      }
      .vip-nav-right-item:hover{
        color: #ce994f;
      }
    }
  }
  .vip-strip{
    height: 10px;
    background-color: #EEE;
  }
  .vip-content-body{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    padding: 30px 0;
    .vip-body-rank{
      width: 830px;
      .vip-body-main{
        .vip-first-item{
          width: 100%;
          height: 220px;
          position: relative;
          z-index: 0;
          .vip-first-item-img{
            width: 150px;
            height: 190px;
            position: absolute;
            z-index: 3;
            left: 16px;
            top: 20px;
          }
          .first-item-main{
            width: 514px;
            height: 150px;
            background-color: #dbaf72;
            position: absolute;
            padding-left: 180px;
            bottom: 0;
            color: #fff;
            .first-item-main-title{
              font-size: 16px;
              line-height: 50px;
            }
            .first-item-main-sub{
              font-size: 12px;
            }
            .first-item-main-author{
              margin-top: 40px;
              display: flex;
              align-items: center;
              img{
                width: 20px;
                height: 20px;
                border-radius: 999px;
              }
              span{
                margin-left: 10px;
                font-size: 12px;
              }
            }
          }
          .first-item-order{
            width: 70px;
            height: 70px;
            position: absolute;
            right: 80px;
            top: 40px;
            font-size: 35px;
            line-height: 70px;
            font-weight: 600;
            border: 2px solid #754e19;
            color: #754e19;
            text-align: center;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          }
          .first-item-nav{
            position: absolute;
            right: 0;
            bottom: 0;
            display: flex;
            width: 40px;
            justify-content: space-between;
            .first-item-nav-item{
              width: 18px;
              height: 18px;
              font-size: 10px;
              line-height: 14px;
              text-align: center;
              background-color: #754e19;
              color: white;
              cursor: pointer;
            }
            .first-item-nav-disable{
              opacity: 0.3;
            }
            .first-item-nav-hover{
            }
          }
        }
        .vip-item-swiper{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          .vip-swiper-item{
            width: 170px;
            margin-right: 34px;
            .vip-swiper-item-header{
              position: relative;
              height: 180px;
              .vip-swiper-item-img{
                width: 105px;
                height: 140px;
                position: absolute;
                left: 10px;
                top: 20px;
                z-index: 3;
              }
              .vip-swiper-item-main{
                width: 95px;
                height: 130px;
                position: absolute;
                left: 27px;
                top: 37px;
                background-color: #dbaf72;
              }
              .vip-swiper-item-order{
                font-size: 26px;
                position: absolute;
                right: 0;
                top: 20px;
                color: #754e19;
                font-weight: 600;
              }
            }
            .vip-swiper-item-body{
              .vip-swiper-item-sub{
                font-size: 12px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: grey;
              }
            }
            .vip-swiper-item-footer{
              margin-top: 10px;
              display: flex;
              align-items: center;
              img{
                width: 20px;
                height: 20px;
                border-radius: 999px;
              }
              span{
                margin-left: 10px;
                font-size: 12px;
              }
            }
          }
        }
        .vip-famous-people{
          margin-top: 30px;
          .vip-famous-people-header{
            .vip-body-header-title{
              font-size: 18px;
              font-weight: 600;
              display: flex;
              align-items: center;
              margin-right: 28px;
            }
            .vip-body-header-title::before{
              content: "";
              height: 20px;
              width: 3px;
              background-color: #ce994f;
              margin-right: 15px;
            }
          }
          .vip-famous-people-body{
            margin-top: 15px;
            .vip-famous-people-items{
              display: flex;
              flex-wrap: wrap;
              .vip-famous-people-item{
                width: 80px;
                margin-right: 33px;
                .vip-star-ava{
                  width: fit-content;
                  margin: 0 auto;
                  cursor: pointer;
                  img{
                    width: 70px;
                    height: 70px;
                    border-radius: 999px;
                  }
                }
                .vip-star-name{
                  height: 36px;
                  text-align: center;
                  line-height: 36px;
                  border-radius: 999px;
                  cursor: pointer;
                  color: grey;
                  background-color: #fff;
                  transform: translateY(-10px);
                }
                .vip-star-name:hover{
                  background-color: #ce994f;
                  color: #fff;
                }
              }
            }
            .vip-famous-people-flag{
              height: 2px;
              background-color: #ce994f;
              position: relative;
              span{
                width: 0px;
                height: 0px;
                position: absolute;
                bottom: 2px;
                left: 30px;
                border: 4px solid #ce994f;
                border-top-color: transparent;
                border-left-color: transparent;
                border-right-color: transparent;
                border-bottom-color: #ce994f;
              }
            }
            .vip-famous-people-content{
              margin-top: 15px;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              .vip-famous-people-content-item{
                width: 142px;
                margin-right: 16px;
                margin-bottom: 10px;
                .vip-famous-people-content-item-img{
                  width: 142px;
                  height: 200px;
                }
                .vip-famous-people-content-item-title{
                  margin-top: 10px;
                  font-size: 15px;
                  padding-left: 3px;
                  display: -webkit-box;
                  /* autoprefixer: ignore next */
                  -webkit-box-orient:vertical;
                  /* autoprefixer: on */
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
              .vip-famous-people-content-item:nth-child(5n){
                margin-right: 0;
              }
            }
            .vip-famous-people-content::after{
              content: "";
              flex: auto;
            }
          }
        }
        .vip-all-list{
          margin-top: 30px;
          .vip-all-list-header{
            .vip-all-list-title{
              font-size: 18px;
              font-weight: 600;
              display: flex;
              align-items: center;
              margin-right: 28px;
            }
            .vip-all-list-title::before{
              content: "";
              height: 20px;
              width: 3px;
              background-color: #ce994f;
              margin-right: 15px;
            }
          }
          .vip-all-list-body{
            .vip-all-list-body-item{
              .vip-list-item-header{
                font-size: 18px;
                line-height: 50px;
              }
              .vip-list-item-body{
                display: flex;
                .vip-list-item-img{
                  width: 190px;
                  height: 120px;
                  margin-right: 20px;
                }
                .vip-list-item-right{
                  flex: auto;
                  min-width: 0;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  .vip-list-item-content{
                    display: -webkit-box;
                    /* autoprefixer: ignore next */
                    -webkit-box-orient:vertical;
                    /* autoprefixer: on */
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  }
                  .vip-list-item-meta{
                    color: #ce994f;
                  }
                }
              }
            }
          }
        }
      }
    }
    .vip-body-mybook{
      height: fit-content;
      flex: auto;
      margin-left: 20px;
      position: sticky;
      top: 60px;
      .vip-mybook-body{
        height: 300px;
        overflow-y: scroll;
        overflow-x: hidden;
        .vip-mybook-book{
          display: flex;
          margin-bottom: 10px;
          .vip-mybook-book-img{
            width: 80px;
            height: 110px;
            margin-right: 10px;
          }
          .vip-mybook-book-right{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .vip-mybook-book-title{
              font-size: 15px;
            }
            .vip-mybook-book-progress{
              font-size: 12px;
            }
            .vip-mybook-book-update{
              font-size: 12px;
              color: grey;
            }
          }
        }
      }
    }
    .vip-body-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
      padding-bottom: 18px;
      .vip-body-header-left{
        display: flex;
        align-items: center;
        .vip-body-header-title{
          font-size: 18px;
          font-weight: 600;
          display: flex;
          align-items: center;
          margin-right: 28px;
        }
        .vip-body-header-title::before{
          content: "";
          height: 20px;
          width: 3px;
          background-color: #ce994f;
          margin-right: 15px;
        }
        .vip-body-header-nav{
          display: flex;
          .nav-tab{
            margin-right: 24px;
            font-size: 15px;
            cursor: pointer;
          }
          .nav-tab-hover::after{
            content: "";
            height: 2px;
            background-color: #ce994f;
            display: block;
          }
          .nav-tab-hover:hover{
            color: #ce994f;
          }
        }
      }
      .vip-body-header-right{
        .vip-body-header-link{
          font-size: 12px;
          color: grey;
        }
      }
    }

  }
}
</style>
