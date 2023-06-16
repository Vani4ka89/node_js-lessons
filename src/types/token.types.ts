export interface ITokenPair {
  accessToken: string;
  refreshToken: string;
}

export interface ICredentials {
  email: string;
  password: string;
}

export interface ITokenPayload {
  id: string;
}
