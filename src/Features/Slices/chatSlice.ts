// src/slices/restaurantSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addAdminChat,
  AddAdminchatData,
  addUserChat,
  AddUserchatData,
  chatData,
  getUserChat,
} from "../Services/chatService";

interface ChatState {
  data: chatData[];
  loading: boolean;
  error: string | null;
}

const initialState: ChatState = {
  data: [],
  loading: false,
  error: null,
};

export const getChatUser = createAsyncThunk(
  "chats/getUserChat",
  async (id: string) => {
    const response = await getUserChat(id);
    return response;
  }
);

export const userChatAdd = createAsyncThunk(
  "chats/addUserChat",
  async (data: AddUserchatData) => {
    const response = await addUserChat(data);
    return response;
  }
);

export const adminChatAdd = createAsyncThunk(
  "chats/addAdminChat",
  async (data: AddAdminchatData) => {
    const response = await addAdminChat(data);
    return response;
  }
);

const chatlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getChatUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getChatUser.fulfilled,
        (state, action: PayloadAction<chatData[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(getChatUser.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error.message || "Failed to fetch chatdata";
      })
      .addCase(userChatAdd.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userChatAdd.fulfilled,
        (state, action: PayloadAction<chatData>) => {
          state.loading = false;
          state.data.push(action.payload);
        }
      )
      .addCase(userChatAdd.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error.message || "Failed to add user chat";
      })
      .addCase(adminChatAdd.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        adminChatAdd.fulfilled,
        (state, action: PayloadAction<chatData>) => {
          state.loading = false;
          state.data.push(action.payload);
        }
      )
      .addCase(adminChatAdd.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error.message || "Failed to add admin chat";
      });
  },
});

export default chatlice.reducer;
