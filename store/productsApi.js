import { defineStore } from 'pinia'
import { getAllProducts, getProductById } from '../http/services/products.service';

// import { ref } from 'vue';

export const useProductsStore = defineStore({
    // let allProducts = ref([]);
    // let singleproduct = ref([]);
    
    // return {allProducts, singleproduct}

    id: 'products',
    state: () => ({
        productsList: [],
        product: null
    }),
    actions: {
        async aGetAllProducts() {
            await getAllProducts()
            .then((data) => {
                this.productsList = data;
                // console.log(this.productsList)
            })
            .catch((error) => {
                console.log(error);
            })
        },
        async aGetProductById(id) {
            await getProductById(id)
            .then((data) => {
                this.product = data;
                // console.log(this.product)
            })
            .catch((error) => {
                console.log(error);
            })
        }
    },
    getters: {
        gProductsList: (state) => state.productsList,
        gProduct: (state) => state.product
    }
})