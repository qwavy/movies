<script setup>
import PageLayout from "./components/UI/page-layout/PageLayout.vue";
import Register from "./views/auth/Register.vue";
import Navbar from "@/components/UI/navbar/navbar.vue";
</script>

<template>
  <PageLayout>
    <RouterView/>
  </PageLayout>
</template>

<style>
html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  font-size: 10px;
  scroll-behavior: smooth;
  font-family: "Roboto" , system-ui;
}

</style>
