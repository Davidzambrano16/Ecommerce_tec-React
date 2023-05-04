import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filterProducts',
    initialState: [],
    reducers: {
        setFilterProducts(state, action){
            return action.payload;
        }
    }
})

export const { setFilterProducts } = filterSlice.actions;

export default filterSlice.reducer;
