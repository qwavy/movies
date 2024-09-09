<script setup>
import TrendSeries from "@/components/series/TrendSeries.vue";
import TrendMovies from "@/components/movies/TrendMovies.vue";

localStorage.setItem('bearerToken','eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmM1OWJkNDI3NmM5ZGE5ZDQwZGEzZjI4OTkzNTFiMCIsIm5iZiI6MTcyNTgyNTc1Mi40ODQ3NCwic3ViIjoiNjZjZjkxNWVlMDJhYzAzMzUxNzIyYmExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VOYjilYRcEld2k1tvCPYZVkBY3gmHEiyAl5o_N4tGP8')
</script>

<template>
  <TrendMovies/>
  <TrendSeries/>
  <section>
    <h2 class="movies-title">trend movies</h2>
  </section>
</template>

<style>
.trend{
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.trend-movies-tabs-buttons{
  margin-bottom: 30px;
}
  .title{
    font-size: 40px;
    font-weight: 800;
  }
  .tabs-switcher{
    width: 100px;
    height: 50px;
    font-size: 15px;
    margin: 30px 0;

  }
</style>