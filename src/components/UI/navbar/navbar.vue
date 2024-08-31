<script setup>
import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import Logo from "@/components/UI/icon/Logo.vue";
import {Input} from "@/components/UI/input/index.js";
import {onMounted} from "vue";

import { useAuthStore } from "@/stores/AuthStore.js";
const authStore = useAuthStore()






</script>

<template>
  <div class="header" v-show="authStore.isAuthed">
    <NavigationMenu>
      <NavigationMenuList class="flex gap-24">
        <NavigationMenuItem>
          <NavigationMenuLink to="/home" class="cursor-pointer">
            <Logo variant="meduim"/>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger >
            <div class=" navbar-item">
              <img src="@/assets/icons/movies.svg" alt="movies icon" class="p-2">
              <span class="">
              Movies
              </span>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="navbar-content">
            <NavigationMenuLink class="genre-item">
              <RouterLink to="/movies/popular">popular</RouterLink>
            </NavigationMenuLink>
              <NavigationMenuLink class="genre-item">
                <RouterLink to="/movies/watching">watching</RouterLink>
              </NavigationMenuLink>
              <NavigationMenuLink class="genre-item">
                <RouterLink to="/movies/expected">expected</RouterLink>
              </NavigationMenuLink>
              <NavigationMenuLink class="genre-item">
                <RouterLink to="/movies/best">best</RouterLink>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div class="navbar-item">
              <img src="@/assets/icons/series.svg" alt="series icon" class="p-2">
              <span>
                Series
              </span>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="navbar-content">
              <NavigationMenuLink class="genre-item">
                <RouterLink to="/series/popular">popular</RouterLink>
              </NavigationMenuLink>
              <NavigationMenuLink class="genre-item">
                <RouterLink to="/series/stream">stream</RouterLink>
              </NavigationMenuLink>
              <NavigationMenuLink class="genre-item">
                <RouterLink to="/series/tv">tv</RouterLink>
              </NavigationMenuLink>
              <NavigationMenuLink class="genre-item">
                <RouterLink to="/series/best">best</RouterLink>
              </NavigationMenuLink>
            </div>

          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div class="navbar-item">
              <img src="@/assets/icons/people.svg" alt="people icon"  class="p-2">
              <span>
              People
              </span>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="navbar-content">
              <NavigationMenuLink class="genre-item">
                <RouterLink to="/people/popular">

                  popular
                </RouterLink>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>

</template>

<style scoped>
  .header{
    position: fixed;
    top: 0;
    left: auto;
    right: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
  }
  .navbar-item{
    display: flex;
    align-items: center;
    padding-top: 15px;
    font-size: 18px;
  }
  .navbar-content{
    width: 400px;
    height: 100px;
  }
  .genre-item{
    padding: 8px 12px;
    margin: auto;
  }
</style>