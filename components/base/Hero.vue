<template>
  <div :class="blockCss()">
    <div :class="textCss()">
      <h1 class="">{{ title }}</h1>
      <p v-if="lead" class="lg:max-w-2xl text-center">{{ lead }}</p>
      <p v-if="trailing" class="lg:max-w-2xl text-center">{{ trailing }}</p>
      <slot/>
    </div>
    <div v-if="video" :class="videoCss()">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/hoXHTKjobek?si=GU3PjbAU5sdvh6aF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    lead: String,
    trailing: String,
    big: Boolean,
    video: Boolean,
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
      blockCss() {
          let base = 'px-6 py-20 bg-purple text-white flex flex-col xl:flex-row items-center justify-center gap-16';
          // if (this.video) {
          //     base += ' gap-8';
          // } else {
          //     base += ' gap-16';
          // }
          if (this.big) {
              return base + ' lg:py-36';
          }
          return base + ' lg:py-24';
      },
    textCss() {
      let base = 'lg:max-w-7xl text-center flex flex-col gap-8 items-center';
      if (this.big) {
        return base + ' ';
      }
      return base + ' ';
    },
    videoCss() {
        return '';
    }
  }
}
</script>
