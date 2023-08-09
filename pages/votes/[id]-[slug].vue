<template>
  <div v-if="pending">Fetching...</div>
  <div v-else-if="error">Error</div>
  <div v-else>
    <h2 class="text-2xl">{{ vote.data.name }}</h2>

    <div v-html="vote.data.content"></div>

    <div class="flex flex-col gap-2">
      <div class="flex gap-2"  v-for="(option, key) in vote.data.options">
        <div class="grow rounded border p-4 w-full relative">
          <span class="z-10 relative">{{ option }}</span>
          <div class="bg-gray-200 z-5 absolute top-0 left-0 h-full" v-if="hasVotes(key, vote.data.ballots)" v-bind:style="{width: voteWidth(key, vote.data.ballots)}"></div>
        </div>
        <div class="w-8 items-center flex">
          {{ voteWidth(key, vote.data.ballots)}}
        </div>
      </div>

    </div>

    <p><span>{{ vote.data.valid_ballots }} participants voted.</span></p>

    <p v-if="!vote.data.voting">Voting lasted from {{ vote.data.published }} until {{ vote.data.until }}</p>
    <div v-else>
      <p>Voting open from {{ vote.data.published }} until {{ vote.data.until }}</p>

      <a href="">Cast your ballot</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const route = useRoute()

const { data: vote, pending, error } = await useFetch(() => runtimeConfig.public.api + 'votes/' + route.params.id + '?');

// useHead({
//   title: vote.name + ' - Kanka',
//   meta: [
//     { name: 'description', content: vote.excerpt }
//   ],
// })

function hasVotes(option, ballots) {
  if (ballots[option]) {
    return true;
  }
  return false;
}

function voteWidth(option, ballots) {
  if (ballots[option]) {
    return ballots[option] + '%';
  }
  return '0%';
}
</script>
