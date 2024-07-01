// src/slices/restaurantSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRestaurants,RestaurantData } from '../Services/restaurantService';

interface RestaurantState {
  data: RestaurantData[];
  loading: boolean;
  error: string | null;
}

const initialState: RestaurantState = {
  data: [],
  loading: false,
  error: null,
};

export const loadRestaurants = createAsyncThunk(
  'restaurants/fetchRestaurants',
  async () => {
    const response = await fetchRestaurants();
    return response;
  }
);

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadRestaurants.fulfilled, (state, action: PayloadAction<RestaurantData[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loadRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch restaurants';
      });
  },
});

export default restaurantSlice.reducer;
