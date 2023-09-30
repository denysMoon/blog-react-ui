export interface DisplayUser {
  id: string;
  name: string;
  email: string;
}

export type Jwt = { token: string } | null;

export interface DecodedJwt {
  user: DisplayUser;
  exp: number;
  iat: number;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface NewUser {
  name: string;
  email: string;
  password: string;
}
