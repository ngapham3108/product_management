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
        },
        deleteProduct: (state, action) => {
            let index = state.findIndex(item => {
                return action.payload === item.id;
            });

            if (index !== -1) {
                state.splice(index,1);
            }

            return state;
        }
    }
});

export {productPageSlice};
export const {overwriteProductList, deleteProduct} = productPageSlice.actions;
export default productPageSlice.reducer;