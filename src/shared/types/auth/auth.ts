export interface LoginFormData {
  email: string
  password: string
}

export interface ILoginPayload {
  email: string
  password: string
}

export interface IRegisterPayload {
  name: string
  email: string
  password: string
}

export interface IAuthTokenResponse {
  token: string
}
