import { configureStore } from '@reduxjs/toolkit';

import catalogSlice from './catalog-slice';
import customersSlice from './customers-slice';
import authSlice from './auth-slice';

const store = configureStore({
  reducer: { catalog: catalogSlice.reducer, customers:customersSlice.reducer, auth: authSlice.reducer, },
});

export default store;
