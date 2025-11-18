// src/store/store.js (or index.js)

import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categorySlice"; // .js extension not needed in modern setups

const store = configureStore({
  reducer: {
    categories: categoriesReducer, // renamed for clarity
  },
  // devTools is true by default in development, so you can omit it
  // But if you want to be explicit or disable in production:
  devTools: true,
});

export default store;