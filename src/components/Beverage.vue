<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Creamer :creamer="creamer" />
      </template>
      <template v-slot:mid>
        <Syrup :syrup="syrup" />
      </template>
      <template v-slot:bottom>
        <Base :base="base" />
      </template>
    </Contents>
  </Mug>
</template>

<script setup lang="ts">
import Mug from "./Mug.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";
import Contents from "./Contents.vue";
import Creamer from "./Creamer.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";

defineProps<{
  isIced: boolean;
  base: string;
  syrup: string;
  creamer: string;
}>();
</script>