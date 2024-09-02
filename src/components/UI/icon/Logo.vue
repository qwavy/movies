<script setup>

import {computed, onMounted, ref} from "vue";
import {useGlobalStore} from "@/stores/GlobalStore.js";

const globalStore = useGlobalStore()

const props = defineProps({
  variant:{
    type:String,
    default:"meduim"
  }
})

const width = ref(0);
const height = ref(0);

if(props.variant == "big"){
  width.value = 60
  height.value = 60
}else if(props.variant == "meduim"){
  width.value = 36
  height.value = 36
}else if(props.variant == "small"){
  width.value = 24
  height.value = 24
}


const logoTheme = computed(() => {
  return globalStore.theme === "light"
      ? "/src/assets/icons/logo-dark.svg"
      : "/src/assets/icons/logo-light.svg";
})
</script>

<template>
  <img :src="logoTheme" alt="logo" :width="width" :height="height">
</template>

<style scoped>

</style>