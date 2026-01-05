<template>
  <BaseHero
      title="Security"
      lead="Our small team is commited to providing top notch data protection standards to ensure that your data is safe with us." />


  <Section align="left">

    <h2 class="text-purple">Data centre security</h2>

    <p>Kanka is hosted on multiple servers to ensure redundancy, and we have disaster recovery procedures in place should something bad happen. Our servers are hosted by Hetzner.</p>

    <h2 class="text-purple">EU hosted infrastructure</h2>

    <p>Our servers and all of your data is hosted on servers inside the European Union. This allows us to meet specific regulatory and compliance requirements that ensure your data is safe with us. Our data center providers Hetzner and Amazon Cloud Europe have a history of quality and expertise in the handling of digital data.</p>

    <h2 class="text-purple">Secure communication</h2>

    <p>All user data is transported securely and privately, as it is encrypted in transit via SSL. Encrypting data in transit protects it from unauthorised snooping, modification, as well as man-in-the-middle attacks.</p>

    <h2 class="text-purple">Credit cards</h2>

    <p>We don't store your credit card information. We use Stripe to process credit cards, with all communication between you, our servers, and Stripe being encrypted. The only credit card information provided by Stripe that we store is your card's expiration date and brand, so that we can notify you when your card expires.</p>

    <h2 class="text-purple">Data backups</h2>

    <p>Our database is backed up twice a day to ensure your data stays safe and highly available. Our database backups are regularly tested to ensure that we can quickly restore data if needed.</p>

    <h2 class="text-purple">Log collection</h2>

    <p>We automatically collect detailed logs to ensure that we can quickly and effectively resolve bugs and issues with users. These detailed logs are frequently purged, and are also automatically purged when when you delete your account.</p>

    <h2 class="text-purple">Data breach</h2>

    <p>Should Kanka be the target of a data breach involving personal data, we will promptly report it to the local authorities as well as to the users involved.</p>
  </Section>
</template>

<script setup lang="ts">
useHead({
  title: 'Security - Kanka',
  meta: [
    { name: 'description', content: 'Our small team is commited to providing top notch data protection standards to ensure that your data is safe with us.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://kanka.io/security' }
  ],
})
</script>
