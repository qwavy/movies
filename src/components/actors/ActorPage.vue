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

onMounted(() => {
  actorStore.getActor(urlActorPage,options)


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
  <div class="actor-page">
    <div class="actor-info">
      <div class="actor-image">
        <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${actorStore.actor.profile_path}`"/>
      </div>
      <div class="actor-personal-info">
        <h2 class="sub-title">
          Personal Information
        </h2>
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
            Age
          </h3>
          <p class="personal-info-description">
            {{actorStore.actor.birthday}}
            ({{age}} age)
          </p>
        </div>
        <div v-show="actorStore.actor.deathday">
          <h3 class="personal-info-title">
            Age
          </h3>
          <p class="personal-info-description">
            {{actorStore.actor.birthday}}
            ({{age}} age)
          </p>
        </div>
        <div>
          <h3 class="personal-info-title">
            Gender
          </h3>
          <p class="personal-info-description">
            {{gender}}
          </p>
        </div>
        <div>
          <h3 class="personal-info-title">
            Place of birth
          </h3>
          <p class="personal-info-description">
            {{actorStore.actor.place_of_birth}}
          </p>
        </div>
        <div>
          <h3 class="personal-info-title">
            Also known as
          </h3>
          <p class="personal-info-description" v-for="name in actorStore.actor.also_known_as">
            {{name}}
          </p>
        </div>
      </div>
    </div>
    <div class="actor-career">
        <h1 class="title">{{actorStore.actor.name}}</h1>
        <div class="actor-career-bio">
          <h2 class="sub-title">Bio</h2>
          <p>{{actorStore.actor.biography}}</p>
        </div>
    </div>
  </div>
</template>

<style scoped>
  .actor-page {
    display: flex;
    gap: 50px;
  }
  .title{
    font-size: 35px;
    font-weight: 700;
  }
  .actor-info{
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .actor-personal-info{
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .sub-title{
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