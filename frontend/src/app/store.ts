import {configureStore} from "@reduxjs/toolkit";
import {ChatReducer} from "../containers/Slice/FetchSlice.ts";

export const store = configureStore({
    reducer:{
        chat: ChatReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;