<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent ({
        name: "Dashboard",
    })
</script>

<script setup lang="ts">
</script>

<template>
    <div class="dashboard_layout">
        <div class="grid content-start">
            <nav>
                <RouterLink to="/">
                    <img src="https://res.cloudinary.com/odumz/image/upload/v1709070958/fundall/fundall-logo_notwl7.png" alt="fundall logo" width="80" height="40" />
                </RouterLink>
            </nav>
            <div class="flex gap-[26px] items-end mt-[43px]">
                <div class="user_display">
                    <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 16C18.4188 16 22 12.4187 22 8C22 3.58125 18.4188 0 14 0C9.58125 0 6 3.58125 6 8C6 12.4187 9.58125 16 14 16ZM19.6 18H18.5562C17.1687 18.6375 15.625 19 14 19C12.375 19 10.8375 18.6375 9.44375 18H8.4C3.7625 18 0 21.7625 0 26.4V29C0 30.6562 1.34375 32 3 32H25C26.6562 32 28 30.6562 28 29V26.4C28 21.7625 24.2375 18 19.6 18Z" fill="black"/>
                    </svg>
                </div>
                <div class="user_details">
                    <h2 class="text-[28px] leading-[35px]">
                        Babatunde Fashola
                    </h2>
                    <p class="text-[21px] leading-[27px]">
                        baba2@gmail.com
                    </p>
                </div>
            </div>
            <div class="grid content-start text-[#30443C] mt-[45px]">
                <p class="text-[21px] leading-[27px]">
                    Target Monthly Expenses
                </p>
                <p class="text-[28px] leading-[35px] font-bold">
                    596,000
                </p>
                <div class="dashboard-stat">
                    <div class="case">
                        <div class="progress-bars w-full">
                            <div class="background-progress"></div>
                            <div class="foreground-progress"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="stat_display">
                <p class="text-[14px] leading-[18px]">
                    Daily Expenses Summary
                </p>
                
            </div>

        </div>
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
    .dashboard_layout {
        @apply flex pt-[39px] px-6 lg:px-10 xl:px-[57px] pb-[37px] bg-[#FCFBFC];
    }

    .user_display {
        @apply bg-[#C4C4C4] rounded-[20px] py-7 px-8;
    }

    .user_details {
        @apply grid content-start gap-y-[7px] text-[#30443C];
    }

    .dashboard-stat {
        @apply rounded-xl pt-[17px] pb-3 grid content-start;
    }

    .case {
        @apply relative flex items-center gap-y-2 w-full text-black mb-[13px];
    }

    .progress-bars {
        @apply relative flex justify-center items-center;
    }

    .background-progress {
        @apply absolute flex top-0 left-0 bg-cover w-full h-[11px] rounded-xl bg-[#EFEFEF];
    }

    .foreground-progress {
        @apply absolute flex top-0 left-0 bg-cover rounded-xl bg-[#4DE897] w-3/4 h-[11px];
    }

    .stat_display {
        @apply rounded-[10px] bg-white shadow-[0px_0px_6px_0px_#4DE89730] py-4 px-[14px] text-[#30443C];
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