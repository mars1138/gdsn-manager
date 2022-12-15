import { createSlice } from '@reduxjs/toolkit';

const initialAuth = {
  isAuthenticated: false,
  userId: null,
  token: null,
  expireDate: null,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuth,
  reducers: {
    login(state, action) {
      console.log('action.payload: ', action.payload);
      const { user, usrToken, expireDate } = action.payload;
      const tokenExpire =
        expireDate || new Date(new Date().getTime() + 1000 * 60 * 60); // 1hr in future

      state.isAuthenticated = true;
      state.userId = user;
      state.token = usrToken;
      state.expireDate = tokenExpire;

      localStorage.setItem(
        'userData',
        JSON.stringify({
          userId: user,
          token: usrToken,
          expireDate: tokenExpire,
        }),
      );
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userId = null;
      state.token = null;
      state.expireDate = null;
      localStorage.removeItem('userData');
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
