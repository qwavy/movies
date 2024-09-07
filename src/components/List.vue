<script setup>

const props = defineProps({
  movies: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div v-show="movies">
    <div class="card-list" >
    </div>
  </div>
</template>

<style scoped>
  .card-list{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px 100px;
  }
</style>