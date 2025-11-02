<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{ base: string }>()

const baseClass = computed(() => {
  switch (props.base) {
    case "coffee":
      return "coffee"
    case "green-tea":
      return "green-tea"
    case "black-tea":
      return "black-tea"
    default:
      return ""
  }
})
</script>

<template>
  <div class="base" :class="baseClass"></div>
</template>

<style scoped>
.base {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  margin-top: -10%;
}
.coffee { background: #5a381e; }
.green-tea { background: #cfe2a9; }
.black-tea { background: #9b5c15; }
</style>