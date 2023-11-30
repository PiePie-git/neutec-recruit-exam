<template>
  <main>
    <navbar />
    <sidebar />
    <div class="view">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import navbar from './components/layout/nav-bar.vue'
import sidebar from './components/layout/sidebar.vue'
export default {
  components: {
    navbar,
    sidebar
  },
}
</script>
<style>
.view {
  width: 100%;
}
</style>
