import { emailRegExp } from '@/constants';
import { useAutocomplite } from '@/hooks/useAutocomplite';
import {
  setInputValue,
  setSuggestions,
} from '@/store/CountryAutocomplite/countryAutocomplite.slice';
import { IUncontrolledForm } from '@/types';
import { ChangeEvent, FormEvent, useReducer, useRef, useState } from 'react';
import { MdCloudUpload } from 'react-icons/md';
import { useDispatch } from 'react-redux';
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
  const [fileName, setFileName] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<IValidationErrors>(
    {}
  );
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  const getCharacterValidationError = (str: string): string => {
    return `Your password must have at least 1 ${str} character`;
  };
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const handleGenderChange = (): void => {
    forceUpdate();
  };

  const { inputValue, suggestions } = useAutocomplite();
  console.log('suggestions', suggestions);

  // const inputValue = useSelector((state) => state.autocomplite.inputValue);
  // const suggestions = useSelector((state) => state.autocomplite.suggestions);
  const dispatch = useDispatch();

  const handleCountryChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    dispatch(setInputValue(value));
    dispatch(setSuggestions(suggestions));
  };
  const formSchema: ObjectSchema<IUncontrolledForm> = object({
    name: string()
      .matches(/^[A-Z]/, 'First letter must be in uppercase')
      .required('Please enter your name'),
    age: number().positive().typeError('Age must be a number').required(),
    email: string().required().matches(emailRegExp, 'Must be valid email'),
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
          <div className={styles.formField}>
            {validationErrors.name ? (
              <p className={styles.error}>{validationErrors.name}</p>
            ) : (
              <label htmlFor="name">name: </label>
            )}

            <input
              className={styles.input}
              type="text"
              placeholder="name"
              name="name"
              ref={nameRef}
            />
          </div>
          <div className={styles.formField}>
            {validationErrors.age ? (
              <p className={styles.error}>{validationErrors.age}</p>
            ) : (
              <label htmlFor="age">age: </label>
            )}
            <input
              className={styles.input}
              type="text"
              placeholder="age"
              name="age"
              ref={ageRef}
            />
          </div>
          <div className={styles.formField}>
            {validationErrors.email ? (
              <p className={styles.error}>{validationErrors.email}</p>
            ) : (
              <label htmlFor="email">email: </label>
            )}
            <input
              className={styles.input}
              type="text"
              placeholder="email"
              name="email"
              ref={emailRef}
            />
          </div>

          <div className={styles.formField}>
            {validationErrors.password ? (
              <p className={styles.error}>{validationErrors.password}</p>
            ) : (
              <label htmlFor="password">password: </label>
            )}
            <input
              className={styles.input}
              type="password"
              placeholder="password"
              name="password"
              autoComplete="on"
              ref={passwordRef}
            />
          </div>

          <div className={styles.formField}>
            {validationErrors.confirmPassword ? (
              <p className={styles.error}>{validationErrors.confirmPassword}</p>
            ) : (
              <label htmlFor="confirm">confirm password: </label>
            )}
            <input
              className={styles.input}
              type="password"
              placeholder="confirm password"
              name="confirm"
              autoComplete="on"
              ref={confirmPasswordRef}
            />
          </div>

          <div className={styles.formField}>
            {validationErrors.gender ? (
              <p className={styles.error}>{validationErrors.gender}</p>
            ) : (
              <label htmlFor="gender">gender: </label>
            )}

            <select
              className={`${styles.input} ${styles.gender}`}
              name="gender"
              defaultValue="default"
              ref={genderRef}
              style={
                !genderRef.current?.value ||
                genderRef.current?.value === 'default'
                  ? { opacity: '0.5' }
                  : { opacity: '1' }
              }
              onChange={handleGenderChange}
            >
              <option value="default" disabled>
                Select your gender
              </option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>

          <div className={`${styles.formField} ${styles.countryField}`}>
            {validationErrors.country ? (
              <p className={styles.error}>{validationErrors.country}</p>
            ) : (
              <label htmlFor="country">country: </label>
            )}
            <input
              className={styles.input}
              type="text"
              placeholder="country"
              name="country"
              ref={countryRef}
              value={inputValue}
              onChange={handleCountryChange}
            />
            <ul className={styles.autocomplete}>
              {suggestions
                .filter((suggestion) => {
                  const searchValue = suggestion
                    .toLowerCase()
                    .slice(0, inputValue.length);
                  return searchValue === inputValue.toLowerCase();
                })
                .slice(0, 7)
                .map((suggestion: string) => (
                  <li key={suggestion}>{suggestion}</li>
                ))}
            </ul>
          </div>

          <div className={styles.fileField}>
            <input
              type="file"
              ref={fileRef}
              name="file"
              className={styles.file}
              onChange={({ target: { files } }) => {
                if (files) {
                  files[0] && setFileName(files[0].name);
                }
              }}
            />
            {validationErrors.file ? (
              <label className={`${styles.error} ${styles.fileError}`}>
                {validationErrors.file}
              </label>
            ) : (
              ''
            )}
            {fileName ? (
              <p className={styles.fileName}>{fileName}</p>
            ) : (
              <MdCloudUpload className={styles.uploadIcon} />
            )}
          </div>

          <div className={styles.formField}>
            <div className={styles.termsField}>
              <div className={styles.terms}>
                <input type="checkbox" name="terms" ref={termsRef} />
                <label htmlFor="terms">
                  I am agree to Terms and Conditions
                </label>
              </div>
              {validationErrors.terms && (
                <p className={styles.error}>{validationErrors.terms}</p>
              )}
            </div>
          </div>
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
