<template>
  <div class="border rounded-xs w-72 h-44 px-2 flex flex-col gap-2 justify-center">
    <h3 class="text-purple">{{ date }}</h3>
    <p>{{text }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  date: String,
  text: String,
});
</script>