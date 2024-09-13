<script setup>

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/UI/tabs/index.js";
import Item from "@/components/Item.vue";
import Loader from "@/components/UI/loader/Loader.vue";
import Carousel from "@/components/Carousel.vue";
import {onMounted, ref, watch} from "vue";
import {urlMoviesTheDay, urlMoviesTheWeek} from "@/components/movies/constants.js";
import {options} from "@/constants/index.js";


const props = defineProps({
  itemsOfTheDay:Object,
  itemsOfTheWeek:Object,
})

const trendingPeriod = ref("today")

</script>

<template>
  <section class="trend">
    <h2 class="title">trend movies</h2>
    <Tabs default-value="today"  v-model="trendingPeriod" >
      <TabsList class="trend-movies-tabs-buttons">
        <TabsTrigger value="today" class="tabs-switcher">today</TabsTrigger>
        <TabsTrigger value="week" class="tabs-switcher">week</TabsTrigger>
      </TabsList>
      <TabsContent value="today">
        <Carousel :items="itemsOfTheDay.results">
          <template v-slot="{item}">
            <Item :item="item"/>
          </template>
        </Carousel>
      </TabsContent>
      <TabsContent value="week">
        <Carousel :items="itemsOfTheWeek.results">
          <template v-slot="{item}">
            <Item :item="item"/>
          </template>
        </Carousel>
      </TabsContent>
    </Tabs>
  </section>
</template>

<style scoped>

</style>