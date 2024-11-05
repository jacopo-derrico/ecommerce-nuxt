import { getAllProducts } from "./http/services/products.service";

const getProductRoutes = async () => {
  try {
    const data: string[] = [];
    const productsList = await getAllProducts();
    productsList.forEach((doc: any) => {
      data.push(doc.id);
    })
    return data.map((doc: string) => `/products/${doc}`);
  } catch (error: any) {
    console.error('Error:', error.message);
    return [];
  }
};

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    'nuxt-quasar-ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  hooks: {
    async 'nitro:config'(nitroConfig: any) {
      try {
        const slugs = await getProductRoutes()
        nitroConfig.prerender.routes.push(...slugs)
      } catch (error) {
        console.error('Unhandled promise rejection:', error)
      }
    },
  },
  site: { 
    url: 'https://e-commerce-ssr.netlify.app/', 
    name: 'e-commerce SSR' 
    }, 
})