import { createSlice } from '@reduxjs/toolkit';



const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    products: [],
    changed: false,
  },
  reducers: {
    replaceCatalog(state, action) {},
    addProduct(state, action) {},
    removeProduct(state, action) {},
    deleteProduct(state, action) {},
  },
});

export const catalogActions = catalogSlice.actions;
export default catalogSlice;
