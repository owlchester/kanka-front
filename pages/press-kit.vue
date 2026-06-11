<template>
    <BaseHero
        :title="$t('pressKit.title')"
        :lead="$t('pressKit.lead')"
    />

    <Section align="left">
        <h2 class="text-purple">{{ $t('pressKit.shortDescriptionTitle') }}</h2>

        <p>
            {{ $t('pressKit.shortDescriptionBody1') }}
        </p>

        <p>
            {{ $t('pressKit.shortDescriptionBody2') }}
        </p>

        <h2 class="text-purple">{{ $t('pressKit.logosTitle') }}</h2>

        <p>
            <a
                href="https://kanka-app-assets.s3.amazonaws.com/images/logos/kanka-logo-large.png"
                target="_blank"
            >
                <i class="fa-solid fa-image" aria-hidden="true"></i>
                kanka-logo-large.png
            </a>
            <small class="text-xs">25.7kb</small>
        </p>

        <p>
            <a
                href="https://kanka-app-assets.s3.amazonaws.com/images/logos/kanka-icon-large.png"
                target="_blank"
            >
                <i class="fa-solid fa-image" aria-hidden="true"></i>
                kanka-icon-large.png
            </a>
            <small class="text-xs">14.0kb</small>
        </p>

        <p>
            {{ $t('pressKit.needMore') }}
            <a href="mailto:hello@kanka.io" class="link-light"
                >hello@kanka.io</a
            >
        </p>
    </Section>
</template>

<script setup lang="ts">
useSeo({
    title: "Press Kit - Kanka",
    description:
        "Thanks for your interest in Kanka! Please use the following resources when talking about us.",
    path: "/press-kit",
});
</script>
