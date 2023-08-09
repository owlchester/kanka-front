<template>

  <div class="flex flex-col gap-3 text-sm">
    <span class="block text-nav uppercase">{{title }}</span>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
}
</script>