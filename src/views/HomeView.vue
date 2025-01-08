<script setup lang="ts">
import MovieCard from '@/components/shared/MovieCard.vue'
import { ref, computed, onMounted } from 'vue'

const cardList = ref([])

const cardListLimited = computed(() => cardList.value.slice(0, 16))

const fetchCardList = async () => {
  return fetch('/data/list.json')
    .then((response) => response.json())
    .then((data) => {
      cardList.value = data.items
    })
}

onMounted(fetchCardList)
</script>

<template>
  <main class="card-list-wrapper">
    <div class="container card-list">
      <MovieCard v-for="card in cardListLimited" :key="card.id" :card="card" />
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 1344px;
  margin: 0 auto;
}

.card-list-wrapper {
  padding: 32px 48px;
}

.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  gap: 16px;
}
</style>
