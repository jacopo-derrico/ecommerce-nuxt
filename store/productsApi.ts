import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useProductsStore = defineStore('allProductsStore', () => {
    let allProducts = ref([]);
    let singleproduct = ref([]);
    
    return {allProducts, singleproduct}
})