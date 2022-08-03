<template>
  <div class="people-edit-container">
    <div class="people-edit">
      <div class="people-edit-header">
        <div class="btn btn-white edit-header-btn">
          上传封面图
        </div>
      </div>
      <div class="people-edit-body">
        <div class="edit-body-ava">
          <div class="ava-container">
            <img
              :src="userInfo?.avatar"
              alt=""
            >
          </div>
        </div>
        <div class="edit-body-info">
          <PeopleEditHeader />
          <div class="edit-info-body">
            <PeopleEditSex />
            <PeopleEditSlogan />
            <PeopleEditAddress />
            <PeopleEditProfession />
            <PeopleEditOccupation @should-update="shouldUpdate" />
            <PeopleEditEdu @should-update="shouldUpdate" />
            <div class="edit-info-item">
              <div class="info-item-title">
                个人认证
              </div>
              <div class="info-item-content">
                <router-link
                  to="/"
                  style="{{'color':'#175199'}}"
                >
                  申请个人认证
                </router-link>
              </div>
            </div>
            <PeopleEditDesc />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { userInfoStore } from '@/store/store.js'

const store = userInfoStore()
const { userInfo } = store

const shouldUpdate = () => {

}

</script>

<style lang="less">
.people-edit-container{
  padding-top: 80px;
  padding-bottom: 100px;
  .people-edit{
    width: 1000px;
    margin: 0 auto;
    box-shadow: 0 0 3px #e1e1e1,0 0 3px #f5f5f5;
    .people-edit-header{
      height: 230px;
      position: relative;
      .edit-header-btn{
        position: absolute;
        top: 20px;
        right: 20px;
      }
    }
    .people-edit-body{
      background-color: #fff;
      display: flex;
      .edit-body-ava{
        width: 220px;
        .ava-container{
          position: relative;
          cursor: pointer;
          img{
            position: absolute;
            top: -20px;
            left: 20px;
            width: 160px;
            border-radius: 10px;
            border: 5px solid #fff;
          }
        }
      }
      .edit-body-info{
        flex: auto;
        .edit-info-body{
          .edit-info-item{
            border-bottom: 1px solid #eee;
            display: flex;
            align-items: baseline;
            .info-item-title{
              width: 140px;
              font-size: 16px;
              font-weight: 600;
              line-height: 80px;
            }
            .info-item-body{
              .item-body-content{}
            }
            .edit-flex{
              display: flex;
              align-items: center;
            }
          }
          .edit-info-item:last-child{
            border-bottom: none;
          }
          .edit-info-item:hover{
            .people-edit-edit{
              display: inline-block;
            }
          }
        }
      }
    }
    .people-edit-edit{
      display: flex;
      align-items: center;
      font-size: 15px;
      line-height: 30px;
      display: none;
      color: #175199;
      cursor: pointer;
    }
    .people-edit-write{
      display: flex;
      align-items: center;
      font-size: 15px;
      color: #175199;
      cursor: pointer;
    }
    .people-edit-add{
      display: flex;
      align-items: center;
      font-size: 15px;
      color: #175199;
      cursor: pointer;
      transform: translateY(0px);
      .add-icon{
        font-size: 18px;
      }
    }
    .item-body-edit-btn{
      display: flex;
      padding: 20px 0;
    }
    .item-body-edit-btn-inline{
      display: flex;
    }
    .people-edit-save-btn{
      margin-right: 20px;
    }
    .people-edit-save-btn-inline{
      margin: 0 20px;
    }
  }
}
</style>
