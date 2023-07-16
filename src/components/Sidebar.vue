<template>
  <div>
    사이드바 화면
    <nav>
      <router-link to="/">Home</router-link>
      <p></p>
      <router-link to="/question">Question</router-link>
      <p></p>
      <router-link to="/result">Result</router-link>
    </nav>
  </div>
</template>
  
<script>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

export default {
  name: 'SidebarComponent',
  setup() {
    
  }
};

</script>
  