<script setup>
import MovieItem from "@/components/MovieItem.vue";

const props = defineProps({
  movies: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div v-show="movies">
    <div class="card-list" >
      <MovieItem :movie="movie" v-for="movie in movies.results"/>
    </div>
  </div>
</template>

<style scoped>
  .card-list{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px 10px;
  }
</style>