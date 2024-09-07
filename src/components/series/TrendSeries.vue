<script setup>

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/UI/tabs/index.js";
import Loader from "@/components/UI/loader/Loader.vue";
import Carousel from "@/components/Carousel.vue";
import {onMounted, ref, watch} from "vue";
import {useSeriesStore} from "@/stores/SerisStore.js";
import {options} from "@/constants/index.js";
import {urlSeriesTheDay,urlSeriesTheWeek} from "@/components/series/constants.js";
import Item from "@/components/Item.vue";

const seriesStore = useSeriesStore()

const trendingSeriesPeriod = ref("seriesToday")

onMounted(() => {
  seriesStore.getSeries(urlSeriesTheDay,options)
})

watch(trendingSeriesPeriod , (value,oldValue,onCleanup) => {
  if(value === "seriesToday"){
    seriesStore.getSeries(urlSeriesTheDay,options)
  }else{
    seriesStore.getSeries(urlSeriesTheWeek,options)
  }
})
</script>

<template>
  <section class="trend">
    <h2 class="title">trend series</h2>
    <Tabs default-value="seriesToday"  v-model="trendingSeriesPeriod" >
      <TabsList class="trend-movies-tabs-buttons">
        <TabsTrigger value="seriesToday" class="tabs-switcher">today</TabsTrigger>
        <TabsTrigger value="seriesWeek" class="tabs-switcher">week</TabsTrigger>
      </TabsList>
      <TabsContent value="seriesToday">
        <Carousel :items="seriesStore.series.results">
          <template v-slot="{ item }">
            <Item :item="item" url="tv" :itemId="item.id" :itemImage="item.poster_path" :itemName="item.name" :itemRating="item.vote_average.toFixed(1)" :itemDate="item.first_air_date"/>
          </template>
        </Carousel>
      </TabsContent>
      <TabsContent value="seriesWeek">
        <Carousel :items="seriesStore.series.results">
          <template v-slot="{ item }">
            <Item :item="item" url="tv" :itemId="item.id" :itemImage="item.poster_path" :itemName="item.name" :itemRating="item.vote_average.toFixed(1)" :itemDate="item.first_air_date"/>
          </template>
        </Carousel>
      </TabsContent>
    </Tabs>
<!--    <Loader :isLoading="movieStore.isLoading"/>-->
  </section>
</template>

<style scoped>

</style>