import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  userId: string;
  firstname: string;
  role: UserRole;
  exp: number;
}

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

const isTokenValid = async (token: string): Promise<boolean> => {
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch (error) {
    return false;
  }
};

const getToken = (): string | null => {
  return localStorage.getItem("token");
};

export const validateToken = async (dispatch: Dispatch<any>) => {
  const token = getToken();
  if (token && (await isTokenValid(token))) {
    console.log("Token is valid");

    const decodedToken = jwtDecode<DecodedToken>(token);
    console.log(decodedToken);
    dispatch(setFirstname(decodedToken.firstname));
    dispatch(setRole(decodedToken.role));
    dispatch(setIsLoggedIn(true));
  } else {
    console.log("Token is invalid or expired");
    dispatch(resetAuth()); 
  }
};

interface AuthState {
  isLoggedIn: boolean;
  firstname: string | null;
  role: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  firstname: null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFirstname: (state, action: PayloadAction<string | null>) => {
      state.firstname = action.payload;
    },
    setRole: (state, action: PayloadAction<string | null>) => {
      state.role = action.payload;
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    resetAuth: (state) => {
      state.isLoggedIn = false;
      state.firstname = null;
      state.role = null;
    },
  },
});

export const { setFirstname, setRole, setIsLoggedIn, resetAuth } = authSlice.actions;
export default authSlice.reducer;

