<script setup lang="ts">
import { ref, computed, onMounted, type Ref, type ComputedRef } from 'vue'
import MovieTag from '@/components/shared/MovieTag.vue'
import type { MovieTagType } from '@/components/shared/typings'

type MovieCard = {
  id: number
  name: string
  description: string
  duration: string
  rating: number
  poster: string
  genre: string
  trivia: string[]
  actors: { name: string; imdb_id: string }[]
}
const movieData: Ref<MovieCard> = ref({
  id: 0,
  name: '',
  description: '',
  duration: '',
  rating: 0,
  poster: '',
  genre: '',
  trivia: [],
  actors: [],
})

const fetchMovieData = async () => {
  return fetch('/data/detail.json')
    .then((response) => response.json())
    .then((data) => {
      const actorsWithLastNameAbbreviated = data.actors.map(
        (actor: { name: string; imdb_id: string }) => {
          const [firstName, lastName] = actor.name.split(' ')
          return {
            name: `${firstName} ${lastName[0]}.`,
            imdb_id: actor.imdb_id,
          }
        },
      )
      const modifiedData = {
        ...data,
        actors: actorsWithLastNameAbbreviated,
      }
      movieData.value = modifiedData
    })
}

const checkLink = async (url: string) => (await fetch(url)).ok

onMounted(async () => {
  await fetchMovieData()

  if (!(await checkLink(movieData.value.poster))) {
    const backupImgUrl = 'https://via.placeholder.com/240x320?text=Failed%20To%20Load'
    movieData.value.poster = backupImgUrl
  }
})

const tags: ComputedRef<MovieTagType[]> = computed(() => [
  { type: 'score', value: movieData.value.rating },
  { type: 'genre', value: movieData.value.genre },
  { type: 'duration', value: movieData.value.duration },
])
</script>

<template>
  <div class="movie-wrapper">
    <div class="container">
      <div class="movie">
        <div class="movie__left">
          <h1 class="movie__title">{{ movieData.name }}</h1>
          <div
            class="movie__image"
            :style="{ backgroundImage: 'url(\'' + movieData.poster + '\')' }"
          />
          <div class="movie__tags">
            <MovieTag v-for="tag in tags" :key="tag.type" :type="tag.type" :value="tag.value" />
          </div>
        </div>
        <div class="movie__right">
          <h2 class="movie__title">Description</h2>
          <p class="movie__description">{{ movieData.description }}</p>
          <h2 class="movie__title">Trivia</h2>
          <div class="movie__trivia">
            <ul>
              <li v-for="trivia in movieData.trivia" :key="trivia">{{ trivia }}</li>
            </ul>
          </div>
          <h2 class="movie__title">Actors</h2>
          <div class="movie__trivia">
            <ul>
              <li v-for="actor in movieData.actors" :key="actor.name">
                <a
                  :href="`https://www.imdb.com/name/${actor.imdb_id}/`"
                  target="_blank"
                  class="movie__actor"
                  >{{ actor.name }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1344px;
  margin: 0 auto;
}

.movie-wrapper {
  padding: 24px 48px;
}

.movie {
  display: flex;
  gap: 64px;
  color: var(--fnz-color-primary);
  min-height: calc(100vh - 198px);
}

@media screen and (max-width: 690px) {
  .movie {
    flex-direction: column;
    gap: 32px;
  }
}

.movie__right {
  max-width: 340px;
}

.movie__image {
  width: 240px;
  height: 320px;
  background-position: center;
  border-radius: 8px;
  margin-top: 24px;
}

.movie__tags {
  display: flex;
  gap: 8px;
  margin-top: 24px;
}

.movie__title {
  font-size: 32px;
  font-weight: 700;
  line-height: 37.5px;
}

.movie__description {
  font-size: 14px;
  font-weight: 500;
  line-height: 16.41px;
  margin: 16px 0;
}

.movie__trivia {
  margin: 16px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.41px;

  ul {
    padding-left: calc(1em + 10px);
  }
}

.movie__actor {
  color: var(--fnz-color-primary);
}
</style>
