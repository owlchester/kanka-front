<template>
  <div class="flex flex-col gap-7 text-left faq lg:max-w-4xl lg:w-full lg:mx-auto">
    <FaqQA
        v-for="faq in faqs"
        :key="faq.id"
        :id="faq.id"
        :q="faq.q"
        :open="false">
      <span v-html="faq.a" />
    </FaqQA>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  faqs: { id: string; q: string; a: string }[]
}>()
</script>
