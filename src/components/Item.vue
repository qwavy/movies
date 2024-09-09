<script setup>
import {ref} from "vue";
const props = defineProps({
  item:{
    type:Object,
    required:true
  },
  url:{
    type:String,
  },
  itemId:{
    type:Number,
    required:true
  },
  itemImage:{
    type:String,
    required:true
  },
  itemName:{
    type:String,
    required:true
  },
  itemRating:{
    type:String,
  },
  itemDate:{
    type:String,
  },
  itemCharacter:{
    type:String,
  },
  itemDepartment:{
    type:String
  }
})

const image = ref(`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.itemImage}`)

const alternativeImage = () => {
  image.value = "https://themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
}

</script>

<template>
  <RouterLink :to="`/${url}/${itemId}`" class="card">
    <div class="card-wrapper">
      <img class="card-image" :src="image"  @error="alternativeImage"/>
<!--      <img class="card-image" :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${itemImage}`"  @error="alternativeImage"/>-->
      <h3 class="card-title">
        {{itemName}}
      </h3>
      <div class="card-content">
        <div class="card-stars" v-if="itemRating">
          <img src="@/assets/icons/star.svg" alt="stars">
          <span class="card-rating">
              {{itemRating}}
            </span>
        </div>
        <div class="card-character" v-show="itemCharacter">
          {{itemCharacter}}
        </div>
        <div class="card-date" v-show="itemDate">
          {{itemDate}}
        </div>
        <div class="card-department" v-show="itemDepartment">
          {{itemDepartment}}
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
  gap: 4px;
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