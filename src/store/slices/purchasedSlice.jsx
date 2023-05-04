import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slices';
import getConfig from '../../utils/getConfig';
import axios from 'axios';
import { setCar } from './cartSlice';

export const purchasedSlice = createSlice({
    name: 'purchased',
    initialState: [],
    reducers: {
        setPurchased: (state, action) => {
             return action.payload;
        }
    }
})

export const { setPurchased } = purchasedSlice.actions;

export const purchasedThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api.academlo.tech/api/v1/purchases', getConfig())
        .then((res) => dispatch(setPurchased(res.data.data.purchases)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addPurchasedThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://e-commerce-api.academlo.tech/api/v1/purchases', {}, getConfig())
        .then(() => dispatch(setCar([])))
        .finally(() => dispatch(setIsLoading(false)));
}

export default purchasedSlice.reducer;
