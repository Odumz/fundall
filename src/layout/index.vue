<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent ({
        name: "Layout"
    })
</script>

<script setup lang="ts">
    import Header from '@/components/layout/header.vue';
    import Footer from '@/components/layout/footer.vue';
</script>

<template>
    <div class="layout">
        <p class="text-upstore-primary-400 text-3xl">
            heeloldh
        </p>
        <Header />
        <RouterView />
        <Footer />
    </div>
</template>

<style scoped>
    .layout {
        @apply grid content-start;
    }
</style>