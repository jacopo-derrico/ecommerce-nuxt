<template>
    <div>
        <div>
            <h1>{{ product?.title }}</h1>
            <p>{{ product?.price }}</p>
        </div>
    </div>
</template>

<script setup>
    import { useRoute } from 'nuxt/app';
    import { useProductsStore } from '~/store/productsApi';
    import { ref } from 'vue';

    const route = useRoute();
    const product = ref(null);

    onMounted(async () => {
        const productsStore = useProductsStore();
        const productId = route.params.id;
        productsStore.aGetProductById(productId);
        // console.log(productsStore.gProduct)

        watch(() => productsStore.gProduct, (newValue) => {
            product.value = newValue;
        }, { immediate: true });
    })


</script>