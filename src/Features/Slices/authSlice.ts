import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { getLogger } from "../../lib/logger";

const logger= getLogger();

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
    logger.info("Token is valid");

    const decodedToken = jwtDecode<DecodedToken>(token);
    logger.info(decodedToken);
    dispatch(setFirstname(decodedToken.firstname));
    dispatch(setRole(decodedToken.role));
    dispatch(setUserId(decodedToken.userId));
    dispatch(setIsLoggedIn(true));
  } else {
    logger.info("Token is invalid or expired");
    dispatch(resetAuth()); 
  }
};

interface AuthState {
  isLoggedIn: boolean |false;
  firstname: string | null;
  role: string | null;
  userId: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  firstname: null,
  role: null,
  userId:null
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
    setUserId: (state, action: PayloadAction<string | null>) => {
      state.userId = action.payload;
    },
    resetAuth: (state) => {
      state.isLoggedIn = false;
      state.firstname = null;
      state.role = null;
    },
  },
});

export const { setFirstname, setRole, setIsLoggedIn, resetAuth ,setUserId} = authSlice.actions;
export default authSlice.reducer;

