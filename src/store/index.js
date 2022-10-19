import { configureStore } from '@reduxjs/toolkit';

import catalogSlice from './catalog-slice';

const store = configureStore({
  reducer: { catalog: catalogSlice.reducer },
});

export default store;
