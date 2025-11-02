<template>
  <div class="carafe">
    <slot name="top" />
    <slot name="mid" />
    <slot name="bottom" />
  </div>
</template>

<style scoped>
.carafe {
  min-height: 96px;
  overflow: hidden;
  border-radius: 0.05em 0.05em 2.2em 2.2em;
  background: #C6C6C6;
  width: 100%;
  height: 100%;
  position: relative;
}

/* Ensure child layers can be stacked */
.carafe ::v-deep(*) {
  position: relative;
}

::v-deep([slot="top"]) { z-index: 3; }
::v-deep([slot="mid"]) { z-index: 2; }
::v-deep([slot="bottom"]) { z-index: 1; }
</style>

