<template>
  <BaseHero
      :title="title"
      :lead="lead" />

  <Section  v-if="pending">
    <p>Fetching...</p>
  </Section>

  <div v-else class="lg:max-w-4xl lg:w-full lg:mx-auto">

    <Section align="left" v-for="category in categories">
      <h2 class="text-purple">{{ category.name }}</h2>

      <div class="flex flex-col gap-7 text-left faq">
        <FaqQA
            v-for="question in category.questions"
            :id="question.slug"
            :q="question.q"
            :open="isOpen(question.slug)"
        >
          <div v-html="question.a" class="flex flex-col gap-3 kb-answer"></div>
        </FaqQA>
      </div>
    </Section>
  </div>

  <Section>
    <div class="max-w-2xl mx-auto flex flex-col gap-6">

      <h2 class="text-purple">Didn't find what you were looking for?</h2>
      <div class="flex gap-5 justify-center items-center align-center">
        <a v-bind:href="runtimeConfig.public.discordLink" class="btn-round">
          <i class="fa-brands fa-discord" aria-hidden="true"></i>
          Join our Discord
        </a>
        <a href="//docs.kanka.io" class="btn-round">
          <i class="fa-solid fa-books" aria-hidden="true"></i>
          Check the documentation
        </a>
        <a href="mailto:hello@kanka.io" class="btn-round">
          <i class="fa-solid fa-at" aria-hidden="true"></i>
          Send us an email
        </a>
      </div>
    </div>
  </Section>
</template>

<style>
.kb-answer {
  & a {
    text-decoration: underline;
  }
}
</style>

<script setup lang="ts">

const title = 'Knowledge base'
const lead = 'The Kanka knowledge base, where you can find answers to the most frequently asked questions.'
const runtimeConfig = useRuntimeConfig()

const route = useRoute();

const { data: categories, pending, error } = await useFetch(() => runtimeConfig.public.api + 'kb');

//console.log(runtimeConfig.public.api)
useHead({
  title: title + ' - Kanka',
  meta: [
    { name: 'description', content: lead }
  ],
})

function isOpen(id: String) {
  //console.log(this.route.hash)
  return id === route.hash.substring(1);
}

</script>
