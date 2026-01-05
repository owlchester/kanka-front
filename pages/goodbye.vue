<template>
  <BaseHero
      title="Goodbye" />

  <Section align="left">

    <p>We're sorry to see you go and we understand that deleting your account is a big decision. We appreciate the time you spent with Kanka and we hope that it met your expectations.</p>

    <p>Please know that our team is committed to constantly improving and updating Kanka to provide the best experience possible. We value your feedback and suggestions, and we encourage you to reach out to us at :email any time with any comments you may have.</p>

    <p>We also want you to know that should you ever decide to return, we would be more than happy to have you back. We are confident that with our frequent updates, you will find Kanka even better and more user-friendly than ever before.</p>

    <p>Thank you again for being a part of our community. We wish you all the best in your future worldbuilding endeavours.</p>
  </Section>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
useHead({
  title: 'Goodbye - Kanka',
  meta: [
    { name: 'description', content: 'Thank you for being a part of our community.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://kanka.io/goodbye' }
  ],
})
</script>
