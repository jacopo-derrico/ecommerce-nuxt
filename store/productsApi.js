import { defineStore } from 'pinia'
import { getAllProducts, getProductById } from '../http/services/products.service';

import { ref } from 'vue';

export const useProductsStore = defineStore('productsStore', () => {

    // state
    const productsList = ref([]);
    const product = ref(null);
    const shoppingCart = ref([]);
    const wishlist = ref([]);

    // actions
    async function aGetAllProducts() {
        await getAllProducts()
            .then((data) => {
                this.productsList = data;
                // console.log(this.productsList)
            })
            .catch((error) => {
                console.log(error);
            })
    };
    async function aGetProductById(id) {
        await getProductById(id)
            .then((data) => {
                this.product = data;
                // console.log(this.product)
            })
            .catch((error) => {
                console.log(error);
            })
    };
    function aAddToShoppingCart(product) {
        let shoppingCart = localStorage.getItem('shopping-cart');
        if (shoppingCart) {
            shoppingCart = JSON.parse(shoppingCart);
        } else {
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
        const productExist = shoppingCart.find(el => el === product.id);
        if (productExist !== -1) {
            return { code: 400, msg: 'Product already in cart' };
        }
        shoppingCart.push(product.id);
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        return { code: 200, msg: 'Product added to cart' };
    };
    function aAddToWishlist(product) {
        let wishlist = localStorage.getItem('wishlist');
        if (wishlist) {
            wishlist = JSON.parse(wishlist);
        } else {
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
        const productExist = wishlist.find(el => el === product.id);
        if (productExist) {
            return { code: 400, msg: 'Product already in wishlist' };
        }
        wishlist.push(product.id);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        return { code: 200, msg: 'Product added to wishlist' };
    }


    return {
        //state
        productsList,
        product,
        shoppingCart,
        wishlist,
        //actions
        aGetAllProducts,
        aGetProductById,
        aAddToShoppingCart,
        aAddToWishlist
    }
})