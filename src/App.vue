<template>
  <div id="app">
    <sidebar-component/>
    <router-view></router-view>
  </div>
</template>

<script>
import SidebarComponent from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    'sidebar-component': SidebarComponent
  },
};
</script>
