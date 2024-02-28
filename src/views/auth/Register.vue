<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent ({
        name: "Register",
    })
</script>

<script setup lang="ts">
    import RegisterForm from '@/components/auth/registerForm.vue';
</script>

<template>
    <div class="register_layout">
        <nav>
            <RouterLink to="/">
                <img src="https://res.cloudinary.com/odumz/image/upload/v1709070958/fundall/fundall-logo_notwl7.png" alt="fundall logo" width="80" height="40" />
            </RouterLink>
        </nav>
        <main>
            <div class="intro">
                <img src="https://res.cloudinary.com/odumz/image/upload/v1709070958/fundall/fundall-landing_wmo8q0.png" alt="fundall login" width="277" height="204" />
                <h1 class="text-[40px] leading-[50px] font-black text-black w-3/4 mt-9">
                    <span class="text-[#4CE895]">Welcome!</span> Let's get to know you.
                </h1>
                <p class="mt-[29px] text-[21px] leading-[26px] text-black w-3/4">
                    Your first step toward a better financial lifestyle starts here.
                </p>
            </div>
            <div class="register">
                <RegisterForm />
                <p class="text-[16px] leading-[21px] text-[#97A19D] mt-[33px]">
                    By clicking on Login, you agree to our
                    <span>
                        Terms & Conditions and Privacy Policy
                    </span>
                </p>
            </div>
        </main>
    </div>
</template>

<style scoped>
    .register_layout {
        @apply grid content-start pt-[45px] px-6 lg:px-[45px];
    }

    nav {
        @apply flex justify-between items-center w-full;
    }

    main {
        @apply flex items-center w-full h-full px-4 md:px-10 xl:px-[77px] mb-[76px];
    }

    .intro {
        @apply w-[43%] grid content-start;
    }

    .register {
        @apply grid justify-items-center content-center w-[57%];
    }

    p > span {
        @apply text-[#4DE897]
    }
</style>