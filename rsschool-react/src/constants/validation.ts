import { getCharacterValidationError } from '@/utils';
import * as yup from 'yup';
import { boolean, number, object, ref, string } from 'yup';
import { EMAIL_REGEXP, MAX_FILE_SIZE, SUPPORTED_FORMATS } from '.';

export const formSchema = object({
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
  file: yup
    .mixed<FileList>()
    .test('fileSize', 'File Size is too large', (files) => {
      if (files && files[0]) return files[0].size <= MAX_FILE_SIZE;
    })
    .test('fileType', 'Invalid File Format', (files) => {
      return files && files[0]
        ? SUPPORTED_FORMATS.includes(files[0].type)
        : false;
    })
    .test('required', 'You need to add a file', (files) => {
      return files && files.length > 0;
    }),
});
