<script setup>


import {computed, onMounted} from "vue";
import {useActorStore} from "@/stores/ActorStore.js";
import {useRoute} from "vue-router";
import {options} from "@/constants/index.js";
import {getAgeFromBirthDate} from "@/lib/utils.js";
import Carousel from "@/components/Carousel.vue";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

import Item from "@/components/Item.vue";
import Loader from "@/components/UI/loader/Loader.vue";
import {useGlobalStore} from "@/stores/GlobalStore.js";
const route = useRoute()

const id = route.params.id

const actorStore = useActorStore()
const globalStore = useGlobalStore()


const urlActorPage = `https://api.themoviedb.org/3/person/${id}?language=en-US`
const urlMoviesPerson = `https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US`

onMounted(() => {
  globalStore.setIsLoading(true)
  actorStore.getActor(urlActorPage,options)
  actorStore.getMoviesPerson(urlMoviesPerson,options)
  globalStore.setIsLoading(false)

})

const age = computed(() => getAgeFromBirthDate(actorStore.actor.birthday))

const gender = computed(() => {
  if(actorStore.actor.gender === 1){
    return "female"
  }else{
    return "male"
  }
})


</script>

<template>
  <Loader v-if="globalStore.isLoading" :isLoading="globalStore.isLoading"/>
  <div class="actor-page" v-else>
    <div class="actor-info">
      <div class="actor-image">
        <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${actorStore.actor.profile_path}`"/>
      </div>
      <div class="actor-personal-info">
        <h1 class="title">{{actorStore.actor.name}}</h1>
<!--        <h2 class="sub-title">-->
<!--          Personal Information-->
<!--        </h2>-->
        <div>
          <h3 class="personal-info-title">
            Known for
          </h3>
          <p class="description">
            {{actorStore.actor.known_for_department}}
          </p>
        </div>
        <div>
          <h3 class="personal-info-title">
            Age
          </h3>
          <p class="description">
            {{actorStore.actor.birthday}}
            ({{age}} age)
          </p>
        </div>
        <div v-show="actorStore.actor.deathday">
          <h3 class="personal-info-title">
            Age
          </h3>
          <p class="description">
            {{actorStore.actor.birthday}}
            ({{age}} age)
          </p>
        </div>
        <div>
          <h3 class="personal-info-title">
            Gender
          </h3>
          <p class="description">
            {{gender}}
          </p>
        </div>
        <div>
          <h3 class="personal-info-title">
            Place of birth
          </h3>
          <p class="description">
            {{actorStore.actor.place_of_birth}}
          </p>
        </div>
        <div>

          <Accordion type="single" class="w-full" collapsible default-value="not-open">
            <AccordionItem value="open" key="opena">
              <AccordionTrigger>
                <h3 class="personal-info-title">
                  Also known as
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <p class="description" v-for="name in actorStore.actor.also_known_as">
                  {{name}}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>


        </div>
      </div>
    </div>
    <div class="actor-career">

        <div class="actor-career-bio">
          <h2 class="sub-title">Bio</h2>
          <p class="description">{{actorStore.actor.biography}}</p>
        </div>
        <div class="movies-carousel">
          <h2 class="sub-title">Movies</h2>
          <Carousel :items="actorStore.moviesPerson.cast">
            <template v-slot="{ item }">
              <Item :item="item"/>
            </template>
          </Carousel>
        </div>
    </div>
  </div>
</template>

<style scoped>
  .actor-page {
  }
  .title{
    font-size: 35px;
    font-weight: 700;
  }
  .actor-info{
    display: flex;
    gap: 40px;
    min-width: 20%;
  }
  .actor-personal-info{
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .sub-title{
    font-size: 28px;
    font-weight: 600;
  }
  .personal-info-title{
    font-size: 25px;
    font-weight: 600;
  }
  .description{
    font-size: 22px;
    font-weight: 400;
  }
  .actor-career{
    display: flex;
    flex-direction: column;
    gap: 30px 0;
  }
  .person-bio{}
</style>