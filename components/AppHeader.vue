<template>
    <div class="flex justify-between w-5/6 mx-auto mt-5">
        <div>
            Logo
        </div>
        <div class="flex gap-3">
            <NuxtLink to="/" class="cursor-pointer text-bold hover:text-blue-700">Home page</NuxtLink>
            <NuxtLink v-if="!authStore.authenticated" to="/login" class="cursor-pointer text-bold hover:text-blue-700">Login</NuxtLink>
            <NuxtLink v-else to="/my-account" class="cursor-pointer text-bold hover:text-blue-700">My account</NuxtLink>
        </div>
        <div>
            <div>
                Wishlist: {{ wishlist.length }}
            </div>
            <div>
                Cart: {{ cart.length }}
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
</script>