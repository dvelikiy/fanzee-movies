<script setup lang="ts">
import { computed } from 'vue'
import IconClock from '../icons/IconClock.vue'
import IconFilm from '../icons/IconFilm.vue'
import IconStar from '../icons/IconStar.vue'
import type { MovieTagType } from './typings'

const props = defineProps<MovieTagType>()

const icon = computed(() => {
  switch (props.type) {
    case 'score':
      return IconStar
    case 'genre':
      return IconFilm
    case 'duration':
      return IconClock
    default:
      return false
  }
})

const tagClasses = computed(() => {
  switch (props.type) {
    case 'score':
      if ((props.value as number) >= 7) return 'tag--score-good'
      if ((props.value as number) >= 4) return 'tag--score-average'
      return 'tag--score-bad'
    case 'genre':
      return 'tag--genre'
    case 'duration':
      return 'tag--duration'
    default:
      return ''
  }
})
</script>

<template>
  <div class="tag" :class="tagClasses">
    <component :is="icon" v-if="icon" />
    {{ props.value }}
  </div>
</template>

<style scoped>
.tag {
  --fnz-tag-good: #039c55;
  --fnz-tag-average: var(--fnz-background-secondary);
  --fnz-tag-bad: #e81a0c;

  --fnz-tag-genre: #2c81fb;
  --fnz-tag-duration: var(--fnz-background-secondary);

  display: flex;
  align-items: baseline;
  gap: 4px;
  color: var(--fnz-color-primary);
  border-radius: 8px;
  padding: 2px 6px;
  text-transform: capitalize;
  font-size: 11px;
  line-height: 1;
  font-weight: 500;
}

.tag--score-good {
  background-color: var(--fnz-tag-good);
}

.tag--score-average {
  background-color: var(--fnz-tag-average);
}

.tag--score-bad {
  background-color: var(--fnz-tag-bad);
}

.tag--genre {
  background-color: var(--fnz-tag-genre);
}

.tag--duration {
  background-color: var(--fnz-tag-duration);
}
</style>
