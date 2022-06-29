import { createStore } from 'vuex'
import { SET_USER } from './constant'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      user: {
        avatar: ''
      }
    }
  },
  mutations: {
    [SET_USER] (state, userInfo) {
      state.user = { ...userInfo }
    }
  },
  actions: {
    [SET_USER] (context, userInfo) {
      context.commit(SET_USER, userInfo)
    }
  }
})

export default store
