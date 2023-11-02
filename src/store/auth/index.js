import {combineReducers} from 'redux';
import AuthReducer from './AuthSlice.store';

const authRootReducers = combineReducers({
  auth: AuthReducer,
});

export default authRootReducers;
