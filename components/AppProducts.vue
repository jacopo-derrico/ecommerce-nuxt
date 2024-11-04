<template>
    <div>
        <ul>
            <li v-for="product in productsStore.gProductsList" :key="product.name" :product="product">
                <NuxtLink :to="{ name: 'products-id', params: { id: product.id } }">{{
                    product.title }}</NuxtLink>
                <button @click="addToWishlist(product)">
                    add wishlist
                </button>
                <button @click="addToCart(product)">
                    Add to cart
                </button>
            </li>
        </ul>
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