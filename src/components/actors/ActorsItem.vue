<script setup>
const props = defineProps({
  item:{
    type:Object,
    required:true
  }
})

</script>

<template>
  <RouterLink :to="`/tv/`" class="card">
    <div class="card-wrapper">
      <img class="card-image" :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.profile_path}`" alt="poster"/>
      <h3 class="card-title">
        {{item.name}}
      </h3>
      <div class="card-content">
        <div class="card-stars">
          <span class="card-character">
              {{item.character}}
            </span>
        </div>
        <div class="card-date">
          {{item.known_for_department}}
        </div>
      </div>
    </div>

  </RouterLink>

</template>

<style scoped>
  .card-character{
    font-size: 16px;
  }
</style>