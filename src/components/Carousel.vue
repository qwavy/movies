<script setup>
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {ref} from "vue";

const props = defineProps({
  items:{
    type:Object,
    required:true
  }
})

</script>

<template>
  <Carousel>
    <CarouselContent class="gap-14">
      <CarouselItem  v-for="item in items"  class="sm:basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/7">
        <slot :item="item"/>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>

<style>
.card{
  border-radius: 12px;
  width: 160px;
}
.card-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  max-width: 16rem;
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