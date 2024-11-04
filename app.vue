<template>
  <div>
    <NuxtRouteAnnouncer />

    <NuxtPage/>
    <div>
      Wishlist: {{ wishlist.length }}
    </div>
    <div>
      Cart: {{ cart.length }}
    </div>
  </div>
</template>

<script setup>
  import { useProductsStore } from '~/store/productsApi';
  const productsStore = useProductsStore();

  const cart = productsStore.shoppingCart;
  const wishlist = productsStore.wishlist;
</script>