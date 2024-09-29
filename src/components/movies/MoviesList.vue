<script setup>
import {nextTick, onMounted, watch, watchEffect} from "vue";
  import {useMovieStore} from "@/stores/MovieStore.js";
  import {options} from "@/constants/index.js";
  import Carousel from "@/components/Carousel.vue";
  import Item from "@/components/Item.vue";
  import {Badge} from "@/components/UI/badge/index.js";
  import {Button} from "@/components/UI/button/index.js";
  import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/UI/accordion/index.js";
import {useRoute, useRouter} from "vue-router";

  const movieStore = useMovieStore()
  const route = useRoute()
  const router = useRouter()

onMounted(async () => {
    await movieStore.getMovies({})
    await movieStore.getGenres()
    console.log(movieStore.movies.results)
  })

  watch(movieStore.pickedFilterGenres,(async (value, oldValue, onCleanup) => {
    const pickedGenres = value.map((el) => el.id).join(",")
    await router.push({ path: `/movies/with_genres=${pickedGenres}` })
    console.log(route.params.with_genres)


    await movieStore.getMovies()
  }))


</script>

<template>
  <div class="page">
    <div class="filters">
          <Accordion type="single"  collapsible default-value="not-open" class="inline-block">
            <AccordionItem value="open" key="opena">
              <AccordionTrigger>
                <h3 class="filter-title">
                  Genres
                </h3>
              </AccordionTrigger>
              <AccordionContent >
                <div  class="genres-list">
                  <Button variant="ghost" v-for="genre in movieStore.filterGenres.genres" @click="movieStore.setPickedFilterGenres(genre)" class="genre-button">
                    <Badge variant="outline" >
                      {{genre.name}}
                    </Badge>
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

    </div>
    <div class="results">
        <div class="picked-genres-list">
          <Button variant="ghost" v-for="pickedGenres in movieStore.pickedFilterGenres" @click="movieStore.deletePickedFilterGenre(pickedGenres)">
            <Badge variant="outline" >
              {{pickedGenres.name}}
            </Badge>
          </Button>
        </div>
      <div class="item-list">
        <Item v-for="item in movieStore.movies.results" :item="item" typeItem="movie"/>
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
    cursor: pointer;
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .picked-genres-list{
    height: 40px;
  }
  .filter-title{
    width: 130px;
    font-size: 25px;
    font-weight: 600;
  }
</style>