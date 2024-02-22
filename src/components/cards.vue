<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent ({
        name: "Cards",
    })
</script>

<script setup lang="ts">
    interface CardProps {
        cardName: string;
        isSignIn?: boolean;
    }

    defineProps<CardProps>()
</script>

<template>
    <div class="text-3xl text-ss-crayola-red">
        Hello headerx
    </div>
</template>

<style scoped>
</style>