import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slices';
import axios from "axios"

export const productsSlice = createSlice({
    name: 'productSlice',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            const newProducts = action.payload;
            return newProducts
        }
    }
})

export const getProductsThunk = () => dispatch => {
    dispatch(setIsLoading(true))
    axios.get("https://e-commerce-api.academlo.tech/api/v1/products")
    .then(res => dispatch(setProducts(res.data.data.products)))
    .finally( () => dispatch(setIsLoading(false)))
}

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
