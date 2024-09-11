<script setup>



import {onMounted} from "vue";
import {useActorStore} from "@/stores/ActorStore.js";
import {useRoute} from "vue-router";
import {options} from "@/constants/index.js";

const actorStore = useActorStore()
const route = useRoute()

const urlActorPage = "https://api.themoviedb.org/3/person/55638?language=en-US"

onMounted(() => {
  actorStore.getActor(urlActorPage,options)
})
</script>

<template>
  <div class="actor-page">
    <div class="actor-info">
      <div class="actor-image">
        {{actorStore.actor}}
      </div>
      <div class="actor-personal-info">
        <div>

        </div>
        <h2 class="info-title">
          Known for
        </h2>
        <p></p>
      </div>
    </div>
    <div class="actor-career">

    </div>
  </div>
</template>

<style scoped>
  .actor-info{
    display: flex;
  }
</style>