<script setup>
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Item from "@/components/MovieItem.vue";

const props = defineProps({
  movies:{
    type:Object,
    required:true
  }
})

</script>

<template>
  <Carousel>
    <CarouselContent class="gap-14">
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