<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/shared/AppHeader.vue'
import AppFooter from './components/shared/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <div class="app-content">
    <section class="app-content__main">
      <RouterView />
    </section>
    <AppFooter />
  </div>
</template>

<style scoped>
.app-content {
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
}

.app-content__main {
  flex-grow: 1;
}
</style>
