import { api } from '@/services.js'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    false: false,
    usuario: {
      id: "",
      nome: "",
      emai: "",
      senha: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
    }
  },
  getters: {
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload)
    }
  },
  actions: {
    getUsuario(context, payload) {
      api.get(`/usuario/${payload}`).then(response => {
        context.commit("UPDATE_USUARIO", response.data)
        context.commit("UPDATE_LOGIN", true)
      })
    }
  },
  modules: {
  }
})
