import { configureStore } from "@reduxjs/toolkit";
import { reducerTest } from "./Redux";

export const store = configureStore({
    reducer: {
        counterReucer: reducerTest,
    }
  })

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;