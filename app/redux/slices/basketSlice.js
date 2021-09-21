import { createSlice } from "@reduxjs/toolkit"
import { getAllCartFoods, getTotalCartItemPrice } from "../../utils/helpers"

const initialState = {
  items: [],
}

const authSlice = createSlice({
  name: "busket",
  initialState,
  reducers: {
    updateBusket: (state, action) => {
      state.items = action.payload
    }
  }
})

export const { updateBusket } = authSlice.actions

export const selectCartItems = state => state.busket.items
export const selectTotalPrice = (state) => getTotalCartItemPrice(state.busket.items)
export const selectTotalItems = (state) => getAllCartFoods(state.busket.items)


export default authSlice.reducer