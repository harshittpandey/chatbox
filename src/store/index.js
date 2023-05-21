import Vue from 'vue'
import Vuex from 'vuex'

import {conversation, currentUser} from "./chat-box/fixtures/mockAPI"
import { MESSAGE_STATUS } from "@/store/constants"

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
      state.messages = [
        ...state.messages,
        message
      ]
    },
    updateMessage (state, message) {
      const idx = state.messages.findIndex(m => m.id === message.id)
      state.messages.splice(idx, 1, message)
    },
    setCurrentUser (state, user) {
      state.currentUser = user
    }
  },
  actions: {
    getAndSetMessages ({commit}) {
      const fixtureMessages = JSON.parse(conversation)
      commit('setMessages', fixtureMessages)
    },
    getAndSetCurrentUser ({commit}) {
      const _currentUser = JSON.parse(currentUser)
      commit('setCurrentUser', _currentUser)
    },
    sendNewMessage ({commit}, {message}) {
      commit('addNewMessage', message)
      setTimeout(() => {
        const randomChanceToFail = Math.floor(Math.random() * 10) <= 2
        let updatedMessage = { ...message }
        if (randomChanceToFail) {
          updatedMessage.status = MESSAGE_STATUS.FAILED
        } else {
          delete updatedMessage.status
        }
        commit('updateMessage', updatedMessage)
      }, 500)
    }
  }
})
