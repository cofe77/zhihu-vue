<template>
  <div>
    <Header />
    <div class="home-container">
      <div class="home-left Card">
        <IndexVue />
      </div>
      <div class="home-right Card">
        <Sider />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/common/header/Header.vue'
import Sider from '@/components/common/Sider.vue'
import IndexVue from '@/components/home/Index.vue'

</script>

<style>
  .home-container{
    width: 1000px;
    margin: 0 auto;
    display: flex;
    padding-top: 20px;
    justify-content: space-between;
  }
  .home-left{
    width: 654px;
    margin-right: 10px;
  }
  .home-right{
    flex: auto;
  }
</style>
