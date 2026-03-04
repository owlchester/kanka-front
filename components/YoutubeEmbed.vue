<script setup lang="ts">
const props = defineProps<{ videoId: string; title?: string }>()

const active = ref(false)
const src = computed(() =>
    `https://www.youtube-nocookie.com/embed/${props.videoId}?autoplay=1&rel=0`
)
const thumbnail = computed(() =>
    `https://img.youtube.com/vi/${props.videoId}/maxresdefault.jpg`
)
</script>

<template>
    <div class="relative w-full" style="padding-bottom:56.25%">
        <iframe
            v-if="active"
            :src="src"
            :title="title ?? 'YouTube video player'"
            class="absolute inset-0 w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        />
        <button
            v-else
            class="absolute inset-0 w-full h-full group"
            :aria-label="`Play ${title ?? 'video'}`"
            @click="active = true"
        >
            <img
                :src="thumbnail"
                :alt="title ?? 'Video thumbnail'"
                class="w-full h-full object-cover rounded"
                loading="lazy"
            />
            <span class="absolute inset-0 flex items-center justify-center">
                <span class="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg class="w-7 h-7 text-white ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </span>
            </span>
        </button>
    </div>
</template>
