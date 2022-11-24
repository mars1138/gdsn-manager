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
      console.log('catalog saved in localStorage');
    },
    getCatalogStorage(state) {
      const local = JSON.parse(localStorage.getItem('catalog'));

      // MODIFY FOR PRODUCTION:
      if (local && local.length > 0) {
        state.products = local;
      } else {
        state.products = catalog;
      }
      console.log('catalog retrieved from localStorage');
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
        dateModified: new Date().toLocaleDateString(),
      });
      // }
    },
    updateExistingProduct(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find(
        item => item.gtin === newItem.gtin,
      );

      // newItem.dateAdded = existingItem.dateAdded;
      // newItem.datePublished = existingItem.datePublished;
      // newItem.dateInactive = existingItem.dateInactive;

      console.log('newItem: ', newItem);

      // existingItem = { ...newItem };

      existingItem.name = newItem.name;
      existingItem.description = newItem.description;
      existingItem.gtin = newItem.gtin;
      existingItem.category = newItem.category;
      existingItem.type = newItem.type;
      existingItem.image = newItem.image;
      existingItem.height = newItem.height;
      existingItem.width = newItem.width;
      existingItem.depth = newItem.depth;
      existingItem.weight = newItem.weight;
      existingItem.packagingType = newItem.packagingType;
      existingItem.tempUnits = newItem.tempUnits;
      existingItem.minTemp = newItem.minTemp;
      existingItem.maxTemp = newItem.maxTemp;
      existingItem.storageInstructions = newItem.storageInstructions;
      existingItem.subscribers = [...newItem.subscribers];
      existingItem.dateModified = new Date().toLocaleDateString();
    },
    // deactivateProduct(state, action) {
    //   const gtin = action.payload;
    //   const existingItem = state.products.find(item => item.gtin === gtin);

    //   if (existingItem) {
    //     existingItem.dateInactive = new Date().toLocaleDateString();
    //   }
    // },
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
    addSubscriber(state, action) {
      const custId = action.payload.custId;
      const prod = action.payload.gtin;

      const existingProduct = state.products.find(item => item.gtin === prod);
      
      if (existingProduct) {
        const newSubs = [...existingProduct.subscribers, custId];
        existingProduct.subscribers = newSubs;
      }
    },
    removeSubscriber(state, action) {
      const custId = action.payload.custId;
      const prod = action.payload.productNum;
      // console.log('custId: ', custId);
      // console.log('prod: ', prod);

      const existingProduct = state.products.find(item => item.gtin === prod);
      // console.log('existingProd: ', existingProduct);
      const newSubs = existingProduct.subscribers.filter(
        cust => cust !== custId,
      );
      // console.log('newsubs: ', newSubs);

      if (existingProduct) {
        existingProduct.subscribers = newSubs;
      }
    },
  },
});

export const catalogActions = catalogSlice.actions;
export default catalogSlice;
