import { createSlice } from '@reduxjs/toolkit';

import { catalog } from '../assets/data/test-catalog';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    products: catalog,
    changed: false,
  },
  reducers: {
    replaceCatalog(state, action) {
      state.products = action.payload.products;
    },
    addProduct(state, action) {
      const newItem = action.payload;
      console.log('addProduct: ', newItem);

      // if (true) {
      state.products.push({
        name: newItem.name.value,
        description: newItem.description.value,
        gtin: newItem.gtin.value,
        category: newItem.category.value,
        type: newItem.type.value,
        image: newItem.image.value,
        height: newItem.height.value,
        width: newItem.width.value,
        depth: newItem.depth.value,
        weight: newItem.weight.value,
        packagingType: newItem.packagingType.value,
        tempUnits: newItem.tempUnits.value,
        minTemp: newItem.minTemp.value,
        maxTemp: newItem.maxTemp.value,
        storageInstructions: newItem.storageInstructions.value,
        subscribers: [],
        dateAdded: new Date().toLocaleDateString(),
        datePublished: null,
        dateInactive: null,
      });
      // }
    },
    updateProduct(state, action) {
      // const newItem = action.payload;
    },
    removeProduct(state, action) {
      // const newItem = action.payload;
    },
    deleteProduct(state, action) {
      // const newItem = action.payload;
    },
  },
});

export const catalogActions = catalogSlice.actions;
export default catalogSlice;
