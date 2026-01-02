<template>
  <Section>
    <figure class="max-w-screen-md mx-auto text-center flex flex-col gap-4">
      <blockquote>
        <p class="text-2xl italic font-medium text-purple">
          <slot></slot>
        </p>
      </blockquote>
      <div class="flex items-center justify-center gap-3 v">
        <img class="w-8 h-8 rounded-full" :src="img" v-if="img" alt="profile picture" loading="lazy">
        <div class="flex items-center divide-x divide-gray-500">
          <div class="pe-3 font-medium text-dark ">{{user}}</div>
          <div class="ps-3 text-sm text-light">{{title}}</div>
        </div>
      </div>
    </figure>
  </Section>
</template>


<script>
export default {
  props: {
    text: String,
    user: String,
    title: String,
    img: String,
  },

  methods: {
    iconCss() {
      return this.icon + ' text-6xl';
    }
  }
}
</script>
