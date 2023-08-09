<template>

  <div class="rounded bg-purple flex flex-col gap-3 text-white py-14">
    <h1>{{ amount }}</h1>
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