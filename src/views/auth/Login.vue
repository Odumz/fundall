<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent ({
        name: "Login",
    })
</script>

<script setup lang="ts">
    import LoginForm from '@/components/auth/loginForm.vue';

    interface CardProps {
        cardName: string;
        isSignIn?: boolean;
    }

    defineProps<CardProps>()
</script>

<template>
    <div class="login_layout">
        <nav>
            <RouterLink to="/">
                <img src="https://res.cloudinary.com/odumz/image/upload/v1709070958/fundall/fundall-logo_notwl7.png" alt="fundall logo" width="80" height="40" />
            </RouterLink>
        </nav>
        <main>
            <div class="intro">
                <img src="https://res.cloudinary.com/odumz/image/upload/v1709072835/fundall/fundall-login_jiztsq.png" alt="fundall login" width="277" height="204" />
                <h1 class="text-[40px] leading-[50px] font-black text-black w-3/5 mt-9">
                    <span class="text-[#4CE895]">Welcome back!</span> We miss you.
                </h1>
            </div>
            <div class="login">
                <LoginForm />
            </div>
        </main>
    </div>
</template>

<style scoped>
    .login_layout {
        @apply grid content-start pt-[45px] px-6 lg:px-[45px];
    }

    nav {
        @apply flex justify-between items-center w-full;
    }

    main {
        @apply flex items-center w-full h-full px-4 md:px-10 xl:px-[77px];
    }

    .intro {
        @apply w-[43%] grid content-start;
    }

    .login {
        @apply w-[57%];
    }

    .title, .description {
        @apply text-xl xl:text-[40px] xl:leading-[50px]
    }

    .title {
        @apply font-black mt-8 xl:mt-[74px]
    }

    .description {
        @apply mt-2 xl:mt-[14px]
    }

    .credit {
        @apply font-bold text-[24px] leading-[30px] mt-[74px]
    }
</style>