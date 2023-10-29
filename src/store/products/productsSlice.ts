import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from 'axios'
import {instance} from "@/api";
import {ProductType} from "@/types";

type DefaultProductsStateType = {
  list: ProductType[],
  filtered: ProductType[],
  related: any[],
  isLoading: boolean
}

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const {data} = await instance('/products');
      return data;
    } catch (err: AxiosError) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const defaultState: DefaultProductsStateType = {
  list: [] as ProductType[],
  filtered: [] as ProductType[],
  related: [],
  isLoading: false
}

const productsSlice = createSlice({
  name: 'products',
  initialState: defaultState,
  reducers: {
    filterByPrice(state, action: PayloadAction<number>) {
      state.filtered = state.list.filter(({price}) => price < action.payload)
    },

  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state: DefaultProductsStateType) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state: DefaultProductsStateType, {payload}) => {
      state.list = payload as ProductType[];
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state: DefaultProductsStateType) => {
      state.isLoading = false;
    });
  },
})

export const {
  filterByPrice,
} = productsSlice.actions

export default productsSlice.reducer;
