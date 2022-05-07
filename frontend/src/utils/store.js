import userReducer from '../features/user';
import authReducer from '../features/auth';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
  }
})