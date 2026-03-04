<template>
  <div class="w-72 flex flex-col gap-5 justify-center align-center items-center p-4">
    <img class="shadow-sm rounded" v-bind:src="img" v-bind:title="member" :title="member" loading="lazy" width="200" height="200" />
    <div class="flex flex-col gap-2">
      <h3 class="block text-md">{{ member}}</h3>
      <p class="text-sm font-semibold break-words text-center" v-html="role"></p>
      <p class="text-xs text-light break-words text-center" v-html="experience"></p>
    </div>
</div>
</template>


<script>
export default {
  props: {
    img: String,
    member: String,
    role: String,
    experience: String,
  },
}
</script>
