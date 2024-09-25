<script setup>
import { badgeVariants } from ".";
import { cn } from "@/lib/utils";

const props = defineProps({
  variant: { type: null, required: false },
  class: { type: null, required: false },
});
</script>

<template>
  <div :class="cn(badgeVariants({ variant }), props.class)" class="badge">
    <slot />
  </div>
</template>
<style scoped>
.badge{
  padding:4px 8px;
  font-size: 14px;
}
</style>
