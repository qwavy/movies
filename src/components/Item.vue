<script setup>
import {computed, nextTick, onMounted, reactive, ref, toRefs, watch, watchEffect} from "vue";
const props = defineProps({
  item:{
    type:Object,
    required:true
  },
  typeItem:{
    type:String
  }
})

const itemInfo = reactive({

})
const {item} = toRefs(props)
const image = ref()


const updateItemInfo = () => {
  if(item.value?.media_type === "movie" || props.typeItem === "movie"){
    Object.assign( itemInfo, {
      url:"movie",
      itemId: props.item.id,
      itemName: props.item.title,
      itemImage: props.item.poster_path,
      itemRating: props.item.vote_average.toFixed(1),
      itemDate: props.item.release_date
    })
  }else if(item.value?.media_type === "tv"){
    Object.assign( itemInfo, {
      url:"movie",
      itemId: props.item.id,
      itemName: props.item.name,
      itemImage: props.item.poster_path,
      itemRating: props.item.vote_average.toFixed(1),
      itemDate: props.item.first_air_date
    })
  }
  if(item.value?.known_for_department){
    Object.assign( itemInfo,  {
      url:"person",
      itemId: props.item.id,
      itemName: props.item.original_name,
      itemImage: props.item.profile_path,
      itemCharacter:props.item.character,
      itemDepartment: props.item.known_for_department
    })
  }else if(item.value?.character){
    Object.assign( itemInfo, {
      url:"movie",
      itemId: props.item.id,
      itemName: props.item.title,
      itemImage: props.item.poster_path,
      itemRating: props.item.vote_average.toFixed(1),
      itemDate: props.item.release_date
    })
  }
  image.value = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${itemInfo.itemImage}`
}

watchEffect(() => {
  updateItemInfo();
})

const cardRatingClass = computed(() => {
  if(itemInfo.itemRating >= 7){
    return "greenRatingClass"
  }
  if(itemInfo.itemRating >= 5){
    return "yellowRatingClass"
  }
  if(itemInfo.itemRating <= 5){
    return "redRatingClass"
  }
})




const alternativeImage = () => {
  image.value = "https://themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
}

</script>

<template>
  <RouterLink :to="`/${itemInfo.url}/${itemInfo.itemId}`" class="card" >
    <div class="card-wrapper">
      <img class="card-image" :src="image"  @error="alternativeImage"/>
<!--      <img class="card-image" :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${itemImage}`"  @error="alternativeImage"/>-->
      <h3 class="card-title">
        {{itemInfo.itemName}}
      </h3>
      <div class="card-content">
        <div class="card-stars" :class="cardRatingClass" v-if="itemInfo.itemRating">
          <span class="card-rating">
              {{itemInfo.itemRating}}
            </span>
        </div>
        <div class="card-character" v-show="itemInfo.itemCharacter">
          {{itemInfo.itemCharacter}}
        </div>
        <div class="card-date" v-show="itemInfo.itemDate">
          {{itemInfo.itemDate}}
        </div>
        <div class="card-department" v-show="itemInfo.itemDepartment">
          {{itemInfo.itemDepartment}}
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
  gap: 10px;
}
.card-rating{
  font-size: 16px;
  text-align: center;
}
.card-stars{
  display: flex;
  padding: 2px 7px;
}
.greenRatingClass{
  background-color: forestgreen;
}
.yellowRatingClass{
  background-color: #F3C308;
}
.redRatingClass{
  background-color: red;
}
.card-date{
  font-size: 16px;
}
.card-character{
  font-size: 16px;
}
.card-department{
  font-size: 16px;
}
</style>