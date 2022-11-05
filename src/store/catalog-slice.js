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
    setCatalogStorage(state) {
      localStorage.setItem('catalog', JSON.stringify(state.products));
      console.log('catalog saved in localStorage')
    },
    getCatalogStorage(state) {
      const local = JSON.parse(localStorage.getItem('catalog'));

      // MODIFY FOR PRODUCTION:
      if (local && local.length > 0) 
      {state.products = local;
      } else {
        state.products = catalog
      }
      console.log('catalog retrieved from localStorage')
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
        image: '',
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
    deactivateProduct(state, action) {
      const gtin = action.payload;
      const existingItem = state.products.find(item => item.gtin === gtin);

      if (existingItem) {
        existingItem.dateInactive = new Date().toLocaleDateString();
      }
    },
    toggleProductActive(state, action) {
      const gtin = action.payload.gtin;
      const existingItem = state.products.find(item => item.gtin === gtin);

      const deactivate = () => {
        existingItem.dateInactive = new Date().toLocaleDateString();
      };
      const reactivate = () => {
        existingItem.dateInactive = null;
      };

      if (existingItem) {
        action.payload.status === 'deactivate' ? deactivate() : reactivate();
      }
    },
    deleteProduct(state, action) {
      const gtin = action.payload;
      state.products = state.products.filter(item => item.gtin !== gtin);
    },
  },
});

export const catalogActions = catalogSlice.actions;
export default catalogSlice;
