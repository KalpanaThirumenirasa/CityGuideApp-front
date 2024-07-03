import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer  from './Slices/restaurantSlice';
import  hotelReducer from './Slices/hotelSlice';
import  userReducer from './Slices/userSlice';
import  authReducer from './Slices/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurants: restaurantReducer ,
    hotels: hotelReducer,
    users: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
