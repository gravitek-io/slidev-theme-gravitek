<template>
  <!-- Footer appears on all slides except the first one -->
  <footer
    v-if="$slidev.nav.currentPage > 1"
    class="absolute bottom-0 left-0 right-0 px-4 py-2 flex justify-between items-center text-sm opacity-50"
  >
    <!-- Left: Gravitek logo -->
    <div class="flex items-center">
      <img src="/gravitek-full.svg" alt="Gravitek" class="h-5" />
    </div>

    <!-- Right: Training name -->
    <div class="text-gravitek text-xs">
      {{ $slidev.configs.title || "Formation" }}
    </div>
  </footer>
</template>

<style scoped>
footer {
  pointer-events: none;
}
</style>
