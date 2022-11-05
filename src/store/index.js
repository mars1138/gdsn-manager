import { configureStore } from '@reduxjs/toolkit';

import catalogSlice from './catalog-slice';
import customersSlice from './customers-slice';

const store = configureStore({
  reducer: { catalog: catalogSlice.reducer, customers:customersSlice.reducer },
});

export default store;
