import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlices from './slices/isLoading.slices'
import productsSlice from './slices/productsSlice'
import filterSlice from './slices/filterSlice'
import purchasedSlice from './slices/purchasedSlice'
import cartSlice from './slices/cartSlice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlices,
        products: productsSlice,
        filterProducts: filterSlice,
        purchased: purchasedSlice,
        cart: cartSlice,
    }
})
