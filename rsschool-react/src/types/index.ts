export interface IUncontrolledForm {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  terms?: boolean;
  country?: string;
  file?: string;
}

export interface IValidationErrors {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  terms?: string;
  country?: string;
  file?: string;
}
