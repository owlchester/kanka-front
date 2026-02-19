<template>
  <div class="flex flex-col gap-7 text-left faq lg:max-w-4xl lg:w-full lg:mx-auto">
    <FaqQA
        id="payments"
        q="What are the available payment methods?"
        :open="false">
      We accept most credit and debit cards like Visa, Mastercard and American Express. We also accept PayPal for yearly subscriptions.
    </FaqQA>
    <FaqQA
        id="info"
        q="Do you store my payment information?"
        :open="false">
      We use Stripe.com to securely handle your payment information, and we only store limited data regarding your payment method. We use this information to notify you when your card is about to expire, so that you can update it and not lose your subscription.
    </FaqQA>
    <FaqQA
        id="cancel"
        q="What happens if I cancel my subscription during a billing period?"
        :open="false">
      When cancelling your subscription, your bonuses stay active until the date of your next billing period.
    </FaqQA>
    <FaqQA
        id="resub"
        q="What happens to my data when I resubscribe?"
        :open="false">
      When your subscription ends, all features and subscription related data is disabled but saved on our servers. This means that when you resubscribe, everything will go right back to the way you left it.
    </FaqQA>
    <FaqQA
        id="refund"
        q="What is your refund policy?"
        :open="false">
      We offer a no questions asked 14 day refund policy for yearly subscriptions. Simply drop us an email at <a href="mailto:hello@kanka.io">hello@kanka.io</a>.
    </FaqQA>
    <FaqQA
        id="gift"
        q="Can I gift subscriptions?"
        :open="false">
      While gifting subscriptions isn't possible, you can upgrade to premium status any campaign you have access to. This includes campaigns you aren't an admin of, or even a member of.
    </FaqQA>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: 'payment',
    }
  },
}
</script>
