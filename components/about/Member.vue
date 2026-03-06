<template>
  <div
    class="flex flex-col gap-5 justify-center items-center p-4 w-full transition-all duration-300"
    :class="bio?.length ? 'cursor-pointer' : ''"
    @click="toggle"
  >
    <img
      :class="['shadow-sm rounded', bio?.length ? 'member-img' : '']"
      :src="img"
      :alt="member"
      loading="lazy"
      width="200"
      height="200"
    />
    <div class="flex flex-col gap-2 items-center w-full">
      <h3 class="block" v-html="member"></h3>
      <p class="break-words" v-html="role"></p>
      <p class="text-sm text-light break-words text-center" v-html="experience"></p>

      <div v-if="bio?.length" class="relative w-full text-sm text-left mt-2">
        <div
          class="overflow-hidden transition-all duration-500 flex flex-col gap-2"
          :class="expanded ? 'max-h-[2000px]' : 'max-h-[4.5em]'"
        >
          <p v-for="(paragraph, i) in bio" :key="i">{{ paragraph }}</p>
        </div>
        <!-- Fade gradient, hidden when expanded -->
        <div
          class="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none transition-opacity duration-300"
          :class="expanded ? 'opacity-0' : 'opacity-100'"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  img: String,
  member: String,
  role: String,
  experience: String,
  bio: Array,
})

const expanded = ref(false)

function toggle() {
  if (props.bio?.length) expanded.value = !expanded.value
}
</script>

<style scoped>
@keyframes wobble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-4deg); }
  75% { transform: rotate(4deg); }
}

.member-img:hover {
  animation: wobble 0.4s ease-in-out;
}
</style>
