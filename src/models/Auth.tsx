export type AuthObject = {
  kind: string
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string
}

export type Auth = {
  idToken: string
  localId: string
}
