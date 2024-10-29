<template>
    <div>
        <div v-if="singleProduct">
            <h1>{{ singleProduct.title }}</h1>
            <p>{{ singleProduct.price }}</p>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>

<script setup>
    import { useRoute } from 'nuxt/app';
    import { useProductsStore } from '~/store/productsApi';
    import { ref } from 'vue';

    const route = useRoute();
    const productId = await ref(route.params.id);
    const allProductsStore = useProductsStore();

    const singleProduct = computed(() => {
        return allProductsStore.singleProduct;
    });
</script>