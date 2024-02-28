<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent ({
        name: "LoginForm",
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
    <div class="form_layout">
        <h1 class="text-[26px] xl:text-[34px] leading-[32px] xl:leading-[43px] text-[#1B2420]">
            Holla
        </h1>
        <p class="text-[26px] xl:text-[20px] leading-[32px] xl:leading-[25px] text-[#30443C] mt-[11px]">
            Sign in to the vibe!
        </p>
        <form>
            <div class="input">
                <label for="email">Email or Username</label>
                <input type="text" placeholder="Enter username" name="email" />
                <p class="error"></p>
            </div>
            <div class="input">
                <label for="password">Password</label>
                <input type="password" placeholder="Enter password" name="password" />
                <p class="error"></p>
            </div>
            <button class="btn btn_green">
                Login
            </button>
        </form>
        <div class="grid content-start justify-items-center text-center mt-[26px] ">
            <p class="text-[16px] leading-[20px] text-[#1B2420]">
                Don't have an account?
                <span class="text-[#4DE897]">
                    Register Here
                </span>
            </p>
            <p class="text-[16px] leading-[21px] text-[#97A19D] mt-[15px]">
                By clicking on Login, you agree to our
                <span>
                    Terms & Conditions and Privacy Policy
                </span>
            </p>
        </div>
    </div>
</template>

<style scoped>
    .form_layout {
        @apply pt-[63px] px-6 md:px-11 lg:px-16 xl:px-[96px] pb-[49px] rounded-md shadow-[0px_0px_10px_0px_#00000015] max-w-[592px] bg-white;
    }

    form {
        @apply grid content-start gap-y-[33px] w-full mt-[60px];
    }

    .btn {
        @apply text-xs lg:text-[16px] leading-[16px] lg:leading-[20px] text-black uppercase font-medium mt-[13px];
    }

    .btn_green {
        @apply bg-[#4CE895] py-[18px] shadow-md hover:bg-[#3fcc81];
    }

    p > span {
        @apply text-[#4DE897]
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