<template>
  <div class="froth" :class="creamerClass">
    <div v-for="n in 5" :key="n" class="foam"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{ creamer: string }>()

const creamerClass = computed(() => {
  switch (props.creamer) {
    case "milk":
      return "milk"
    case "cream":
      return "cream"
    case "half-half":
      return "half-half"
    case "none":
      return "none"
    default:
      return ""
  }
})
</script>

<style scoped lang="scss">
.froth {
  overflow: visible;
  transform: translateY(400%);
  position: relative;
  height: 20%;
  width: 100%;
  animation: pour-tea 2s 2s forwards;
  color: #c6c6c6; /* default color used by foam */
}

.foam {
  display: block;
  background: currentColor;
  border-radius: 30px;
  height: 40px;
  width: 40px;
  position: absolute;
}

/* bubble layout */
.foam:nth-child(1){ top: 0; left: -3px; }
.foam:nth-child(2){ top: 0; left: 55px; }
.foam:nth-child(3){ width: 30px; height: 30px; top: 3px; left: 30px; }
.foam:nth-child(4){ width: 30px; height: 30px; top: 5px; right: -2px; }
.foam:nth-child(5){ top: 2px; right: 10px; }

/* dynamic colors */
.milk { color: #faf9f6; }
.cream { color: #f5f1e1; }
.half-half { color: #fdf7ef; }
.none { color: transparent; }
</style>
