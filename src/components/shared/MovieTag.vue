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
  display: flex;
  align-items: baseline;
  gap: 4px;
  color: white;
  border-radius: 8px;
  padding: 2px 6px;
  text-transform: capitalize;
  font-size: 11px;
  line-height: 1;
  font-weight: 500;
}

.tag--score-good {
  background-color: #039c55;
}

.tag--score-average {
  background-color: #702bfe;
}

.tag--score-bad {
  background-color: #e81a0c;
}

.tag--genre {
  background-color: #2c81fb;
}

.tag--duration {
  background-color: #702bfe;
}
</style>
