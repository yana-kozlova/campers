import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from '././catalog/slice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
