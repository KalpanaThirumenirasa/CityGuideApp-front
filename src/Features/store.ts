// src/app/store.ts

import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer  from './Slices/restaurantSlice';
import  hotelReducer from './Slices/hotelSlice';
import  userReducer from './Slices/userSlice';
import  eventReducer from './Slices/eventSlice';
import touristPlaceReducer from './Slices/touristplaceSlice';


const store = configureStore({
  reducer: {
    restaurants: restaurantReducer ,
    hotels: hotelReducer,
    users: userReducer,
    events: eventReducer,
    touristPlaces: touristPlaceReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
