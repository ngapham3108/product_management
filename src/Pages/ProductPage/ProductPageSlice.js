import {createSlice} from "@reduxjs/toolkit";

const productPageSlice = createSlice({
    name: 'productPage',
    initialState: [],
    reducers: {
        overwriteProductList: (state, action) => {
            if (action.payload) {
                return action.payload;
            }
            return state;
        }
    }
});

export {productPageSlice};
export const {overwriteProductList} = productPageSlice.actions;
export default productPageSlice.reducer;