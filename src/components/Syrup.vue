<template>
  <div class="syrup" :class="syrupClass"></div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{ syrup: string }>()

const syrupClass = computed(() => {
  switch (props.syrup) {
    case "vanilla":
      return "vanilla"
    case "caramel":
      return "caramel"
    case "hazelnut":
      return "hazelnut"
    case "none":
      return "none"
    default:
      return ""
  }
})
</script>

<style scoped lang="scss">
.syrup {
  transform: translateY(400%);
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
  background-color: #c6c6c6;
}

.vanilla { background-color: #f3e5ab; }
.caramel { background-color: #c68c53; }
.hazelnut { background-color: #b88961; }
.none { background-color: transparent; }
</style>

