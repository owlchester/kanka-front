<script setup lang="ts">
const route = useRoute()

let go = route.params.slug;
console.log('go', go);

if (go === 'discord') {
  sendRedirect('https://kanka.io')
}
</script>