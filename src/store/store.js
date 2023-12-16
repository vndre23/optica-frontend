import { configureStore } from '@reduxjs/toolkit'

import { loginRTK } from '../LandingPage/Infraestructure/RepositoryImplMain';
import { authSlice } from './slices/auth/authSlice';
import { loadingSlice } from './slices/loading';
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    loading: loadingSlice.reducer,
    [loginRTK.reducerPath]: loginRTK.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loginRTK.middleware)
})