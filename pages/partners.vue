<template>
  <BaseHero
      :title="title"
      :lead="lead"
  >
  </BaseHero>

<Section align="left">
  <div class="grid grid-cols-2 xl:grid-cols-4 gap-10">
    <div>
      <h2 class="text-purple flex items-center gap-2 mb-5">
        <img src="/partners/gramel.png" alt="Gramel Books" title="Gramel Books" class="w-16">
        <a href="https://www.facebook.com/wydawnictwo.gramel" target="_blank" rel="nofollow noref" class="link">Gramel Books</a>
      </h2>
      <p>Gramel Books is small Polish RPG publisher, responsible for Polish editions of Savage Worlds, Dungeon World, Monsterhearts, Beyond the Wall and Other Adventures or Eclipse Phase. They've also published a few English-language supplements for Savage Worlds, most notably Beasts and Barbarians and Tropicana, as well as a simplistic game system called Adventurers. Publishing and playing tabletop RPGs is their passion and favourite past-time for more than 20 years, and they are proud and happy to be part of Kanka project!</p>
    </div>
  </div>
</Section>
</template>

<script setup lang="ts">
const title = 'Partners';
const lead = 'We\'ve partnered up with a few amazing tools and communities that share our goals and values.';

useHead({
  title: 'Partners - Kanka',
  meta: [
    { name: 'description', content: lead }
  ],
})
</script>