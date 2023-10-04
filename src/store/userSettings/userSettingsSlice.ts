import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";

const initialState = {
  themeMode: "light",
  isLoading: false,
  isError: false,
};

interface ThemeMode {
  themeMode: string;
  userId: number;
}

export const setThemeMode = createAsyncThunk(
  "userSettings/themeMode",
  async (data: ThemeMode, thunkAPI) => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_BFF_URL}/user-settings/theme-mode`,
        data
      );

      return response.data;
    } catch {
      return thunkAPI.rejectWithValue({ message: "Failed setting theme mood" });
    }
  }
);

export const getUserSettings = createAsyncThunk(
  "userSettings/getUserSettings",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BFF_URL}/user-settings/${id}`
      );

      return response.data;
    } catch {
      console.log("error");

      return thunkAPI.rejectWithValue({
        message: "Failed getting user settings",
      });
    }
  }
);

export const userSettingsSlice = createSlice({
  name: "userSettings",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
  },
  extraReducers(builder) {
    builder
      // Get settings
      .addCase(getUserSettings.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getUserSettings.fulfilled, (state, action) => {
        console.log("action", action.payload);
        state.isLoading = false;
        state.themeMode = action.payload.themeMode;
      })
      .addCase(getUserSettings.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // Set settings
      .addCase(setThemeMode.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(setThemeMode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.themeMode = action.payload.themeMode;
      })
      .addCase(setThemeMode.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = userSettingsSlice.actions;
export const userSettings = (state: RootState) => state.userSettings;
export const { reducer: userSettingsReducer } = userSettingsSlice;
