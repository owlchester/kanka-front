<template>
  <NuxtLink :to="link" :class="boxCss()">
    <img v-bind:src="img" v-bind:alt="title" class="w-80 h-60">
    <div class="flex flex-col gap-2">
      <div class="flex gap-2">
        <h3 class="grow" v-html="title"></h3>
        <span v-if="featured" title="This campaign is featured">
          <svg class="w-7 h-7" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  aria-label="Featured campaign">
              <g id="add" fill="currentcolor" transform="translate(18.640071, 18.640071)">
                <polygon id="Star" points="237.359929 344.171897 97.8432633 429.388145 135.775711 270.366642 11.6172218 164.011677 174.577429 150.947232 237.359929 3.90798505e-14 300.142429 150.947232 463.102636 164.011677 338.944147 270.366642 376.876595 429.388145">
                </polygon>
              </g>
          </svg>
        </span>
      </div>

      <p class="text-sm text-light" v-if="justify" v-html="justify"></p>

      <div class="flex flex-wrap gap-6 text-sm">
        <span v-if="entities > 0">
          <i class="fa-solid fa-pencil" aria-hidden="true" />
          {{ entities }}
        </span>
        <span v-if="followers > 0">
          <i class="fa-solid fa-eye" aria-hidden="true" />
          {{ followers }}
        </span>
        <span v-if="locale">
          <i class="fa-solid fa-language" aria-hidden="true" />
          {{ locale }}
        </span>
        <span v-if="system">
          <i class="fa-solid fa-sword" aria-hidden="true" />
          {{ system }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    img: String,
    featured: Boolean,
    title: String,
    link: String,
    justify: String,
    entities: String,
    followers: String,
    locale: String,
    system: String,

  },

  methods: {
    boxCss() {
      let css = 'flex flex-col gap-5 text-left ';
      return css + (this.featured ? 'w-72' : 'w-80');
    },
  }
}
</script>