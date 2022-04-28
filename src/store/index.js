import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const dataBase = {
  "page1": [
    { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
    { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
    { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 }
  ],
  "page2": [
    { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
    { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
    { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
  ],
}
const mutations = {
  setPaymentsListData(state, payload) {
    state.paymentsList = [...state.paymentsList, ...payload]
  },
  addDataToPaymentList(state, payload) {
    state.paymentsList.push(payload)
  },
  addDataToCategoryList(state, payload) {
    state.categoryList.push(payload)
  },
  setCategories(state, payload) {
    state.categoryList = payload
  },
}
const getters = {
  getPaymentList: state => state.paymentsList,
  getCategoryList: state => state.categoryList,
}

const actions = {
  fetchData({ commit }, page) {
    return new Promise((resolve) => {
      // имитируем работу с сетью, ставим задержку получения данных в 1 секунду
      setTimeout(() => {
        const items = dataBase[`page${page}`]
        resolve(items)
      }, 1000)
    })
      .then(res => {
        // запускаем изменение состояния через commit
        commit('setPaymentsListData', res)
      })
  },
  fetchCategoryList({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["Food", "Navigation", "Sport", "Education"])
      }, 1000)
    }).then(res => { commit('setCategories', res) })
  }
}
export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
  },
  getters,
  mutations,
  actions,
  // },
  // modules: {
  // }
})
