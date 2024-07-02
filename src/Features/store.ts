// src/app/store.ts

import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer  from './Slices/restaurantSlice';
import  hotelReducer from './Slices/hotelSlice';
import  userReducer from './Slices/userSlice';


const store = configureStore({
  reducer: {
    restaurants: restaurantReducer ,
    hotels: hotelReducer,
    users: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
