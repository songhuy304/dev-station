export interface ILoginPayload {
  username: string
  password: string
}

export interface IRegisterPayload {
  fullName: string
  email: string
  password: string
  username: string
}

export interface IAuthTokenResponse {
  accessToken: string
  refreshToken: string
}
