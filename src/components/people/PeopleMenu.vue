<template>
  <div class="people-body-menu">
    <ul>
      <li @click="setCurrent('index')">
        <PeopleMenuItem
          :to="`/people/${username}`"
          :on="current === 'index'"
        >
          动态 1
        </PeopleMenuItem>
      </li>
      <li @click="setCurrent('answers')">
        <PeopleMenuItem
          :to="`/people/${username}/answers`"
          :on="current === 'answers'"
        >
          回答 3
        </PeopleMenuItem>
      </li>
      <li @click="setCurrent('asks')">
        <PeopleMenuItem
          :to="`/people/${username}/asks`"
          :on="current === 'asks'"
        >
          提问 111
        </PeopleMenuItem>
      </li>
      <li @click="setCurrent('collections')">
        <PeopleMenuItem
          :to="`/people/${username}/collections`"
          :on="current === 'collections'"
        >
          收藏 111
        </PeopleMenuItem>
      </li>
      <li @click="setCurrent('following')">
        <PeopleMenuItem
          :to="`/people/${username}/following`"
          :on="current === 'following'"
        >
          关注 111
        </PeopleMenuItem>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { peopleMenuStore } from '@/store/store.js'
import { computed, toRefs } from 'vue'

interface PeopleMenuPropsType {
  username:string
}

const props = defineProps<PeopleMenuPropsType>()
const { username } = toRefs(props)

const store = peopleMenuStore()
const current = computed(() => store.getCurrentMenu)

const setCurrent = (target:string) => {
  store.setCurrentMenu(target)
}
</script>

<style lang="less">
.people-body-menu{
  border-bottom: 1px solid #EEEEEE;
  padding-bottom: 5px;
  ul{
    display: flex;
    margin: 0;
    li{
      margin-right: 24px;
      position: relative;
      .body-menu-item{
        font-size: 16px;
        line-height: 40px;
      }
      .body-menu-item-on{
        font-weight: 600;
      }
      .body-menu-item-on::after{
        content: "";
        width: 100%;
        height: 3px;
        background-color: #f60;
        position: absolute;
        bottom: -5px;
        left: 0;
      }
    }
  }
}
</style>
