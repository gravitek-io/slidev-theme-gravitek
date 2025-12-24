<script setup lang="ts">
// Props are automatically passed from the frontmatter
const props = defineProps<{
  gitRepo?: string;
}>();
</script>

<template>
  <div class="slidev-layout cover">
    <div class="my-auto w-full">
      <slot />
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
