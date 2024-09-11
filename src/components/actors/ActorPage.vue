<script setup>


import {computed, onMounted} from "vue";
import {useActorStore} from "@/stores/ActorStore.js";
import {useRoute} from "vue-router";
import {options} from "@/constants/index.js";
import {getAgeFromBirthDate} from "@/lib/utils.js";

const route = useRoute()

const id = route.params.id

const actorStore = useActorStore()



const urlActorPage = `https://api.themoviedb.org/3/person/${id}?language=en-US`

const age = computed(() => getAgeFromBirthDate(actorStore.actor.birthday))

onMounted(() => {
  actorStore.getActor(urlActorPage,options)
})
</script>

<template>
  <div class="actor-page">
    <div class="actor-info">
      <div class="actor-image">
        <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${actorStore.actor.profile_path}`"/>
      </div>
      <div class="actor-personal-info">
        <h2 class="actor-personal-info-title">
          Personal Information
        </h2>
        <div>
          <h3 class="personal-info-title">
            Age
          </h3>
          <p class="personal-info-description">
            {{age}}
          </p>
        </div>
        <div>
          <h3 class="personal-info-title">
            Known for
          </h3>
          <p class="personal-info-description">
            {{actorStore.actor.known_for_department}}
          </p>
        </div>
        <div>
          <h3 class="personal-info-title">
            Known for
          </h3>
          <p class="personal-info-description">
            {{actorStore.actor.known_for_department}}
          </p>
        </div>
      </div>
    </div>
    <div class="actor-career">

    </div>
  </div>
</template>

<style scoped>
  .actor-page {
    display: flex;
  }
  .actor-info{
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .actor-personal-info-title{
    font-size: 21px;
    font-weight: 600;
  }
  .personal-info-title{
    font-size: 16px;
    font-weight: 600;
  }
  .personal-info-description{
    font-size: 16px;
    font-weight: 400;
  }
</style>