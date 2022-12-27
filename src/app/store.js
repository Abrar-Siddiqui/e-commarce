import { configureStore } from "@reduxjs/toolkit";
import  addRemoveCartReducer  from '../services/addRemoveSlice'
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { myData } from "../services/fetchDataFromApi";

export const store = configureStore({
    reducer:{
        [myData.reducerPath]:myData.reducer,
        counter : addRemoveCartReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myData.middleware),
})
setupListeners(store.dispatch)