<script setup>
import Trending from "@/components/Trending.vue";
import {useMovieStore} from "@/stores/MovieStore.js";
import {urlMoviesTheDay, urlMoviesTheWeek} from "@/components/movies/constants.js";
import {options} from "@/constants/index.js";
import {onMounted} from "vue";
import {useSeriesStore} from "@/stores/SerisStore.js";

const movieStore = useMovieStore()
const seriesStore = useSeriesStore()

onMounted(() => {
  movieStore.getMoviesDay(options)
  movieStore.getMoviesWeek(options)

  seriesStore.getSeriesDay(options)
  seriesStore.getSeriesWeek(options)

})

const movieInfo = {
  url:"movie",
  // itemId:
}


</script>

<template>
  <Trending :itemsOfTheDay="movieStore.trendingMoviesOfTheDay" :itemsOfTheWeek="movieStore.trendingMoviesOfTheWeek"/>
  <Trending :itemsOfTheDay="seriesStore.trendingSeriesOfTheDay" :itemsOfTheWeek="seriesStore.trendingSeriesOfTheWeek"/>
  <section>
    <h2 class="movies-title">trend movies</h2>
  </section>
</template>

<style>
.trend{
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.trend-movies-tabs-buttons{
  margin-bottom: 30px;
}
  .title{
    font-size: 40px;
    font-weight: 800;
  }
  .tabs-switcher{
    width: 100px;
    height: 50px;
    font-size: 15px;
    margin: 30px 0;

  }
</style>