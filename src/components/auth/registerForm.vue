<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent ({
        name: "RegisterForm",
    })
</script>

<script setup lang="ts">
</script>

<template>
    <div class="form_layout">
        <form>
            <div class="grid grid-cols-2 gap-x-10">
                <div class="input">
                    <label for="firstName">First Name</label>
                    <input type="text" placeholder="Enter first name" name="firstName" id="firstName" />
                    <p class="error"></p>
                </div>
                <div class="input">
                    <label for="lastName">Last Name</label>
                    <input type="text" placeholder="Enter last name" name="password" />
                    <p class="error"></p>
                </div>
            </div>
            <div class="input">
                <label for="email">Email or Username</label>
                <input type="text" placeholder="Enter username" name="email" />
                <p class="error"></p>
            </div>
            <div class="input">
                <label for="password">Password</label>
                <input type="password" placeholder="Enter password" name="password" id="password" />
                <p class="error"></p>
            </div>
            <div class="input">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" placeholder="Confirm password" name="confirmPassword" id="confirmPassword" />
                <p class="error"></p>
            </div>
            <button class="btn btn_green">
                sign up
            </button>
        </form>
        <div class="grid content-start justify-items-center text-center mt-[26px] ">
            <p class="text-[16px] leading-[20px] text-[#1B2420]">
                Already have an account?
                <span class="text-[#4DE897]">
                    Login Here
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
</style>