import { formSchema } from '@/constants/validation';
import { useActions } from '@/hooks/useActions';
import { useAutoComplite } from '@/hooks/useAutoComplite';
import { IValidationErrors } from '@/types';
import { toBase64Converter } from '@/utils';
import { ChangeEvent, FormEvent, useReducer, useRef, useState } from 'react';
import { MdCloudUpload } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import styles from './UncontrolledFormPage.module.css';

const UncontrolledFormPage = (): React.ReactElement => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [isCountryFocused, setIsCountryFocused] = useState(false);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [validationErrors, setValidationErrors] = useState<IValidationErrors>(
    {}
  );

  const { inputValue, suggestions } = useAutoComplite();
  const { setInputValue, setUncontrolledFormData } = useActions();
  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  const handleGenderChange = (): void => {
    forceUpdate();
  };

  const handleCountryChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleCountrySelect = (e: React.MouseEvent<HTMLLIElement>): void => {
    const value = (e.target as HTMLLIElement).textContent;
    console.log(value);

    if (value) {
      setInputValue(value);
    }
  };

  const handleInputFocus = (): void => {
    setIsCountryFocused(true);
  };

  const handleInputBlur = (): void => {
    setTimeout(() => {
      setIsCountryFocused(false);
    }, 200);
  };

  const handleFormSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const formInputs = {
      name: nameRef?.current?.value,
      age: ageRef?.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
      gender: genderRef.current?.value,
      terms: termsRef.current?.checked,
      file: fileRef.current?.files,
      country: countryRef.current?.value,
    };
    try {
      await formSchema.validate(formInputs, { abortEarly: false });
      console.log('Form is valid');
      try {
        if (formInputs.file) {
          const base64 = await toBase64Converter(formInputs.file[0]);
          const submitData = { ...formInputs, file: base64 };
          setUncontrolledFormData(submitData);
          navigate('/');
        }
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        console.log('submit', error);
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
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onChange={handleCountryChange}
            />
            {isCountryFocused && (
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
                    <li key={suggestion} onClick={handleCountrySelect}>
                      {suggestion}
                    </li>
                  ))}
              </ul>
            )}
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
            {fileName && <p className={styles.fileName}>{fileName}</p>}
            <MdCloudUpload className={styles.uploadIcon} />

            {/* {fileName ? (
              <p className={styles.fileName}>{fileName}</p>
            ) : (
              <MdCloudUpload className={styles.uploadIcon} />
            )} */}
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
