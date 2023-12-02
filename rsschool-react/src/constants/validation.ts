import { IUncontrolledForm } from '@/types';
import { getCharacterValidationError } from '@/utils';
import { ObjectSchema, boolean, number, object, ref, string } from 'yup';
import { EMAIL_REGEXP } from '.';

export const formSchema: ObjectSchema<IUncontrolledForm> = object({
  name: string()
    .matches(/^[A-Z]/, 'First letter must be in uppercase')
    .required('Please enter your name'),
  age: number().positive().typeError('Age must be a number').required(),
  email: string().required().matches(EMAIL_REGEXP, 'Must be valid email'),
  password: string()
    .matches(/[0-9]/, getCharacterValidationError('digit'))
    .matches(/[a-z]/, getCharacterValidationError('lowercase'))
    .matches(/[A-Z]/, getCharacterValidationError('uppercase'))
    .matches(/[^(A-Za-z0-9 )]/, getCharacterValidationError('special'))
    .required('Please enter a password'),
  confirmPassword: string()
    .required('Please confirm a password')
    .oneOf([ref('password')], 'Passwords does not match'),
  gender: string().oneOf(['male', 'female'], 'Select your gender').required(),
  terms: boolean()
    .oneOf([true], 'You must accept our Terms and Conditions to proceed!')
    .required()
    .default(false),
  country: string().required(),
  file: string().required('File is required'),
});
