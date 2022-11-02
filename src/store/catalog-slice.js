import { createSlice } from '@reduxjs/toolkit';

import { catalog } from '../assets/data/test-catalog';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    products: catalog,
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
