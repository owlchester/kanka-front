<template>
  <div>
    <figure v-bind:class="previewClass()">
      <img
          v-bind:src="imageSource()"
          v-bind:alt="text"
          loading="lazy"
          class="max-h-96 mx-auto rounded shadow-lg cursor-pointer"
        @click="showFullscreen = true"
      />
      <figcaption class="text-light text-xs">
        <slot />
      </figcaption>
    </figure>

    <div v-if="showFullscreen" class="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center cursor-pointer" @click="showFullscreen = false">
      <div class="max-w-full max-h-full p-4">
        <img
            loading="lazy"
            v-bind:src="imageSource()"
            v-bind:alt="text"
            class="max-h-screen max-w-full object-contain"
        />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    css: String,
    url: String,
    text: String
  },
  data() {
    return {
      showFullscreen: false
    }
  },
  methods: {
    previewClass() {
      let base = 'text-center flex flex-col gap-3 ';
      return base + this.css;
    },

    imageSource() {
      let base = 'https://d3a4xjr8r2ldhu.cloudfront.net/';
      return base + this.url;
    },
    handleEscKey(event) {
      if (event.key === 'Escape') {
        this.showFullscreen = false;
      }
    }
  },
  watch: {
    showFullscreen(newValue) {
      if (newValue) {
        // Add event listener when the modal is opened
        window.addEventListener('keydown', this.handleEscKey);
      } else {
        // Remove event listener when the modal is closed
        window.removeEventListener('keydown', this.handleEscKey);
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleEscKey);
  }
}
</script>
