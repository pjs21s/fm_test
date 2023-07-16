import { createStore } from 'vuex'
import questionsJson from '../static/json/questions'

export default createStore({
  state: {
    questions: questionsJson,
    userAnswers: [],
    loading: false
  },
  mutations: {
    setQuestions(state) {
      state.questions = questionsJson;
    },
    setLoading(state, status) {
      state.loading = status;
    },
    setUserAnswer(state, questions) {
      state.questions = questions;
    }
  },
  actions: {
    async loadQuestions({ commit }) {
      commit('setLoading', true);
      commit('setQuestions');
      commit('setLoading', false);
    }
  },
  getters: {
    allQuestion: state => state.questions,
    loading: state => state.loading
  }
});
