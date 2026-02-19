<template>
  <div class="flex flex-col gap-2">
    <p class="text-purple text-left" v-if="popular">Popular</p>
    <p class="text-dark text-left" v-else-if="best">Best value</p>
    <div v-else class=""><br /></div>
    <div v-bind:class="boxCss()">
      <div class="flex gap-10">
        <div class="grow flex flex-col gap-2">
          <h3 class="text-dark">{{ tier }}</h3>
          <div v-if="defaultCurrency() && !discounted">
            <p class="text-purple font-medium" v-if="monthly == 'Free'">{{ monthly }}
            </p>
              <p class="text-purple front-medium" v-else>
                  {{ defaultCurrency() }}{{ monthly }}/month
              </p>
          </div>
          <div v-else-if="defaultCurrency() && discounted">
            <p class="text-light font-medium">{{ defaultCurrency() }}{{ yearlyPrice() }}/month
            </p>
            <p class="text-light text-sm">billed yearly</p>
          </div>
          <p v-else class="text-light font-medium">
            {{ monthly }}
          </p>

        </div>
        <div>
        <img v-bind:src="thumbnail" alt="{{ tier }}" width="71" height="71" loading="lazy" />
        </div>
      </div>

      <div class="flex flex-col gap-3 grow">
        <slot />
      </div>

      <a :href="registerUrl()" class="btn btn-primary">
        {{ cta }}
      </a>
    </div>
  </div>
</template>

<script setup type="ts">

const runtimeConfig = useRuntimeConfig().public

const props = defineProps({
  tier: String,
  currency: String,
  monthly: undefined,
  yearly: undefined,
  thumbnail: String,
  cta: String,
  best: Boolean,
  popular: Boolean,
  discounted: Boolean,
})

const { state, country } = asyncCurrency();

function defaultCurrency() {
  if (country.value == 'EUR') {
    return '€';
  }
  return '$';
}
function boxCss() {
  let classes = 'flex flex-col gap-8 p-8 border rounded-md text-left grow';
  if (props.best) {
    classes += ' border-dark';
  } else if (props.popular) {
    classes += ' border-blue';
  }
  return classes;
}
function yearlyPrice() {
  return (props.monthly * 10 / 12).toFixed(2);
}
function registerUrl() {
  return runtimeConfig.app + '/register?from=pricing';
}
</script>
