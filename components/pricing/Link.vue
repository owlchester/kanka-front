<template>
  <NuxtLink :to="to" v-if="to" class="text-blue flex gap-2 items-center font-medium">
    <IconsCheck css="w-6 h-6" v-if="access" />
    <IconsClose css="w-6 h-6" v-else />
    <span>{{ title }}</span>
  </NuxtLink>
  <div class="flex gap-2 items-center text-sm text-dark" v-else>
    <IconsCheck css="w-6 h-6" v-if="access" />
    <IconsClose css="w-6 h-6" v-else />
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    access: Boolean,
    to: String,
    title: String,
  },
  methods: {
  }
}
</script>