<script setup lang="ts">
import { computed, type ComputedRef } from 'vue'
import MovieTag from './MovieTag.vue'
import type { MovieCardType, MovieTagType } from './typings'

const props = defineProps<{ card: MovieCardType }>()

const tags: ComputedRef<MovieTagType[]> = computed(() => [
  { type: 'score', value: props.card.rating },
  { type: 'genre', value: props.card.genre },
  { type: 'duration', value: props.card.duration },
])

const replaceWithBackupImage = (event: Event) => {
  const backupImgUrl = 'https://via.placeholder.com/600x600?text=Failed%20To%20Load'
  if ((event.target as HTMLImageElement).src != backupImgUrl) {
    ;(event.target as HTMLImageElement).src = backupImgUrl
  }
}
</script>

<template>
  <RouterLink :to="`/movie/${props.card.id}`" class="card">
    <div class="card__inner">
      <div class="card__image-wrapper">
        <img
          :src="props.card.poster"
          class="card__image"
          alt="movie image"
          @error="replaceWithBackupImage"
        />
      </div>
      <div class="card__title" role="heading">{{ props.card.name }}</div>
      <div class="card__description" role="none">{{ props.card.description }}</div>
      <div class="card__tags">
        <MovieTag v-for="tag in tags" :key="tag.type" :type="tag.type" :value="tag.value" />
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
  border-radius: 16px;
  background: var(--fnz-background-secondary);
  text-decoration: none;

  &:hover {
    .card__inner {
      transform: translate(-9px, -9px);
    }
  }
}

.card__inner {
  padding: 12px;
  background: var(--fnz-background-primary);
  transition: transform 0.2s ease;
  border-radius: 16px;
}

.card__image-wrapper {
  height: 172px;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  margin-bottom: 12px;
}

.card__image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.card__title {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 28px;
  line-height: 32.81px;
  font-weight: 700;
  color: var(--fnz-color-primary);
  margin-bottom: 4px;
}

.card__description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 12px;
  color: var(--fnz-color-primary);
  font-size: 14px;
  line-height: 16.41px;
  font-weight: 500;
  height: 32px;
}

.card__tags {
  display: flex;
  gap: 8px;
}
</style>
