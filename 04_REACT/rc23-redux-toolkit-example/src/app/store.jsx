import haberSlice from "../features/haberSlice";
import yetkiSlice from "../features/yetkiSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer : {
        yetkiSlice:yetkiSlice,
        haberSlice:haberSlice
    }

})
