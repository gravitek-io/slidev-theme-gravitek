<script setup lang="ts">
/**
 * InsightBox - A reusable component for displaying highlighted information blocks
 *
 * Props:
 * - type: 'info' | 'tip' | 'warning' | 'danger' - Changes the color scheme
 * - icon: string - Optional custom icon (default depends on type)
 */

interface Props {
  type?: 'info' | 'tip' | 'warning' | 'danger'
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'tip',
})

// Define color schemes based on type
const colorSchemes = {
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-500',
    icon: 'ℹ️',
  },
  tip: {
    bg: 'bg-gravitek-accent:10',
    border: 'border-gravitek-accent',
    icon: '💡',
  },
  warning: {
    bg: 'bg-orange-50',
    border: 'border-orange-500',
    icon: '⚠️',
  },
  danger: {
    bg: 'bg-red-50',
    border: 'border-red-500',
    icon: '🚨',
  },
}

const scheme = colorSchemes[props.type]
const displayIcon = props.icon || scheme.icon
</script>

<template>
  <div :class="['mt-6 p-4 border-l-4 text-xs', scheme.bg, scheme.border]">
    <span v-if="displayIcon" class="mr-2">{{ displayIcon }}</span>
    <slot />
  </div>
</template>
