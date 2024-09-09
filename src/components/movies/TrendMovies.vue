<script setup>

import Loader from "@/components/UI/loader/Loader.vue";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/UI/tabs/index.js";
import Carousel from "@/components/Carousel.vue";
import {onMounted, ref, watch} from "vue";
import {options} from "@/constants/index.js";

import {useMovieStore} from "@/stores/MovieStore.js";
import {urlMoviesTheDay, urlMoviesTheWeek} from "@/components/movies/constants.js";
import Item from "@/components/Item.vue";

const movieStore = useMovieStore()


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
  <section class="trend">
    <h2 class="title">trend movies</h2>
    <Tabs default-value="moviesToday"  v-model="trendingMoviesPeriod" >
      <TabsList class="trend-movies-tabs-buttons">
        <TabsTrigger value="moviesToday" class="tabs-switcher">today</TabsTrigger>
        <TabsTrigger value="moviesWeek" class="tabs-switcher">week</TabsTrigger>
      </TabsList>
      <TabsContent value="moviesToday">

        <Carousel :items="movieStore.movies.results">
          <template v-slot="{item}">
            <Item :item="item" url="movie" :itemId="item.id" :itemImage="item.poster_path" :itemName="item.title" :itemRating="item.vote_average.toFixed(1)" :itemDate="item.release_date"/>
          </template>
        </Carousel>
      </TabsContent>
      <TabsContent value="moviesWeek">
        <Carousel :items="movieStore.movies.results">
          <template v-slot="{item}">
            <Item :item="item" url="movie" :itemId="item.id" :itemImage="item.poster_path" :itemName="item.title" :itemRating="item.vote_average.toFixed(1)" :itemDate="item.release_date"/>
          </template>
        </Carousel>
      </TabsContent>
    </Tabs>
    <Loader :isLoading="movieStore.isLoading"/>
  </section>
</template>

<style scoped>

</style>