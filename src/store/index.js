import Vue from 'vue'
import Vuex from 'vuex'

import {conversation, currentUser} from "./chat-box/fixtures/mockAPI"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    messages: [], // in raw form
    currentUser: null
  },
  getters: {
    currentUserId (state) {
      return state.currentUser.id
    }
  },
  mutations: {
    setMessages (state, messages) {
      state.messages = messages
    },
    addNewMessage (state, message) {
      state.messages.push(message)
    },
    setCurrentUser (state, user) {
      state.currentUser = user
    }
  },
  actions: {
    getAndSetMessages ({commit}) {
      const fixtureMessages = JSON.parse(conversation)
      const _currentUser = JSON.parse(currentUser)
      commit('setMessages', fixtureMessages)
      commit('setCurrentUser', _currentUser)
    }
  }
})
