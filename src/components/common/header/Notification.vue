<template>
  <div class="nitification">
    <div class="notificationHeader">
      <div
        :class="{'notification-icon':true,'notification-icon-active':currentNotification === 'default'}"
        @click="setCurrentNotification('default')"
      >
        <div
          class="i-mdi-format-list-bulleted w-6 h-6 mx-auto"
        />
      </div>
      <el-divider
        direction="vertical"
        class="notificationHeader-divider"
      />
      <div
        :class="{'notification-icon':true,'notification-icon-active':currentNotification === 'follow'}"
        @click="setCurrentNotification('follow')"
      >
        <div
          class="i-mdi-account-multiple w-6 h-6 mx-auto"
        />
      </div>
      <el-divider
        direction="vertical"
        class="notificationHeader-divider"
      />
      <div
        :class="{'notification-icon':true,'notification-icon-active':currentNotification === 'vote'}"
        @click="setCurrentNotification('vote')"
      >
        <div
          class="i-mdi-heart w-6 h-6 mx-auto"
        />
      </div>
    </div>
    <div class="notificationBody">
      <div
        v-if="currentNotification === 'default'"
        class="default-notification"
      >
        <div
          v-for="item,key in Array.from(new Array(10))"
          :key="key"
          class="default-notification-item"
        >
          <span>
            <span class="notification-item-actor"><a href="">某某某</a></span>
            <span class="notification-item-actor"><a href="">某某某</a></span>
            <span class="notification-item-actor"><a href="">某某某</a></span>
            <span class="notification-item-actor"><a href="">某某某</a></span>
          </span>&nbsp;回答了问题&nbsp;
          <span class="notification-item-target"><a href="">夏天特别热，晚上如何早睡？</a></span>
        </div>
      </div>
      <div
        v-if="currentNotification === 'follow'"
        class="follow-notification"
      >
        <div class="follow-notification-header">
          这些人最近关注了你
        </div>
        <div>
          <div
            v-for="item,key in Array.from(new Array(10))"
            :key="key"
            class="follow-notification-item"
          >
            <div class="follow-item-ava">
              <img
                src="/media/2.png"
                alt=""
              >
            </div>
            <div class="follow-item-name">
              百合
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="currentNotification === 'vote'"
        class="vote-notification"
      >
        <div
          v-for="item,key in Array.from(new Array(10))"
          :key="key"
          class="vote-notification-item"
        >
          <span>
            <span class="notification-item-actor"><a href="">某某某</a></span>
            <span class="notification-item-actor"><a href="">某某某</a></span>
            <span class="notification-item-actor"><a href="">某某某</a></span>
            <span class="notification-item-actor"><a href="">某某某</a></span>
          </span>&nbsp;赞同了你的回答&nbsp;
          <span class="notification-item-target"><a href="">夏天特别热，晚上如何早睡？</a></span>
        </div>
      </div>
    </div>
    <div class="notificationFooter">
      <div class="notification-setting">
        <div
          class="i-mdi-cog w-18px h-18px inline-block align-sub"
        />
        <span class="notification-setting-text">设置</span>
      </div>
      <div class="notification-view-all">
        查看全部通知
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const currentNotification = ref('default')
const setCurrentNotification = (target:string) => {
  currentNotification.value = target
}
</script>

<style lang="less">
.nitification{
  width: 400px;
  .notificationHeader{
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    text-align: center;
    background-color: #fff;
    cursor: pointer;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    justify-content: space-evenly;
    .notification-icon{
      width: 120px;
      font-size: 20px;
      line-height: 16px;
      color: #8590a6;
    }
    .notification-icon-active{
      color: #06f;
    }
    .notificationHeader-divider{
      height: 24px;
    }
  }
  .notificationBody{
    width: 100%;
    height: 350px;
    border-bottom: 1px solid #eee;
    .default-notification{
      height: 350px;
      overflow-y: scroll;
      padding: 0 15px;
      .default-notification-item{
        padding: 12px 0;
        border-bottom: 1px solid #eee;
      }
    }
    .follow-notification{
      height: 350px;
      overflow-y: scroll;
      .follow-notification-header{
        text-align: center;
        color: #8590a6;
        line-height: 50px;
        border-bottom: 1px solid #ebebeb;
        margin: 0 15px;
      }
      .follow-notification-item{
        display: flex;
        align-items: center;
        padding: 15px;
        cursor: pointer;
        .follow-item-ava{
          img{
            width: 42px;
            height: 42px;
            border-radius: 5px;
          }
        }
        .follow-item-name{
          margin-left: 10px;
          font-weight: 600;
        }
      }
      .follow-notification-item:hover{
        background-color: #ebebeb;
      }
    }
    .vote-notification{
      height: 350px;
      overflow-y: scroll;
      padding: 0 15px;
      .vote-notification-item{
        padding: 12px 0;
        border-bottom: 1px solid #eee;
      }
    }
    a{
      color: #144583;
    }
    .notification-item-actor:not(:last-child)::after{
      content: "、";
      color: #144583;
    }
  }
  .notificationFooter{
    background-color: #fff;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #8590a6;
    padding: 0 20px;
    .notification-setting{
      cursor: pointer;
      .notification-setting-text{
        margin-left: 6px;
      }
    }
    .notification-view-all{
      cursor: pointer;
    }
  }
}
</style>
