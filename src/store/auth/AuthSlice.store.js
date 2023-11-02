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

export const {setCredentials} = authSlice.actions;

export default authSlice.reducer;
