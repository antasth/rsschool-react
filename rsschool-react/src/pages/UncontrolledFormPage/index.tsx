import { FormEvent, useRef } from 'react';
import { ObjectSchema, boolean, number, object, ref, string } from 'yup';
import styles from './UncontrolledFormPage.module.css';

const UncontrolledFormPage = (): React.ReactElement => {
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

  interface IUncontrolledForm {
    name: string;
    age: number;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    terms: boolean;
    country: string;
    file: string;
  }

  const formSchema: ObjectSchema<IUncontrolledForm> = object({
    name: string().required(),
    age: number().required().positive().integer(),
    email: string().required().email(),
    password: string()
      .required('Please enter a password')
      .matches(/[0-9]/, getCharacterValidationError('digit'))
      .matches(/[a-z]/, getCharacterValidationError('lowercase'))
      .matches(/[A-Z]/, getCharacterValidationError('uppercase'))
      .matches(
        /[^(A-Za-z0-9 )]/,
        getCharacterValidationError('special character')
      ),
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
  ): Promise<IUncontrolledForm> => {
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
    const formErrors = await formSchema.validate(formInputs);

    return formErrors;
    // dispatch(setFormData({ ...formData, [e.target.name]: e.target.value }));
  };
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Uncontrolled form</h1>
      <div className={styles.content}>
        <form action="" className={styles.form} onSubmit={handleFormSubmit}>
          <label htmlFor="name">name: </label>
          <input type="text" placeholder="name" name="name" ref={nameRef} />
          {/* {formErrors.name} */}
          <label htmlFor="age">age: </label>
          <input type="text" placeholder="age" name="age" ref={ageRef} />
          <label htmlFor="email">email: </label>
          <input type="text" placeholder="email" name="email" ref={emailRef} />
          <label htmlFor="password">password: </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            autoComplete="on"
            ref={passwordRef}
          />
          <label htmlFor="confirm">confirm password: </label>
          <input
            type="password"
            placeholder="confirm password"
            name="confirm"
            autoComplete="on"
            ref={confirmPasswordRef}
          />
          <label htmlFor="gender">gender: </label>
          <input
            type="select"
            placeholder="gender"
            name="gender"
            ref={genderRef}
          />
          <div className={styles.terms}>
            <input type="checkbox" name="terms" ref={termsRef} />
            <label htmlFor="terms">I am agree to Terms and Conditions</label>
          </div>
          <input type="file" ref={fileRef} />
          <input type="select" placeholder="country" ref={countryRef} />
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
