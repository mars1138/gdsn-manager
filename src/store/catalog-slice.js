import { createSlice } from '@reduxjs/toolkit';

// import { catalog } from '../assets/data/test-catalog';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    products: [],
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
        console.log('catalog retrieved from localStorage');
      }
    },
    getProduct(state, action) {
      const itemGtin = action.payload.gtin;

      const existingItem = state.products.find(
        (item) => item.gtin === itemGtin
      );
      console.log('existinItem: ', existingItem);
      return existingItem.subscribers;
    },
    addProduct(state, action) {
      const newItem = action.payload;
      console.log('addProduct: ', newItem);

      // if (true) {
      state.products.push({
        name: newItem.name.value,
        description: newItem.description.value,
        gtin: +newItem.gtin.value,
        category: +newItem.category.value,
        type: +newItem.type.value,
        image: '',
        height: newItem.height.value,
        width: newItem.width.value,
        depth: newItem.depth.value,
        weight: newItem.weight.value,
        packagingType: +newItem.packagingType.value,
        tempUnits: +newItem.tempUnits.value,
        minTemp: newItem.minTemp.value,
        maxTemp: newItem.maxTemp.value,
        storageInstructions: newItem.storageInstructions.value,
        subscribers: [],
        dateAdded: new Date().getTime(),
        datePublished: null,
        dateInactive: null,
        dateModified: null,
      });
      // }
    },
    updateExistingProduct(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find(
        (item) => item.gtin === newItem.gtin
      );

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
      existingItem.dateModified = new Date().getTime();
    },
    toggleProductActive(state, action) {
      const gtin = action.payload.gtin;
      const existingItem = state.products.find((item) => item.gtin === gtin);

      const deactivate = () => {
        existingItem.dateInactive = new Date().getTime();
      };
      const reactivate = () => {
        existingItem.dateInactive = null;
        existingItem.dateModified = new Date().getTime();
      };

      if (existingItem) {
        action.payload.status === 'deactivate' ? deactivate() : reactivate();
      }
    },
    deleteProduct(state, action) {
      const gtin = action.payload;
      state.products = state.products.filter((item) => item.gtin !== gtin);
    },
    addSubscriber(state, action) {
      const custId = +action.payload.custId;
      const prod = action.payload.gtin;

      const existingProduct = state.products.find((item) => item.gtin === prod);

      if (existingProduct) {
        const existingSub = existingProduct.subscribers.includes(custId);
        if (existingSub) {
          console.log('customer already subscribed');
          return;
        }

        const newSubs = [...existingProduct.subscribers, custId];
        existingProduct.subscribers = newSubs;
        existingProduct.datePublished = new Date().getTime();
      }
    },
    removeSubscriber(state, action) {
      const custId = action.payload.custId;
      const prod = action.payload.productNum;

      const existingProduct = state.products.find((item) => item.gtin === prod);
      const newSubs = existingProduct.subscribers.filter(
        (cust) => cust !== custId
      );

      if (existingProduct) {
        existingProduct.subscribers = newSubs;
      }
    },
  },
});

export const catalogActions = catalogSlice.actions;
export default catalogSlice;
