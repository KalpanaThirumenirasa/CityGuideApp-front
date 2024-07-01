// src/app/store.ts

import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer  from './Slices/restaurantSlice'
import  hotelReducer from './Slices/hotelSlice'


const store = configureStore({
  reducer: {
    restaurants: restaurantReducer ,
    hotels: hotelReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
