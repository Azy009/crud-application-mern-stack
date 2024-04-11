import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { categoryApi } from './api/categoryapi'
import { userApi } from './api/userapi'
import { productApi } from './api/productapi'
import { bannerApi } from './api/bannerapi'
import { webinfoApi } from './api/webinfoapi'
import { cartApi } from './api/cartapi'
import { attributeApi } from './api/attributeapi'
import { variantApi } from './api/variantapi'
import { brandApi } from './api/brandapi'
import { orderApi } from './api/orderapi'

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [webinfoApi.reducerPath]: webinfoApi.reducer,
    [bannerApi.reducerPath]: bannerApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [attributeApi.reducerPath]: attributeApi.reducer,
    [variantApi.reducerPath]: variantApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware).concat(userApi.middleware).concat(productApi.middleware).concat(bannerApi.middleware).concat(webinfoApi.middleware).concat(cartApi.middleware).concat(attributeApi.middleware).concat(variantApi.middleware).concat(brandApi.middleware).concat(orderApi.middleware),
})

setupListeners(store.dispatch)