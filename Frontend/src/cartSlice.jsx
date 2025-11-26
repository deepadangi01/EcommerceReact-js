import { createSlice } from "@reduxjs/toolkit";
import { message } from 'antd';

const cartSlice = createSlice({
  name: "mycart",
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      const exists = state.cart.some(item => item.id === action.payload.id);
      if (exists) {
        message.error("This product is already added!");
      } else {
        state.cart.push(action.payload);
        message.success("Product added!");
      }
    },

    qntyInc: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
        item.qnty++;
      }
    },

    qntyDec: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
        if (item.qnty > 1) {
          item.qnty--;
        } else {
          message.error("Quantity can't be less than 1");
        }
      }
    },

    itemRemove: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    }
  }
});

export const { addToCart, qntyInc, qntyDec, itemRemove } = cartSlice.actions;
export default cartSlice.reducer;

