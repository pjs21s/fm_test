<template>
  <div>
    질문 화면
    <div v-if="loading">Loading...</div>
    <ul v-else>
      <li v-for="question in questions" :key="question.id">
        {{ question.text }}
        <v-col v-if="question.answer.type == 'Slider'">
          <v-slider
            v-model="question.answer.score"
            :min="0"
            :max="20"
            :step="1"
            thumb-label
          ></v-slider>
        </v-col>
      </li>
    </ul>
    <v-btn @click="submitAnswer(questions)">저장</v-btn>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

export default {
  name: 'QuestionComponent',
  setup() {
    const router = useRouter()
    const store = useStore();
    const selectedAnswer = ref(null);

    const questions = computed(() => store.state.questions);
    const loading = computed(() => store.state.loading);

    onMounted(async () => {
      await store.dispatch('loadQuestions');
    });

    const submitAnswer = (questions) => {
      store.commit('setUserAnswer', {
        questions: questions
      });

      router.push({ path: '/result' })
    }
    
    return { questions, loading, selectedAnswer, submitAnswer};
  }
};

</script>
