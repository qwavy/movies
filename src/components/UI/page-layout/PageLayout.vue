<script setup>

import Navbar from "@/components/UI/navbar/navbar.vue";
</script>

<template>
  <div class="layout">
    <Navbar/>
    <main class="main">
      <div class="wrapper">
      <slot></slot>
      </div>
    </main>
  </div>
</template>

<style scoped>
  .layout{
    min-height: 100vh;
    padding-top: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .main{
    width: 100%;
  }
  .wrapper {
    max-width: 1600px;
    min-height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 4rem 10rem 40rem;
    margin: auto;
  }
</style>