import UserTypes from '@/types/user'
import { defineStore } from 'pinia'
import { SET_USER } from './constant'

const userInfoStore = defineStore('user', {
  state: ():{userInfo: UserTypes} => {
    return {
      userInfo: {} as UserTypes
    }
  },
  getters: {
    getUserInfo (state):UserTypes {
      return state.userInfo
    },
    getUserName (state):string {
      return state.userInfo.username
    },
    getUserId (state):string {
      return state.userInfo.id
    }
  },
  actions: {
    async [SET_USER] (userInfo: UserTypes) {
      console.log(userInfo)
      this.userInfo = { ...userInfo }
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        key: 'user'
      }
    ]
  }
})

const peopleMenuStore = defineStore('peopleMenu', {
  state: () => {
    return {
      currentMenu: 'index'
    }
  },
  getters: {
    getCurrentMenu (state):string {
      return state.currentMenu
    }
  },
  actions: {
    async setCurrentMenu (target:string) {
      this.currentMenu = target
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        key: 'peopleMenu'
      }
    ]
  }
})

export { userInfoStore, peopleMenuStore }
