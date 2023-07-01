import { createStore } from 'vuex'
import questions from '../static/json/questions'

export default createStore({
  state: {
    questions: [],
    userAnswers: [],
    loading: false  // add loading state
  },
  mutations: {
    setQuestions(state, questions) {
      state.questions = questions;
    },
    setLoading(state, status) {
      state.loading = status;
    },
    // ...other mutations
  },
  actions: {
    async loadQuestions({ commit }) {
      commit('setLoading', true);  // set loading to true before fetching data
      commit('setQuestions', questions);
      commit('setLoading', false);  // set loading to false after fetching data
    },
    // ...other actions
  },
  getters: {
    allQuestion: state => state.questions,
    loading: state => state.loading,  // add loading getter
    // ...other getters
  }
});
