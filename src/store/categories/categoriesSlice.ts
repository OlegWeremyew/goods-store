import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from 'axios'
import {instance} from "@/api";

type ListItem = {
  "id": number,
  "name": string,
  "image": string,
  "creationAt": string,
  "updatedAt": string
}

type DefaultStateType = {
  isLoading: boolean
  list: ListItem[]
}

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const res = await instance('/categories');
      return res.data;
    } catch (err: AxiosError) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const defaultState: DefaultStateType = {
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
