<template>
  <div class="slidev-layout two-cols-top h-full flex flex-col">
    <!-- Title section (full width) -->
    <div class="title-section mb-4">
      <slot />
    </div>

    <!-- Two columns section -->
    <div class="grid grid-cols-2 gap-8 flex-1 items-start w-full">
      <!-- Left column -->
      <div class="col-left">
        <slot name="left" />
      </div>

      <!-- Right column -->
      <div class="col-right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.two-cols-top {
  /* Ensure both columns start at the top */
  align-items: start;
}
</style>
