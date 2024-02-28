<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent ({
        name: "Landing",
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
    <div class="layout">
        <nav>
            <RouterLink to="/">
                <img src="https://res.cloudinary.com/odumz/image/upload/v1709070958/fundall/fundall-logo_notwl7.png" alt="fundall logo" width="80" height="40" />
            </RouterLink>
            <div class="nav_btns">
                <RouterLink to="/login" class="btn">
                    log in
                </RouterLink>
                <RouterLink to="/create-an-account" class="btn btn_green">
                    sign up
                </RouterLink>
            </div>
        </nav>
        <main>
            <img src="https://res.cloudinary.com/odumz/image/upload/v1709070958/fundall/fundall-landing_wmo8q0.png" alt="fundall landing" width="275" height="279" >
            <p class="title">
                Fundall Expense Tracker
            </p>
            <p class="description">
                Mini Project Frontend
            </p>
            <p class="credit">
                by Babatunde Fashola
            </p>
        </main>
    </div>
</template>

<style scoped>
    .layout {
        @apply pt-[35px] px-6 md:px-11 lg:px-16 xl:px-[94px];
    }

    nav {
        @apply flex justify-between items-center w-full;
    }

    .nav_btns {
        @apply flex items-center gap-6;
    }

    .btn {
        @apply text-xs lg:text-[18px] leading-[16px] lg:leading-[23px] text-black uppercase font-medium;
    }

    .btn_green {
        @apply bg-[#4CE895] rounded-[10px] px-[13px] py-[10px];
    }

    main {
        @apply grid content-start justify-items-center h-full mt-[115px];
    }

    .title, .description {
        @apply text-xl xl:text-[40px] xl:leading-[50px];
    }

    .title {
        @apply font-black mt-8 xl:mt-[74px];
    }

    .description {
        @apply mt-2 xl:mt-[14px];
    }

    .credit {
        @apply font-bold text-[24px] leading-[30px] mt-6 xl:mt-[74px] mb-10 xl:mb-[125px];
    }
</style>