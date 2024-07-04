import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer  from './Slices/restaurantSlice';
import  hotelReducer from './Slices/hotelSlice';
import  userReducer from './Slices/userSlice';
import  authReducer from './Slices/authSlice';
import  eventReducer from './Slices/eventSlice';
import touristPlaceReducer from './Slices/touristplaceSlice';
import chatReducer from './Slices/chatSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurants: restaurantReducer ,
    hotels: hotelReducer,
    users: userReducer,
    events: eventReducer,
    touristPlaces: touristPlaceReducer,
    chat:chatReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
