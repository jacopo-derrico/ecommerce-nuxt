<template>
    <div>
        <ul>
            <li v-for="product in allProducts" :key="product.id">
                <NuxtLink :to="{ name: 'products-id', params: { id: product.id } }" @click="selectProduct(product)">{{
                    product.title }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { useProductsStore } from '~/store/productsApi';
    import { useRouter } from 'nuxt/app';

    const router = useRouter();
    const allProductsStore = useProductsStore();
    const allProducts = computed(() => allProductsStore.allProducts);

    const selectProduct = (product) => {
        let fetchId = allProducts.find((prod) => prod.id === product.id);

        allProductsStore.singleProduct.push(fetchId);
        router.push(`/products/${product.id}`);
    };
</script>