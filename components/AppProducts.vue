<template>
    <div>
        <ul>
            <li v-for="product in productsStore.gProductsList" :key="product.name" :product="product" >
                <NuxtLink :to="{ name: 'products-id', params: { id: product.id } }" @click="selectProduct(product)">{{
                    product.title }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { useProductsStore } from '~/store/productsApi';
    import { useRouter } from 'nuxt/app';

    const productsStore = useProductsStore();
    productsStore.aGetAllProducts();
</script>