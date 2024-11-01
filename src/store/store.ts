import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './moviesSlice';

export const makeStore = (initialState?:object) => {
  return configureStore({
    reducer: {
      movies: moviesSlice,
    },
    ...(initialState ? {preloadedState: initialState} : undefined )
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];