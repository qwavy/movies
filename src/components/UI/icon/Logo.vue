<script setup>

import {ref} from "vue";

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
  width.value = 36
}else if(props.variant == "small"){
  width.value = 24
  width.value = 24
}

</script>

<template>
  <img src="../../.././assets/icons/logo.svg" alt="logo" :width="width" :height="height">
</template>

<style scoped>

</style>