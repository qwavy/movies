<script setup>
  const props = defineProps({
    movie:{
      type:Object,
      required:true
    }
  })

</script>

<template>
  <RouterLink :to="`/movie/${movie.id}`" class="card">
    <div class="card-wrapper">

        <img class="card-image" :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`"/>
        <h3 class="card-title">
          {{movie.title}}
        </h3>
        <div class="card-content">
          <div class="card-stars">
            <img src=".././assets/icons/star.svg" alt="stars">
            <span class="card-rating">
              {{movie.vote_average.toFixed(1)}}
            </span>
          </div>
          <div class="card-date">
            {{movie.release_date}}
          </div>
        </div>
    </div>

  </RouterLink>

</template>

<style scoped>
  .card{
    border-radius: 12px;
    width: 160px;

  }
  .card-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  .card-image{
    border-radius: 12px;
    height: 250px;
    width: 160px;
  }
  .card-title{
    font-size: 1.8rem;
    font-weight: 600;
    white-space: nowrap; /* Запрещаем перенос строк */
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .card-content{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-rating{
    font-size: 16px;
    text-align: center;
  }
  .card-stars{
    display: flex;
    gap: 4px;
  }
  .card-date{
    font-size: 16px;
  }
</style>