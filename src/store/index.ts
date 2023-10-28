import {configureStore, combineReducers, AsyncThunkAction} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import categoriesSlice from "@/store/categories/categoriesSlice";

const rootReducer = combineReducers({
  categories: categoriesSlice,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch