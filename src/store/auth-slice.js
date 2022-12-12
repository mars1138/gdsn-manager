import { createSlice } from '@reduxjs/toolkit';

const initialAuth = {
  isAuthenticated: true,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuth,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
