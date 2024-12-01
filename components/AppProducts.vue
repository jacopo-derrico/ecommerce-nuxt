<template>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-20">
            <NuxtLink
                class="my-card rounded-lg shadow-md flex flex-col justify-between border-2 border-white hover:border-blue-700 hover:border-2"
                v-for="product in productsStore.productsList" :key="product.name" :product="product"
                :to="{ name: 'products-id', params: { id: product.id } }">
                
                <figure class="aspect-square flex items-center justify-center overflow-hidden p-4">
                    <img class="h-full rounded-s-lg rounded-e-lg" :src="product.image"></img>
                </figure>

                <div class="">
                    <NuxtLink :to="{ name: 'products-id', params: { id: product.id } }">
                        <div class="text-lg font-bold">{{ product.title }}</div>
                    </NuxtLink>
                    <span >
                        {{ product.category }}
                    </span>
                </div>

                <div class="mt-2">
                    {{ product.price }}€
                </div>

                <div class="md-2 flex justify-center items-center">
                    <button class="w-full text-center" @click="addToCart(product)">Add to cart</button>
                    <button class="w-full text-center" @click="addToWishlist(product)">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>
                </div>
            </NuxtLink>
        </div>
</template>

<script setup>
    import { useProductsStore } from '~/store/productsApi';
    import { useRouter } from 'nuxt/app';

    const productsStore = useProductsStore();
    productsStore.aGetAllProducts();

    let addToCart = (product) => {
        let result = productsStore.aAddToShoppingCart(product);
        // if (result.code === 200) {
        //     this.baseStore.aSetNotification({
        //         type: 'success',
        //         msg: 'Product was added to Cart!'
        //     })
        // } else if (result.code === 400) {
        //     this.baseStore.aSetNotification({
        //         type: 'warning',
        //         msg: result.msg
        //     })
        // }
    }
    let addToWishlist = (product) => {
        let result = productsStore.aAddToWishlist(product);
        // if (result.code === 200) {
        //     this.baseStore.aSetNotification({
        //         type: 'success',
        //         msg: 'Product was added to Cart!'
        //     })
        // } else if (result.code === 400) {
        //     this.baseStore.aSetNotification({
        //         type: 'warning',
        //         msg: result.msg
        //     })
        // }
    }
</script>

<style scoped>
    /* .my-card:hover img {
        transform: scale(1.1);
        transition: transform 330ms ease-in-out;
    } */
</style>