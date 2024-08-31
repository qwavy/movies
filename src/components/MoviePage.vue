<script setup>

import {computed, onMounted} from "vue";
import {useMoviePageStore} from "@/stores/MoviePageStore.js";
import {options} from "@/constants/index.js";
import {useRoute} from "vue-router";
import {Badge} from "@/components/UI/badge/index.js";
import {Progress} from "@/components/UI/progress/index.js";

const route = useRoute()

const props = defineProps({

})

const moviePageStore = useMoviePageStore()

const id = route.params.id

const urlMoviePage = `https://api.themoviedb.org/3/movie/${id}?language=en-US`

onMounted(() => {
  moviePageStore.getMoviePage(urlMoviePage ,options)
})

const year  = computed(() => new Date(moviePageStore.movie.release_date).getFullYear())

const rating = computed(() => Number(moviePageStore.movie.vote_average).toFixed(1))


</script>

<template>
  <div class="movie-page" v-show="moviePageStore.movie">
    <div class="movie-info">
      <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${moviePageStore.movie.poster_path}`"/>
      <div class="movie-details">
        <div>
          <h1 class="title">{{moviePageStore.movie.title}} ({{year}}) </h1>
          <h2 class="sub-title">{{moviePageStore.movie.original_title}}
            <span class="movie-language"> ({{String(moviePageStore.movie.original_language).toUpperCase()}})</span>
          </h2>
          <div class="overview">
            <h2 class="overview-title">overview</h2>
            <p class="overview-content">{{moviePageStore.movie.overview}}</p>
          </div>
          <div class="genres">
            <Badge variant="outline" v-for="genre in moviePageStore.movie.genres" class="genre">
              {{genre.name}}
            </Badge>
          </div>
        </div>
        <div class="movie-rating">
          {{rating }}
          <span class="movie-rating-subtitle">
            {{moviePageStore.movie.vote_count}} counts of vote
          </span>
          <Progress :model-value="rating"
                    :max="10"
                    class="text-black"/>
        </div>
      </div>
    </div>
    <div>

    </div>

  </div>
</template>

<style scoped>
.title{
  font-size: 30px;
  font-weight: 800;
}
.movie-info{
  display: flex;
  gap: 50px;
}
.movie-details{
  display: flex;
  justify-content: space-between;
}
.movie-rating{
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sub-title{
  font-size: 18px;
  color: gray;
}
.overview{
  padding: 30px 0 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.overview-title{
  font-size: 28px;
  font-weight: 600;
}
.overview-content{
  font-size: 24px;
}
.movie-language{
}
.genres{
  display: flex;
  gap: 5px;
}
.genre{
  padding:4px 8px;
  font-size: 14px;
  border: 1px solid #000000;
}
.movie-rating{
  font-size: 30px;
}
.movie-rating-subtitle{
  font-size: 15px;
  color: gray;
  padding-bottom: 10px;
}
</style>