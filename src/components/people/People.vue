<template>
  <div class="people">
    <div v-if="isLoaded">
      <div class="people-header">
        <div class="people-header-top">
          <div class="btn btn-white header-top-btn">
            上传封面图
          </div>
        </div>
        <div class="people-header-main">
          <div class="header-main-ava">
            <div class="header-main-ava-container">
              <img
                :src="userInfo!.avatar"
                alt=""
              >
            </div>
          </div>
          <div class="header-main-info">
            <div class="main-info-header">
              <span class="info-header-username">{{ username }}</span>
              <span class="info-header-slogan">{{ userInfo!.slogan }}</span>
            </div>
            <div class="main-info-body">
              <div class="info-body-not-collapse">
                <div class="body-not-collapse-item">
                  <ContactsFilled />
                  <span class="not-collapse-item-content">{{ userInfo!.profession }}</span>
                </div>
                <div class="body-not-collapse-item">
                  <ContactsFilled />
                  <span class="not-collapse-item-content">{{ userInfo!.educations?.length > 0 ? userInfo?.educations[0]!.school : "" }}</span>
                </div>
              </div>
            </div>
            <div class="main-info-footer">
              <div class="info-footer-left">
                <DownOutlined />{{ ` 查看详细资料` }}
              </div>
              <div class="info-footer-right">
                <div
                  class="btn btn-blue"
                  @click="editMyInfo"
                >
                  编辑个人资料
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="people-body">
        <div class="people-left">
          <PeopleMenu :username="(username as string)" />
          <router-view />
        </div>
        <div class="people-right">
          <Side />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '@/api'
import UserTypes from '@/types/user'

const userInfo = ref<UserTypes>()
const isLoaded = ref(false)

const route = useRoute()
const { username } = route.params
const router = useRouter()
onBeforeMount(() => {
  api.getUserInfoByName(username as string).then((res: any) => {
    userInfo.value = res.data.data
    isLoaded.value = true
  })
})
const editMyInfo = () => {
  router.push('/people/edit')
}
</script>

<style lang="less">
.people{
  width: 1000px;
  margin: 0 auto;
  padding-top: 60px;
  .people-header{
    width: 100%;
    margin-bottom: 15px;
    background-color: #fff;
    box-shadow: 0 1px 1px #e1e1e1,0 2px 1px #f5f5f5;
    .people-header-top{
      height: 130px;
      background-color: grey;
      position: relative;
      .header-top-btn{
        position: absolute;
        top: 15px;
        right: 15px;
      }
    }
    .people-header-main{
      display: flex;
      .header-main-ava{
        .header-main-ava-container{
          width: 180px;
          height: 180px;
          position: relative;
          img{
            position: absolute;
            top: -20px;
            left: 20px;
            width: 180px;
            height: 180px;
            border: 5px solid #fff;
            border-radius: 10px;
          }
        }
      }
    }
    .header-main-info{
      padding-left: 50px;
      flex: auto;
      .main-info-header{
        line-height: 55px;
        .info-header-username{
          font-size: 27px;
          font-weight: 700;
          margin-right: 20px;
        }
        .info-header-slogan{
          font-size: 18px;
          font-weight: 500;
        }
      }
      .main-info-body{
        .info-body-not-collapse{
          .body-not-collapse-item{
            line-height: 30px;
            .not-collapse-item-content{
              margin-left: 10px;
            }
          }
        }
        .info-body-collapse{
        }
      }
      .main-info-footer{
        display: flex;
        justify-content: space-between;
        .info-footer-left{
          color: grey;
        }
        .info-footer-right{
          padding-right: 20px;
        }
      }
    }
  }
  .people-body{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .people-left{
      width: 690px;
      height: fit-content;
      background-color: #fff;
      box-shadow: 0 1px 1px #e1e1e1,0 2px 1px #f5f5f5;
      padding: 10px;
      .people-center-header{
        font-size: 15px;
        font-weight: 600;
        border-bottom: 1px solid #eee;
        line-height: 30px;
      }
      .people-index{
        .people-index-item{
          border-bottom: 1px solid #eee;
          padding: 10px 0;
          .index-item-header{
            display: flex;
            justify-content: space-between;
            line-height: 30px;
            color: grey;
          }
          .index-item-body{
            .item-body-title{
              font-size: 18px;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}
</style>
