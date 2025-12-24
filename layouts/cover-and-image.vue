<script setup lang="ts">
import { computed } from "vue";

// Props are automatically passed from the frontmatter
const props = withDefaults(
  defineProps<{
    image?: string;
    imageWidth?: string;
    gitRepo?: string;
  }>(),
  {
    imageWidth: "400px",
  },
);

const gridTemplateColumns = computed(() => `${props.imageWidth} 1fr`);
</script>

<template>
  <div
    class="slidev-layout cover-and-image grid h-full !px-0"
    :style="{ gridTemplateColumns }"
  >
    <!-- Left column: Image with fixed width -->
    <div class="col-left flex items-center justify-center overflow-hidden">
      <img
        v-if="props.image"
        :src="props.image"
        alt="Cover image"
        class="w-full h-full object-contain"
      />
    </div>

    <!-- Right column: Content (takes remaining space) -->
    <div class="col-right flex items-center justify-center">
      <div class="w-full">
        <slot />
      </div>
    </div>

    <!-- Gravitek logo with absolute positioning -->
    <img
      src="https://cdn.jsdelivr.net/gh/gravitek-io/slidev-theme-gravitek@main/public/gravitek-full.svg"
      alt="Gravitek"
      class="h-10 abs-tl mt-6 ms-13"
    />
    <!-- Gravitek github button with absolute positioning -->
    <div v-if="props.gitRepo" class="abs-br me-12 mb-8">
      <a
        :href="props.gitRepo"
        target="_blank"
        class="slidev-icon-btn"
        alt="Git repository"
        title="Git repository"
      >
        <carbon:logo-github />
      </a>
    </div>
  </div>
</template>
