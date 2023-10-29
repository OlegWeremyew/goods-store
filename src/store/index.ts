import {configureStore, combineReducers, ThunkDispatch, Store, AnyAction} from "@reduxjs/toolkit";
import categoriesSlice from "@/store/categories/categoriesSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import logger from "redux-logger"
import productsSlice from "@/store/products/productsSlice";
import {apiSlice} from "@/store/api/apiSlice";
import userSlice from "@/store/user/userSlice";

const rootReducer = combineReducers({
  categories: categoriesSlice,
  products: productsSlice,
  user: userSlice,
  // dynamic analogue
  [apiSlice.reducerPath]: apiSlice.reducer,
})

export const store: AppStore = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger),
      getDefaultMiddleware().concat(apiSlice.middleware)
  }
});

export type RootState = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>
export type AppStore = Omit<Store<RootState, AnyAction>, "dispatch"> & {
  dispatch: AppThunkDispatch;
}

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
