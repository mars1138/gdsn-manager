import { createSlice } from '@reduxjs/toolkit';

import { customers as customerList } from '../assets/data/test-customers';

const customersSlice = createSlice({
  name: 'customers',
  initialState: {
    customerList: customerList,
  },
  reducers: {
    getCustomers(state) {
      //
    },
  },
});

export const customerActions = customersSlice.actions;
export default customersSlice;
