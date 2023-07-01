<template>
  <div>
    <div v-if="loading">Loading...</div>  <!-- show loading text when loading -->
    <ul v-else>
      <li v-for="question in questions" :key="question.id">
        {{ question.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'QuestionComponent',
  setup() {
    const store = useStore();

    const questions = computed(() => store.state.questions);
    const loading = computed(() => store.state.loading);  // get loading state

    onMounted(async () => {
      await store.dispatch('loadQuestions');
    });
    return { questions, loading };
  },
};
</script>
