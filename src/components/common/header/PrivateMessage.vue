<template>
  <div class="private-message">
    <div class="private-message-header">
      我的私信
    </div>
    <div class="private-message-body">
      <div class="private-message-section">
        <div
          v-for="item,key in Array.from(new Array(10))"
          :key="key"
          class="private-message-item"
        >
          <div class="private-message-ava">
            <img
              src="/static/media/2.png"
              alt=""
            >
          </div>
          <div class="private-message-content">
            <div class="private-message-user-info">
              <div class="private-message-username">
                创作者小助手
              </div>
              <div class="private-message-authentication">
                <CheckCircleFilled />
              </div>
            </div>
            <div class="private-message-text">
              被困在家中的这段时间，你的生活除了变得细致缓慢，还发生了哪些变化？
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="private-message-footer">
      <div class="private-message-write-new">
        <EditFilled /><span>写新私信</span>
      </div>
      <div class="private-message-view-all">
        查看全部私信
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less">
.private-message{
  width: 360px;
  .private-message-header{
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid #ebebeb;
    cursor: pointer;
  }
  .private-message-header:hover{
    color: #8590a6;
  }
  .private-message-body{
    .private-message-section{
      height: 350px;
      overflow-y: scroll;
      overflow-x: hidden;
      .private-message-item{
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        .private-message-ava{
          img{
            width: 40px;
            height: 40px;
            border-radius: 5px;
          }
        }
        .private-message-content{
          flex: 1;
          overflow: hidden;
          margin-left: 15px;
          .private-message-user-info{
            display: flex;
            align-items: center;
            .private-message-username{
              font-size: 15px;
            }
            .private-message-authentication{
              margin-left: 10px;
              color: rgb(0, 102, 255);
              line-height: 15px;
            }
          }
          .private-message-text{
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: #8590a6;
          }
        }
      }
      .private-message-item:hover{
        background-color: #ebebeb;
      }
    }
  }
  .private-message-footer{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    color: #8590a6;
    border-top: 1px solid #ebebeb;
  }
}
</style>
