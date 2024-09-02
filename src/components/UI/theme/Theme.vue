<script setup>

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/UI/dropdown-menu/index.js";
import {Button} from "@/components/UI/button/index.js";
import {Icon} from "@iconify/vue";


import { useColorMode } from '@vueuse/core'
import {onMounted, watch} from "vue";
import {useGlobalStore} from "@/stores/GlobalStore.js";

// Pass { disableTransition: false } to enable transitions
const mode = useColorMode()
const globalStore = useGlobalStore()

watch(mode, (value, oldValue, onCleanup) => {
  globalStore.setTheme(value)
})

onMounted(() => {
  globalStore.setTheme(mode.value)
})

const changeTheme = () => {
  if(mode.value === "dark"){
    return mode.value = "light"
  }
  if(mode.value === "light"){
    return mode.value = "dark"
  }
}

</script>

<template>
      <Button variant="outline" class="button" @click="changeTheme">
        <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </Button>
</template>

<style scoped>
  .button{
    width: 8rem;
  }
</style>