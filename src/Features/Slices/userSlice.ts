import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers, UserData } from '../Services/userService';


interface UserState {
  data: UserData[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: [],
  loading: false,
  error: null,
};

export const loadUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetchUsers();
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadUsers.fulfilled, (state, action: PayloadAction<UserData[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loadUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch Users';
      });
  },
});

export default userSlice.reducer;
