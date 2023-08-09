<template>
  <div class="w-72 flex flex-col gap-5 justify-center align-center items-center p-4">
    <img class="shadow-sm rounded-sm" v-bind:src="img" v-bind:title="member" lazy="" />
    <div class="flex flex-col gap-2">
      <h3 class="">{{ member}}</h3>
      <p class="text-sm text-light break-words text-center">{{ role }}</p>
    </div>
</div>
</template>


<script>
export default {
  props: {
    img: String,
    member: String,
    role: String,
  },
}
</script>