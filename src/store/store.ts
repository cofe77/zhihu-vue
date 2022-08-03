import api from '@/api'
import EducationTypes from '@/types/education'
import OccupationsTypes from '@/types/occupations'
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
    },
    getNick (state):string {
      return state.userInfo.nick
    },
    getSex (state):string {
      return state.userInfo.sex
    },
    getOccupations (state):OccupationsTypes[] {
      return state.userInfo.occupations
    },
    getEducations (state):EducationTypes[] {
      return state.userInfo.educations
    }
  },
  actions: {
    async [SET_USER] (userInfo: UserTypes) {
      this.userInfo = { ...userInfo }
    },
    async updateUserInfo () {
      api.getUserInfoById(this.userInfo.id).then(res => {
        this.userInfo = { ...res.data.data }
      })
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
