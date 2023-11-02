import {combineReducers} from 'redux';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {authService} from './services/AuthService';
import AuthRootReducer from './auth';
import {createMigrate, persistReducer, persistStore} from 'redux-persist';
import {AnyAction} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistConfig} from 'redux-persist/es/types';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const middlewares = getDefaultMiddleware(
  {
    immutableCheck: false,
    serializableCheck: false,
  },
  // @ts-expect-error TS(2554): Expected 0-1 arguments, but got 2.
  ['redux-immutable-state-invariant'],
);

const appReducer = combineReducers({
  auth: AuthRootReducer,
  [authService.reducerPath]: authService.reducer,
});

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === 'auth/logoutCompleted') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const migrations = {
  1: (state: any) => {
    return {
      ...state,
    };
  },
};

type ReducerType = ReturnType<typeof rootReducer>;
const persistConfig: PersistConfig<ReducerType> = {
  key: 'root',
  storage: AsyncStorage,
  version: 2,
  migrate: createMigrate(migrations, {debug: true}),
  // blacklist: ['merchant', 'auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares.concat(authService.middleware),
  preloadedState: undefined,
  devTools: true,
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types

export {store, persistor};
