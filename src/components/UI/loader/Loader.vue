<script setup>
  import {boolean} from "zod";

  const props = defineProps({
    isLoading:{
      type:boolean,
      default:false
    }

  })
</script>

<template>
  <div class="spinner" v-show="props.isLoading"></div>
</template>

<style scoped>
.spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #000000;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
  margin: auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>