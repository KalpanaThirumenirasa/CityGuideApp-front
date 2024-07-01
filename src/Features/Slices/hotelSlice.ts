// src/slices/restaurantSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchHotels, HotelData } from '../Services/hotelService';


interface HotelState {
  data: HotelData[];
  loading: boolean;
  error: string | null;
}

const initialState: HotelState = {
  data: [],
  loading: false,
  error: null,
};

export const loadHotels = createAsyncThunk(
  'restaurants/fetchHotels',
  async () => {
    const response = await fetchHotels();
    return response;
  }
);

const restaurantSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadHotels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadHotels.fulfilled, (state, action: PayloadAction<HotelData[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loadHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch Hotels';
      });
  },
});

export default restaurantSlice.reducer;
