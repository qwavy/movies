<script setup>
import {nextTick, onMounted, reactive, ref, watch, watchEffect} from "vue";
  import {useMovieStore} from "@/stores/MovieStore.js";
  import {options} from "@/constants/index.js";
  import Carousel from "@/components/Carousel.vue";
  import Item from "@/components/Item.vue";
  import {Badge} from "@/components/UI/badge/index.js";
  import {Button} from "@/components/UI/button/index.js";
  import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/UI/accordion/index.js";
import {useRoute, useRouter} from "vue-router";
import {Input} from "@/components/UI/input/index.js";
import {getDateFromYear} from "@/lib/utils.js";

  const movieStore = useMovieStore()
  const route = useRoute()
  const router = useRouter()

  const query = reactive({

  })

  const relaseYearStart = ref(route.query['primary_release_date.gte'])
  const relaseYearEnd = ref(route.query['primary_release_date.lte'])


onMounted(async () => {
    await movieStore.getMovies({})
    await movieStore.getGenres()

  console.log(route.query)


  console.log(Object.keys(route.query))

  movieStore.filterGenres.genres.filter((el) => route.query.with_genres.includes(el.id)).forEach((el) => {
    movieStore.setPickedFilters(el)
  })
  const pickedGenres = movieStore.pickedFilters.map((el) => el.id).join(",")
  query.with_genres = pickedGenres

  })

  watch(movieStore.pickedFilters,(async (value, oldValue, onCleanup) => {
    const pickedGenres = value.map((el) => el.id).join(",")
    query.with_genres = pickedGenres

    await router.push({
      path: '/movies',
      query:query
    })

    await movieStore.getMovies(query)
  }),)

  watch(relaseYearStart, async (value, oldValue, onCleanup) => {
    query['primary_release_date.gte'] = getDateFromYear(value)

    await router.push({
      path: '/movies',
      query:query
    })
    await movieStore.getMovies(query)
  })

watch(relaseYearEnd, async (value, oldValue, onCleanup) => {
  query['primary_release_date.lte'] = getDateFromYear(value)
  await router.push({
    path: '/movies',
    query:query
  })
  await movieStore.getMovies(query)
})


</script>

<template>
  <div class="page">
    <div class="filters">
      <div class="release-years-filter">
        <h3 class="filter-title">
          Release year
        </h3>
        <div class="inputs">
          <Input type="number" v-model="relaseYearStart"/>
          <p class="filter-names">
            to
          </p>
          <Input type="number" v-model="relaseYearEnd" />
        </div>
      </div>
          <Accordion type="single"  collapsible default-value="not-open" class="inline-block">
            <AccordionItem value="open" key="opena">
              <AccordionTrigger>
                <h3 class="filter-title">
                  Genres
                </h3>
              </AccordionTrigger>
              <AccordionContent >
                <div  class="genres-list">
                  <Button variant="ghost" v-for="genre in movieStore.filterGenres.genres" @click="movieStore.setPickedFilters(genre)" class="genre-button">
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
          <Button variant="ghost" v-for="pickedGenres in movieStore.pickedFilters" @click="movieStore.deletePickedFilters(pickedGenres)">
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
  .release-years-filter{
    width: 130px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .inputs{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .inputs > input{
    font-size: 15px;
  }
  .filter-names{
    font-size: 15px;
  }
</style>