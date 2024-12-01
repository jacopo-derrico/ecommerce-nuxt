<template>
    <div class="flex flex-col md:flex-row w-5/6 mx-auto my-20">
        <div class="md:w-1/2 mb-10 md:me-16">
            <img :src="product?.image" alt="">
        </div>
        <div class="md:w-1/2 ">
            <h1 class="text-2xl font-bold">{{ product?.title }}</h1>
            <h5 class="my-5 font-bold text-blue-600">{{ product?.price }}€</h5>
            <p>{{ product?.description }}</p>
            <div class="flex gap-10 mt-10">
                <q-btn color="primary" label="Add to cart" @click="addToCart(product)" />
                <q-btn color="primary" label="<3" @click="addToWishlist(product)" />
            </div>
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

        watch(() => productsStore.product, (newValue) => {
            product.value = newValue;
        }, { immediate: true });

        let addToCart = (product) => {
            let result = productsStore.aAddToShoppingCart(product);
        }
        let addToWishlist = (product) => {
            let result = productsStore.aAddToWishlist(product);
        }
    })

    useSeoMeta({
        title: product?.title,
        ogTitle: product?.title,
        description: product?.description,
        ogDescription: product?.description,
        ogImage: product?.image,
    })

</script>