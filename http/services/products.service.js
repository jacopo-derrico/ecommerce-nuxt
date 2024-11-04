import { HTTP } from '../http-client';

export const getAllProducts = () => 
    HTTP.get('/products').then(({data}) => data )

export const getProductById = (id) => 
    HTTP.get(`/products/${id}`).then(({data}) => data )