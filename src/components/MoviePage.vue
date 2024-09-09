<script setup>

import {computed, onMounted} from "vue";
import {options} from "@/constants/index.js";
import {useRoute} from "vue-router";
import {Badge} from "@/components/UI/badge/index.js";
import {Progress} from "@/components/UI/progress/index.js";
import {useGlobalStore} from "@/stores/GlobalStore.js";
import Carousel from "@/components/Carousel.vue";
import Item from "@/components/Item.vue";
import {useMovieStore} from "@/stores/MovieStore.js";

const route = useRoute()

const props = defineProps({

})


const movieStore = useMovieStore()
const globalStore = useGlobalStore()

const id = route.params.id

const urlMoviePage = `https://api.themoviedb.org/3/movie/${id}?language=en-US`
const urlActorsOfMovie = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`

onMounted(() => {
  movieStore.getMoviePage(urlMoviePage ,options)
  movieStore.getActorsOfMovie(urlActorsOfMovie,options)

})
setTimeout(() => {
  console.log(movieStore.actorsOfMovie.cast)

},1000)


const year  = computed(() => new Date(movieStore.movie.release_date).getFullYear())

const rating = computed(() => Number(movieStore.movie.vote_average).toFixed(1))

const theme = computed(() => globalStore.theme)

</script>

<template>
  <div class="movie-page" v-show="movieStore.movie">
    <div class="movie-info">
      <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieStore.movie.poster_path}`"/>
      <div class="movie-details">
        <div class="movie-data">
          <div>
            <h1 class="title">{{movieStore.movie.title}} ({{year}}) </h1>

            <h2 class="sub-title">{{movieStore.movie.original_title}}
              <span class="movie-language"> ({{String(movieStore.movie.original_language).toUpperCase()}})</span>
            </h2>
          </div>

          <div class="overview">
            <h2 class="overview-title">overview</h2>
            <p class="overview-content">{{movieStore.movie.overview}}</p>
          </div>
          <div class="genres">
            <Badge variant="outline" v-for="genre in movieStore.movie.genres" :class="theme === 'light' ? 'genreDark' : 'genreLight'" class="genre">
              {{genre.name}}
            </Badge>
          </div>
        </div>
        <div class="movie-rating">
          {{rating }}
          <span class="movie-rating-subtitle">
            {{movieStore.movie.vote_count}} counts of vote
          </span>
          <Progress :model-value="rating"
                    :max="10"
                    :fillColor="theme === 'light' ? 'text-black' : 'text-white'"
                    :backgroundColor="theme === 'light' ? 'text-white' : 'text-black'"
          />

        </div>
      </div>
    </div>
    <div>
      <h2 class="title">info</h2>
    </div>
    <div>
      <h2 class="title pb-5">crew</h2>
      <Carousel :items="movieStore.actorsOfMovie.cast">
        <template v-slot="{ item }">
          <Item :item="item" url="actor" :itemId="item.id" :itemImage="item.profile_path" :itemName="item.name" :itemCharacter="item.character" :itemDepartment="item.known_for_department"/>
        </template>
      </Carousel>
    </div>

  </div>
</template>

<style scoped>
.title{
  font-size: 30px;
  font-weight: 800;
}
.movie-page{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.movie-info{
  display: flex;
  gap: 50px;
}
.movie-details{
  display: flex;
  justify-content: space-between;
}
.movie-data{
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 30px;
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
}
.genreDark{
  border: 1px solid #000000;
}
.genreLight{
  border: 1px solid #f3f3f3;
}
.budget{
  display: flex;
  flex-direction: column;
  font-size: 20px;
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