import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import IProducts from '../types/product'
import { type } from 'os'

export interface ProductState {
  productList: IProducts[]
}

const initialState: ProductState = {
  productList: [],
}

export const productListSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
    addProducts: (state, action: PayloadAction<IProducts[]>) => {
      state.productList = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  addProducts } = productListSlice.actions

export default productListSlice.reducer