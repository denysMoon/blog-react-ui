import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { userSettingsReducer } from "./userSettings/userSettingsSlice";

const reducers = combineReducers({
  auth: authReducer,
  userSettings: userSettingsReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
