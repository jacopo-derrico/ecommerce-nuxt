<template>
    <div>
        <div class="flex justify-between items-center w-5/6 mx-auto h-20 text-white">
            <div>
                E-commerce SSR
            </div>

            <!-- lg menu -->
            <div class="hidden lg:flex items-center gap-3 h-full font-medium">
                <NuxtLink to="/"
                    class="cursor-pointer flex items-center h-full hover:border-b-4 hover:border-b-white hover:mb-[-4px]">
                    Home page</NuxtLink>
                <NuxtLink v-if="!authStore.authenticated" to="/login"
                    class="cursor-pointer flex items-center h-full hover:border-b-4 hover:border-b-white hover:mb-[-4px]">
                    Login</NuxtLink>
                <NuxtLink v-else to="/my-account"
                    class="cursor-pointer flex items-center h-full hover:border-b-4 hover:border-b-white hover:mb-[-4px]">
                    My account</NuxtLink>
            </div>

            <!-- wishlist & cart -->
            <div class="flex gap-3">
                <div class="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <span :class="wishlist.length > 0 ? 'block' : 'hidden'" class="absolute top-[-10px] right-[-10px] bg-red-600 px-[5px] rounded-full text-xs">
                        {{ wishlist.length }}
                    </span>
                </div>
                <div class="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <span :class="cart.length > 0 ? 'block' : 'hidden'" class="absolute top-[-10px] right-[-10px] bg-red-600 px-[5px] rounded-full text-xs">
                        {{ cart.length }}
                    </span>
                </div>
                <!-- mobile menu button -->
                <button @click="isMobileOpen = !isMobileOpen" class="w-3">
                    <svg :class="{'block': !isMobileOpen, 'hidden': isMobileOpen}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                    <svg :class="{'block': isMobileOpen, 'hidden': !isMobileOpen}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </button>

                <!-- actual mobile menu -->
                <div :class="{'block': isMobileOpen, 'hidden': !isMobileOpen}" class="absolute top-20 left-0 right-0 py-10 bg-blue-600 font-medium">
                    <div class="flex flex-col items-center gap-3 ">
                        <NuxtLink to="/" @click="isMobileOpen = !isMobileOpen"
                            class="cursor-pointer flex items-center h-full hover:border-b-4 hover:border-b-white hover:mb-[-4px]">
                            Home page</NuxtLink>
                        <NuxtLink v-if="!authStore.authenticated" to="/login" @click="isMobileOpen = !isMobileOpen"
                            class="cursor-pointer flex items-center h-full hover:border-b-4 hover:border-b-white hover:mb-[-4px]">
                            Login</NuxtLink>
                        <NuxtLink v-else to="/my-account" @click="isMobileOpen = !isMobileOpen"
                            class="cursor-pointer flex items-center h-full hover:border-b-4 hover:border-b-white hover:mb-[-4px]">
                            My account</NuxtLink>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
    import { useProductsStore } from '~/store/productsApi';
    import { useAuthStore } from '~/store/auth';
    const productsStore = useProductsStore();
    const authStore = useAuthStore();


    const cart = productsStore.shoppingCart;
    const wishlist = productsStore.wishlist;

    let isMobileOpen = ref(false);
</script>