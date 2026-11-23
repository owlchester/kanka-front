<template>
  <div class="overflow-x-auto w-full my-6 rounded-xl border border-light/40">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="border-b border-light/40 text-dark">
          <th class="py-4 px-5 font-semibold text-sm uppercase tracking-wide text-purple/80 w-1/4">
            {{ $t('comparisonCommon.featureCol', 'Feature') }}
          </th>
          <th class="py-4 px-5 font-bold text-[1.125rem] leading-snug text-purple bg-purple/5 w-[37.5%]">
            Kanka
          </th>
          <th class="py-4 px-5 font-bold text-[1.125rem] leading-snug text-dark w-[37.5%]">
            {{ competitor }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-light/30 text-sm md:text-base text-dark">
        <tr v-for="(row, idx) in rows" :key="idx">
          <td class="py-4 px-5 font-semibold text-purple align-top">
            {{ row.feature }}
          </td>
          <td class="py-4 px-5 bg-purple/5 align-top">
            {{ row.kanka }}
          </td>
          <td class="py-4 px-5 align-top">
            {{ row.competitor }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
export interface ComparisonRow {
  feature: string
  kanka: string
  competitor: string
}

defineProps<{
  competitor: string
  rows: ComparisonRow[]
}>()
</script>
