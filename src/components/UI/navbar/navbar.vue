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
} from '@/components/UI/navigation-menu'
import Logo from "@/components/UI/icon/Logo.vue";
import {Input} from "@/components/UI/input/index.js";
import {computed, onMounted} from "vue";

import { useAuthStore } from "@/stores/AuthStore.js";
import Theme from "@/components/UI/theme/Theme.vue";
import {useGlobalStore} from "@/stores/GlobalStore.js";
const authStore = useAuthStore()

const globalStore = useGlobalStore()

const iconTheme = computed(() => {
  return globalStore.theme === "light"
      ? "#000000"
      : "#FFFFFF";
})

</script>

<template>
  <div class="header" v-show="authStore.isAuthed">
    <NavigationMenu>
      <NavigationMenuList class="flex gap-24">
        <NavigationMenuItem>
          <RouterLink to="/home" class="cursor-pointer">
            <Logo variant="meduim"/>
          </RouterLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <div class="navbar-item">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-movie"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 4l0 16" /><path d="M16 4l0 16" /><path d="M4 8l4 0" /><path d="M4 16l4 0" /><path d="M4 12l16 0" /><path d="M16 8l4 0" /><path d="M16 16l4 0" /></svg>
              <span class="">
                Movies
              </span>
            </div>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <div class="navbar-item">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-users"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
              <span>
                Series
              </span>
            </div>

        </NavigationMenuItem>
        <NavigationMenuItem>
            <div class="navbar-item">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chart-bar-popular"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M9 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M15 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 20h14" /></svg>
              <span>
              People
              </span>
            </div>
        </NavigationMenuItem>
        <NavigationMenuItem>

          <theme/>
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
    font-weight: 500;
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