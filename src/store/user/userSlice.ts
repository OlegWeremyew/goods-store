import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {instance} from "@/api";
import {AxiosError} from "axios";
import {getCategories} from "@/store/categories/categoriesSlice";

export const createUser = createAsyncThunk(
  "users/createUser",
  async (payload, thunkAPI) => {
    try {
      const {data} = await instance.post('/users', payload);
      return data;
    } catch (err: AxiosError) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

type DefaultUserStateType = {
  currentUser: {},
  cart: any[],
  isLoading: boolean
}

const defaultState: DefaultUserStateType = {
  currentUser: {},
  cart: [],
  isLoading: false
}

const productsSlice = createSlice({
  name: 'user',
  initialState: defaultState,
  reducers: {
    addItemToCard: (state: DefaultUserStateType, {payload}) => {
      let newCart = [...state.cart]
      const found = state.cart.find(({id}) => id === payload.id)

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id ? {...item, quantity: payload.quantity || item.quantity + 1} : item
        })

        return
      }

      newCart.push({...payload, quantity: 1})

      state.cart = newCart
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
    });
  },
})

export const {addItemToCard} = productsSlice.actions

export default productsSlice.reducer;
