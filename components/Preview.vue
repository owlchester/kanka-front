<template>
  <div>
    <figure v-bind:class="previewClass()">
      <NuxtPicture
          v-if="asset"
          :src="'/' + url"
          :alt="alt"
          loading="lazy"
          class="rounded shadow-lg cursor-pointer"
          @click="showFullscreen = true"
      />
      <img
          v-else
          v-bind:src="imageSource()"
          v-bind:alt="alt"
          loading="lazy"
          class="max-h-96 mx-auto rounded shadow-lg cursor-pointer"
          @click="showFullscreen = true"
      />
      <figcaption class="text-light text-sm text-center">
        <slot />
      </figcaption>
    </figure>

    <div v-if="showFullscreen" class="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center cursor-pointer" @click="showFullscreen = false">
      <div class="max-w-full max-h-full p-4">
        <NuxtImg
            v-if="asset"
            :src="'/' + url"
            :alt="alt"
            loading="lazy"
            class="max-h-screen max-w-full object-contain"
        />
        <img
            v-else
            loading="lazy"
            v-bind:src="imageSource()"
            v-bind:alt="alt"
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
    alt: String,
    asset: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showFullscreen: false
    }
  },
  methods: {
    previewClass() {
      let base = 'max-w-3xl mx-auto p-2 flex flex-col gap-3 overflow-hidden ';
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
        window.addEventListener('keydown', this.handleEscKey);
      } else {
        window.removeEventListener('keydown', this.handleEscKey);
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleEscKey);
  }
}
</script>
