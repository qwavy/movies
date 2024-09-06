<!--<script setup>-->
<!--import { computed } from "vue";-->
<!--import { ProgressIndicator, ProgressRoot } from "radix-vue";-->
<!--import { cn } from "@/lib/utils";-->

<!--const props = defineProps({-->
<!--  modelValue: { type: [Number, null], required: false, default: 0 },-->
<!--  max: { type: Number, required: false },-->
<!--  getValueLabel: { type: Function, required: false },-->
<!--  asChild: { type: Boolean, required: false },-->
<!--  as: { type: null, required: false },-->
<!--  class: { type: null, required: false },-->
<!--});-->

<!--const delegatedProps = computed(() => {-->
<!--  const { class: _, ...delegated } = props;-->

<!--  return delegated;-->
<!--});-->
<!--</script>-->

<!--<template>-->
<!--  <ProgressRoot-->
<!--    v-bind="delegatedProps"-->
<!--    :class="-->
<!--cn(-->
<!--  'relative h-4 w-full overflow-hidden rounded-full bg-secondary',-->
<!--  props.class-->
<!--)"-->
<!--  >-->
<!--    <ProgressIndicator-->
<!--      class="h-full w-full flex-1 bg-primary transition-all"-->
<!--      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"-->
<!--    />-->
<!--  </ProgressRoot>-->
<!--</template>-->
<script setup>
import { computed } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps({
  modelValue: { type: [Number, null], required: false, default: 0 },
  max: { type: Number, required: false, default: 100 },
  size: { type: Number, required: false, default: 100 }, // Diameter of the circle
  strokeWidth: { type: Number, required: false, default: 8 }, // Thickness of the circle
  fillColor: { type: String, required: false, default: '' },
  backgroundColor: { type: String, required: false, default: '' },
});

const radius = computed(() => (props.size - props.strokeWidth) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);

const offset = computed(() => {
  const percentage = (props.modelValue / props.max) * 100;
  return circumference.value - (percentage / 100) * circumference.value;
});

const backgroundColor = computed(() =>
    cn(
        "transition-all duration-500",
        props.backgroundColor
    )
);
const fillColor = computed(() => {
  cn(
      props.fillColor
  )
})

</script>

<template>
  <svg :width="props.size" :height="props.size" class="block transform rotate-[-90deg]" >
    <circle
        :cx="props.size / 2"
        :cy="props.size / 2"
        :r="radius"
        :stroke-width="props.strokeWidth"
        stroke="currentColor"
        :class="backgroundColor"
        fill="transparent"
    />
    <circle
        :cx="props.size / 2"
        :cy="props.size / 2"
        :r="radius"
        :stroke-width="props.strokeWidth"
        stroke="currentColor"
        :class="fillColor"
        fill="transparent"
        :style="`stroke-dasharray: ${circumference}; stroke-dashoffset: ${offset};`"
    />
  </svg>
</template>