<template>
    <div class="flex justify-between w-5/6 mx-auto mt-5">
        <div>
            Logo
        </div>
        <div>
            <a @click.prevent="$router.push('/')" class="cursor-pointer text-bold hover:text-blue-700">Home</a>
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
  const productsStore = useProductsStore();

  const cart = productsStore.shoppingCart;
  const wishlist = productsStore.wishlist;
</script>