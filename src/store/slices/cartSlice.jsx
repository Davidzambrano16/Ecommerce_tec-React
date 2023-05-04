import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slices';
import axios from 'axios';
import getConfig from "../../utils/getConfig"

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCar: (state, action) => {
            return action.payload
        }
    }
})

export const { setCar } = cartSlice.actions;


export const getCarUserThunk = () => dispatch => {
    dispatch(setIsLoading(true))
    return axios.get('https://e-commerce-api.academlo.tech/api/v1/cart', getConfig())
        .then(res => dispatch(setCar(res.data.data.cart.products)))
        .finally(() => dispatch(setIsLoading(false)))
}

export const addProductCartThunk = (cart) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://e-commerce-api.academlo.tech/api/v1/cart', cart, getConfig())
        .then(() => dispatch(getCarUserThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export default cartSlice.reducer;
