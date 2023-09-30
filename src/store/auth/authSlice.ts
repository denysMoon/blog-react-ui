import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import {
  DisplayUser,
  Jwt,
  NewUser,
  LoginUser,
  DecodedJwt,
} from "../../models/models";
import axios from "axios";
import { RootState } from "..";

const storedUser: string | null = localStorage.getItem("user");
const user: DisplayUser | null = storedUser ? JSON.parse(storedUser) : null;

const storedJwt: string | null = localStorage.getItem("jwt");
const jwt: Jwt | null = storedJwt ? JSON.parse(storedJwt) : null;

interface AsyncState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

interface AuthState extends AsyncState {
  user?: DisplayUser | null;
  jwt: Jwt;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: user,
  jwt: jwt,
  isAuthenticated: false,
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user: NewUser, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        user
      );

      return response.data;
    } catch {
      return thunkAPI.rejectWithValue({ message: "Registration failed" });
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (user: LoginUser, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        user
      );

      console.log("response", response);
      if (response.data) {
        localStorage.setItem("jwt", JSON.stringify(response.data));
        const decodedJwt: DecodedJwt = jwt_decode(response.data.token);
        localStorage.setItem("user", JSON.stringify(decodedJwt.user));
        return { jwt: response.data, user: decodedJwt.user };
      }
      return { jwt: response.data, user: null };
    } catch (error) {
      return thunkAPI.rejectWithValue("Login failed");
    }
  }
);

export const verifyJwt = createAsyncThunk(
  "auth/verifyJwt",
  async (jwt: string, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/verify-jwt",
        { jwt }
      );

      if (response.data) {
        const JwtExpirationMs = response.data.exp * 1000;

        return JwtExpirationMs > Date.now();
      }

      return false;
    } catch {
      return thunkAPI.rejectWithValue("Token verify failed");
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("user");
  localStorage.removeItem("jwt");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers(builder) {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })
      // Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("action", action);

        state.isLoading = false;
        state.isSuccess = true;
        state.jwt = action.payload.jwt;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.jwt = null;
        state.isAuthenticated = false;
        state.user = null;
      })
      // LOGOUT
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.jwt = null;
        state.isAuthenticated = false;
      })
      // VERIFY JWT
      .addCase(verifyJwt.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyJwt.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isAuthenticated = action.payload;
      })
      .addCase(verifyJwt.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isAuthenticated = false;
      });
  },
});

export const { reset } = authSlice.actions;
export const selectedUser = (state: RootState) => state.auth;
export const { reducer: authReducer } = authSlice;
