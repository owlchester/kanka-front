<template>

  <div class="rounded bg-purple flex flex-col gap-3 text-white py-14">
    <span class="text-lg">{{ amount }}</span>
    <span>{{ text }}</span>
  </div>
</template>


<script>
export default {
  props: {
    amount: String,
    text: String,
  },
}
</script>
