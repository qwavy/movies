<script setup>
  import {onMounted} from "vue";
  import {useMovieStore} from "@/stores/MovieStore.js";
  import {options} from "@/constants/index.js";
  import Carousel from "@/components/Carousel.vue";
  import Item from "@/components/Item.vue";
  import {Badge} from "@/components/UI/badge/index.js";
  import {Moviegenres} from "@/components/movies/constants.js";
  import {Button} from "@/components/UI/button/index.js";
  const movieStore = useMovieStore()

  onMounted(async () => {
    await movieStore.getMovies(options)
    console.log(movieStore.movies.results)
  })


</script>

<template>
  <div class="page">
    <div class="filters">
        <div class="genres-list">
          <Button variant="ghost" v-for="genre in Moviegenres" @click="movieStore.setPickedFilterGenres(genre)" class="genre-button">
          <Badge variant="outline">
            {{genre}}
          </Badge>
        </Button>
        </div>
    </div>
    <div class="results">
        <div class="picked-genres-list">
          <Button variant="ghost" v-for="pickedGenres in movieStore.pickedFilterGenres" @click="movieStore.deletePickedFilterGenre(pickedGenres)">
            <Badge variant="outline" >
              {{pickedGenres}}
            </Badge>
          </Button>
        </div>
      <div class="item-list">
        <Item :item="item" v-for="item in movieStore.movies.results"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page{
  display: flex;
}
  .filters{
    width: 30%;
  }
  .results{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .item-list{
    //max-width: 80%;
    //width: 80%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(5,1fr);
    gap: 30px;
  }
  .genres-list{
    display: flex;
    flex-direction: column;
    gap: 10px 0;
  }
  .genre-button{
    margin: auto;
    width: 80px;
  }
  .picked-genres-list{
    height: 40px;
  }
</style>