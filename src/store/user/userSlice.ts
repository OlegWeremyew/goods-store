import {createSlice} from "@reduxjs/toolkit";

type DefaultUserStateType = {

}


const defaultState: DefaultUserStateType = {

}

const productsSlice = createSlice({
  name: 'user',
  initialState: defaultState,
  reducers: {},
})

export const {} = productsSlice.actions

export default productsSlice.reducer;
