<template>
  <div id="app">
    <question-component></question-component>
  </div>
</template>

<script>
import QuestionComponent from './components/Question.vue';

export default {
  name: 'App',
  components: {
    'question-component': QuestionComponent,
  },
};
</script>
