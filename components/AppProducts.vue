<template>
    <div>
        <div class="flex w-11/12 mx-auto justify-between">
            <q-card
                class="my-card m-1 w-1/6 h-[500px] flex flex-col justify-between p-2 hover:shadow-blue-700 hover:shadow-md"
                v-for="product in productsStore.productsList" :key="product.name" :product="product">
                <figure class="h-[250px] w-fit self-center overflow-hidden">
                    <img class="w-full h-[250px]" :src="product.image"></img>
                </figure>

                <q-card-section class="q-pt-none q-pb-none">
                    <NuxtLink :to="{ name: 'products-id', params: { id: product.id } }">
                        <div class="text-lg font-bold">{{ product.title }}</div>
                    </NuxtLink>
                    <q-badge color="primary" text-color="white" icon="event">
                        {{ product.category }}
                    </q-badge>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    {{ product.price }}€
                </q-card-section>

                <q-card-section class="q-pt-none  q-gutter-md">
                    <q-btn color="primary" label="Add to cart" @click="addToCart(product)" />
                    <q-btn color="primary" label="<3" @click="addToWishlist(product)" />
                </q-card-section>
            </q-card>
        </div>
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
    .my-card:hover img {
        transform: scale(1.1);
        transition: transform 330ms ease-in-out;
    }
</style>