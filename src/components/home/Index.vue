<template>
  <div>
    <div class="bd-header">
      <router-link
        class="bd-header-li"
        to="/follow"
      >
        关注
      </router-link>
      <router-link
        class="bd-header-li"
        to="/"
      >
        推荐
      </router-link>
      <router-link
        class="bd-header-li"
        to="/hot"
      >
        热榜
      </router-link>
      <router-link
        class="bd-header-li"
        to="/video"
      >
        视频
      </router-link>
    </div>
    <div
      class="bd-content"
    >
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
.bd-l{
  width: 694px;
  margin-right:10px;
  background-color: white;
  height: fit-content;
}

.bd-l::before{
  clear: both;
}

.bd-l::after{
  clear: both;
}

.bd-header{
  height: 60px;
  border-bottom: 1px solid #EEEEEE;

  background-color: white;
}
.bd-header-li{
  float: left;
  margin: 0 22px;
  line-height: 60px;
  font-size: 16px;
}
</style>
