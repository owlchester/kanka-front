<template>
  <div v-bind:id="id" class="flex flex-col gap-5 text-dark qa">
    <div class="flex items-center gap-2 cursor-pointer" @click="toggle()">
      <p class="grow text-nav">{{ q }}</p>
      <IconsClose v-if="expanded()" css="w-8 h-8" />
      <IconsPlus v-else css="w-8 h-8" />
    </div>
    <div class="flex gap-2 " v-if="expanded()">
      <span class="fa-solid fa-link mt-1 cursor-pointer" aria-hidden="true" @click="copy(id)" title="Copy link to question to the clipboard" />
      <p class="grow">
        <slot />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    q: String,
    open: Boolean,
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    expanded() {
      return this.isOpen;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
    copy(id) {
      let link = window.location.host + this.$route.path + '#' + id;
      navigator.clipboard.writeText(link)
    }
  },
  mounted() {
    this.isOpen = this.open;
  }
}
</script>