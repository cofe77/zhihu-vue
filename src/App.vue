<template>
  <div>
    <div class="link">
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/about">
        About
      </router-link>
      <div class="link">
        red
      </div>
      <div class="link">
        <div class="a">
          red
        </div>
      </div>
    </div>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
.link {
  color: red;

  .a {
    border: 1px solid blue;
  }
}
</style>
