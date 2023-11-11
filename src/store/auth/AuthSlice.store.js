import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {authService} from '../services/AuthService';

const authSlice = createSlice({
  name: 'auth',
  initialState: {user: {}, token: null},
  reducers: {
    setCredentials: (state, {payload: {user, token}}: PayloadAction) => {
      state.user = user;
      state.token = token;
    },
    clearStoreToken: state => {
      state.user = {};
      state.token = null;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authService.endpoints.login.matchFulfilled,
      (state, {payload}) => {
        state.token = payload.token;
        state.user = payload.user;
      },
    );
  },
});

export const {setCredentials, clearStoreToken} = authSlice.actions;

export const logout = (callbackFunc?: Function) => async (dispatch: any) => {
  dispatch(clearStoreToken());
};

export default authSlice.reducer;
