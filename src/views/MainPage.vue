<script setup>

import {useMoviesStore} from "@/stores/MoviesStore.js";
const movieStore = useMoviesStore()

import axios from 'axios';
import {onMounted, watch,ref} from "vue";
import {options, urlMoviesTheDay,urlMoviesTheWeek} from "@/constants/index.js";
import Loader from "@/components/UI/loader/Loader.vue";
import Carousel from "@/components/Carousel.vue";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/UI/tabs/index.js";

const trendingMoviesPeriod = ref("moviesToday")

onMounted(() => {
  movieStore.getMovies(urlMoviesTheDay, options)
})

watch(trendingMoviesPeriod , (value, oldValue, onCleanup) => {
  if(value === "moviesToday"){
    movieStore.getMovies(urlMoviesTheDay, options)
  }else{
    movieStore.getMovies(urlMoviesTheWeek, options)
  }
})
</script>

<template>
  <section>
    <h2 class="movies-title">trend movies</h2>
    <Tabs default-value="moviesToday"  v-model="trendingMoviesPeriod">
      <TabsList>
        <TabsTrigger value="moviesToday" class="tabs-switcher">today</TabsTrigger>
        <TabsTrigger value="moviesWeek" class="tabs-switcher">week</TabsTrigger>
      </TabsList>
      <TabsContent value="moviesToday">
        <Carousel :movies="movieStore.movies"/>
      </TabsContent>
      <TabsContent value="moviesWeek">
        <Carousel :movies="movieStore.movies"/>
      </TabsContent>
    </Tabs>
    <Loader :isLoading="movieStore.isLoading"/>
  </section>
  <section>
    <h2 class="movies-title">trend movies</h2>
  </section>
</template>

<style scoped>
  .movies-title{
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