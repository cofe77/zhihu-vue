import { defineStore } from 'pinia'
import { SET_USER } from './constant'

const userInfoStore = defineStore('user', {
  state: () => {
    return {
      id: '',
      avatar: '',
      username: ''
    }
  },
  getters: {
    getUserInfo (state):string {
      return state.id
    },
    getUserName (state):string {
      return state.username
    }
  },
  actions: {
    async [SET_USER] (userInfo: any) {
      this.id = userInfo.id
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

export default userInfoStore
