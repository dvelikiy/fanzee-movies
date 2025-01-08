<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="app-header">
    <nav class="app-header__title">
      <RouterLink to="/"> Test Task </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  height: 100px;
  background-color: #292d32;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0 48px;
}

.app-header__title {
  font-size: 32px;
  font-weight: 700;
  line-height: 37.5px;

  a {
    color: white;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      color: white;
    }
  }
}
</style>
