import { createRouter, createWebHistory } from 'vue-router'
import QuestionComponent from './components/Question.vue'
import ResultComponent from './components/Result.vue'
import HomeComponent from './App.vue'


const routes = [
  { path: '/', component: HomeComponent },
  { path: '/question', component: QuestionComponent },
  { path: '/result', component: ResultComponent }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
