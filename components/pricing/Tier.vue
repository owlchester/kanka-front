<template>
  <div class="flex flex-col gap-2">
    <p class="text-purple text-left" v-if="popular">Popular</p>
    <p class="text-dark text-left" v-else-if="best">Best value</p>
    <div v-else class=""><br /></div>
    <div v-bind:class="boxCss()">
      <div class="flex gap-10">
        <div class="grow flex flex-col gap-2">
          <h3 class="text-dark">{{ tier }}</h3>
          <div v-if="currency && !discounted">
            <p class="text-light font-medium">{{ currency }}{{ monthly }}/month
            </p>
          </div>
          <div v-else-if="currency && discounted">
            <p class="text-light font-medium">{{ currency }}{{ yearlyPrice() }}/month
            </p>
            <p class="text-light text-sm">billed yearly</p>
          </div>
          <p v-else class="text-light font-medium">
            {{ monthly }}
          </p>

        </div>
        <div>
        <img v-bind:src="thumbnail" alt="{{ tier }}" />
        </div>
      </div>

      <div class="flex flex-col gap-3 grow">
        <slot />
      </div>

      <NuxtLink to="https://app.kanka.io/en-US/register" class="btn btn-primary">
        {{ cta }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tier: String,
    currency: String,
    monthly: undefined,
    yearly: undefined,
    thumbnail: String,
    cta: String,
    best: Boolean,
    popular: Boolean,
    discounted: Boolean,
  },

  methods: {
    boxCss() {
      let classes = 'flex flex-col gap-8 p-8 border rounded-md text-left grow';
      if (this.best) {
        classes += ' border-dark';
      } else if (this.popular) {
        classes += ' border-blue';
      }
      return classes;
    },
    yearlyPrice() {
      return (this.monthly * 11 / 12).toFixed(2);
    }
  }
}
</script>