<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent ({
        name: "Buttons",
    })
</script>

<script setup lang="ts">
    interface ButtonProps {
        buttonName: string;
        hasIcon?: boolean;
        isCurved?: boolean;
    }

    defineProps<ButtonProps>()
</script>

<template>
    <div v-if="buttonName == 'primary'" class="btn">
        Hello headerx
    </div>
</template>

<style scoped>
</style>