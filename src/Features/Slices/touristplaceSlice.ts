import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTouristPlaces, fetchTouristPlaceById, addTouristPlace, updateTouristPlace } from "../Services/touristplaceService";
import { TouristPlaceData, AddTouristPlaceData } from "../Services/touristplaceService";

interface TouristPlaceState {
  data: TouristPlaceData[];
  loading: boolean;
  error: string | null;
}

const initialState: TouristPlaceState = {
  data: [],
  loading: false,
  error: null,
};

export const loadTouristPlaces = createAsyncThunk("touristPlaces/loadTouristPlaces", async () => {
  const response = await fetchTouristPlaces();
  return response;
});

const touristPlaceSlice = createSlice({
  name: "touristPlaces",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTouristPlaces.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadTouristPlaces.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loadTouristPlaces.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load tourist places";
      });
  },
});

export default touristPlaceSlice.reducer;