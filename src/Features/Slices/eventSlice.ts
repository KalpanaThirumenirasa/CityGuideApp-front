// src/slices/restaurantSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchEvents, EventData } from '../Services/eventService';


interface EventState {
  data: EventData[];
  loading: boolean;
  error: string | null;
}

const initialState: EventState = {
  data: [],
  loading: false,
  error: null,
};

export const loadEvents = createAsyncThunk(
  'events/fetchEvents',
  async () => {
    const response = await fetchEvents();
    return response;
  }
);

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadEvents.fulfilled, (state, action: PayloadAction<EventData[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loadEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch Events';
      });
  },
});

export default eventSlice.reducer;
