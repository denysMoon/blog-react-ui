import { DisplayUser, Jwt } from "../models/models";

export interface AsyncState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

export interface AuthState extends AsyncState {
  user?: DisplayUser | null;
  jwt: Jwt;
  isAuthenticated: boolean;
}
