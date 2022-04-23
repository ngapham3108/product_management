import { configureStore } from "@reduxjs/toolkit";

import productPageReducer from "../Pages/ProductPage/ProductPageSlice";

const store = configureStore({
    reducer: {
        productPage: productPageReducer
    },
});

export default store;