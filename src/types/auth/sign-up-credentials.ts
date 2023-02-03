import { LoginCredentials } from "./login-credentials";

export interface RegistrationCredentials extends LoginCredentials {
  name: string,
  surname: string,
}
