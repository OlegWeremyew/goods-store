import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from 'axios'
import {instance} from "@/api";
import type {CategoryItem} from "@/types";

type DefaultCategoriesStateType = {
  isLoading: boolean
  list: CategoryItem[]
}

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const {data} = await instance('/categories');
      return data;
    } catch (err: AxiosError) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const defaultState: DefaultCategoriesStateType = {
  isLoading: false,
  list: [],
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: defaultState,
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.isLoading = false;
    });
  },
})

export default categoriesSlice.reducer;
