<template>
  <div>
    <NuxtRouteAnnouncer />

    <NuxtPage/>
  </div>
</template>

<script setup>
  import { useProductsStore } from '~/store/productsApi';

  const allProductsStore = useProductsStore();
  const allProducts = computed(() => allProductsStore.allProducts);

  const fetchProducts = async () => {
      try {
          const response = await fetch('https://fakestoreapi.com/products')
          const data = await response.json()
          allProducts.value.push(...data)
          // console.log(allProducts)
      } catch (error) {
          console.error('Error fetching products:', error)
      }
  }

  fetchProducts()

</script>