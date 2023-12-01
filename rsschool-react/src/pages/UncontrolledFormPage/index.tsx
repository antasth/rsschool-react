import { IUncontrolledForm } from '@/types';
import { FormEvent, useRef, useState } from 'react';
import * as Yup from 'yup';
import { ObjectSchema, boolean, number, object, ref, string } from 'yup';
import styles from './UncontrolledFormPage.module.css';

interface IValidationErrors {
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
const UncontrolledFormPage = (): React.ReactElement => {
  const [validationErrors, setValidationErrors] = useState<IValidationErrors>(
    {}
  );
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLInputElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  const getCharacterValidationError = (str: string): string => {
    return `Your password must have at least 1 ${str} character`;
  };

  const formSchema: ObjectSchema<IUncontrolledForm> = object({
    name: string().required(),
    age: number().positive().typeError('Age must be a number').required(),
    email: string().required().email(),
    password: string()
      .required('Please enter a password')
      .matches(/[0-9]/, getCharacterValidationError('digit'))
      .matches(/[a-z]/, getCharacterValidationError('lowercase'))
      .matches(/[A-Z]/, getCharacterValidationError('uppercase'))
      .matches(/[^(A-Za-z0-9 )]/, getCharacterValidationError('special')),
    confirmPassword: string()
      .required('Please confirm a password')
      .oneOf([ref('password')], 'Passwords does not match'),
    gender: string().required(),
    terms: boolean().required(),
    country: string().required(),
    file: string().required(),
  });
  const handleFormSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const formInputs = {
      name: nameRef.current?.value,
      age: ageRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
      gender: genderRef.current?.value,
      terms: termsRef.current?.checked,
      file: fileRef.current?.value,
      country: countryRef.current?.value,
    };
    try {
      await formSchema.validate(formInputs, { abortEarly: false });
      console.log('Form is valid');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors: { [key: string]: string } = error.inner.reduce(
          (acc, err) => {
            return err.path
              ? {
                  ...acc,
                  [err.path]: err.message,
                }
              : acc;
          },
          {}
        );
        setValidationErrors(errors);
        console.log('Validation errors:', errors);
      }
    }
    // dispatch(setFormData({ ...formData, [e.target.name]: e.target.value }));
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Uncontrolled form</h1>
      <div className={styles.content}>
        <form
          action=""
          className={styles.form}
          onSubmit={handleFormSubmit}
          noValidate
        >
          <label htmlFor="name">name: </label>
          <input type="text" placeholder="name" name="name" ref={nameRef} />
          {validationErrors.name && (
            <p className={styles.error}>{validationErrors.name}</p>
          )}
          <label htmlFor="age">age: </label>
          <input type="text" placeholder="age" name="age" ref={ageRef} />
          {validationErrors.age && (
            <p className={styles.error}>{validationErrors.age}</p>
          )}
          <label htmlFor="email">email: </label>
          <input type="text" placeholder="email" name="email" ref={emailRef} />
          {validationErrors.email && (
            <p className={styles.error}>{validationErrors.email}</p>
          )}
          <label htmlFor="password">password: </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            autoComplete="on"
            ref={passwordRef}
          />
          {validationErrors.password && (
            <p className={styles.error}>{validationErrors.password}</p>
          )}
          <label htmlFor="confirm">confirm password: </label>
          <input
            type="password"
            placeholder="confirm password"
            name="confirm"
            autoComplete="on"
            ref={confirmPasswordRef}
          />
          {validationErrors.confirmPassword && (
            <p className={styles.error}>{validationErrors.confirmPassword}</p>
          )}

          <label htmlFor="gender">gender: </label>
          <input
            type="select"
            placeholder="gender"
            name="gender"
            ref={genderRef}
          />
          {validationErrors.gender && (
            <p className={styles.error}>{validationErrors.gender}</p>
          )}

          <div className={styles.terms}>
            <input type="checkbox" name="terms" ref={termsRef} />
            <label htmlFor="terms">I am agree to Terms and Conditions</label>
            {validationErrors.terms && (
              <p className={styles.error}>{validationErrors.terms}</p>
            )}
          </div>
          <input type="text" ref={fileRef} />
          <input type="select" placeholder="country" ref={countryRef} />
          {validationErrors.country && (
            <p className={styles.error}>{validationErrors.country}</p>
          )}

          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
      <div className={styles.background}></div>
    </main>
  );
};

export { UncontrolledFormPage };
