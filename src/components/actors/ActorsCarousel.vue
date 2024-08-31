<script setup>

import Carousel from "@/components/Carousel.vue";
import {CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/UI/carousel/index.js";
import Item from "@/components/MovieItem.vue";
</script>

<template>
  <Carousel>
    <CarouselContent>
      <CarouselItem  v-for="movie in movies.results"  class="sm:basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
        <Item :movie="movie"/>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>

<style scoped>

</style>