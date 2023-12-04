import { Autocomplete } from '@/components/Autocomplete/Autocomplete';
import { formSchema } from '@/constants/validation';
import { useActions } from '@/hooks/useActions';
import { useAutoComplete } from '@/hooks/useAutoComplete';
import { useReactHookForm } from '@/hooks/useReactHookForm';
import { IForm } from '@/types';
import { toBase64Converter } from '@/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdCloudUpload } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import styles from './ReactHookFormPage.module.css';

const ReactHookFormPage = (): React.ReactElement => {
  const [isCountryFocused, setIsCountryFocused] = useState(false);
  const { inputValue } = useAutoComplete();
  const { setInputValue, setReactHookFormData } = useActions();
  const { reactHookForms } = useReactHookForm();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
  });

  const handleInputFocus = (): void => {
    setIsCountryFocused(true);
  };

  const handleInputBlur = (): void => {
    setTimeout(() => {
      setIsCountryFocused(false);
    }, 200);
  };

  const handleCountryChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleCountrySelect = (e: React.MouseEvent<HTMLLIElement>): void => {
    const value = (e.target as HTMLLIElement).textContent;

    if (value) {
      setInputValue(value);
      setValue('country', value, { shouldValidate: true });
    }
  };

  const onSubmit = async (formInputs: IForm): Promise<void> => {
    const file = formInputs.file ? formInputs.file[0] : '';
    try {
      if (file instanceof File) {
        const base64string = await toBase64Converter(file);
        const submitData = {
          ...formInputs,
          id: reactHookForms.length,
          file: base64string,
        };
        setReactHookFormData(submitData);
        navigate('/', {
          state: { formId: submitData.id, formType: 'controlled' },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formField}>
          {errors.name ? (
            <p className={styles.error}>{errors.name?.message}</p>
          ) : (
            <label>name:</label>
          )}

          <input {...register('name')} className={styles.input} />
        </div>

        <div className={styles.formField}>
          {errors.age ? (
            <p className={styles.error}>{errors.age?.message}</p>
          ) : (
            <label>age:</label>
          )}
          <input {...register('age')} className={styles.input} />
        </div>

        <div className={styles.formField}>
          {errors.email ? (
            <p className={styles.error}>{errors.email?.message}</p>
          ) : (
            <label>email:</label>
          )}
          <input {...register('email')} className={styles.input} />
        </div>

        <div className={styles.formField}>
          {errors.password ? (
            <p className={styles.error}>{errors.password?.message}</p>
          ) : (
            <label>password:</label>
          )}
          <input
            {...register('password')}
            type="password"
            className={styles.input}
            autoComplete="on"
          />
        </div>

        <div className={styles.formField}>
          {errors.confirmPassword ? (
            <p className={styles.error}>{errors.confirmPassword?.message}</p>
          ) : (
            <label>confirm password:</label>
          )}
          <input
            {...register('confirmPassword')}
            className={styles.input}
            type="password"
            autoComplete="on"
          />
        </div>

        <div className={styles.formField}>
          <label>gender:</label>
          <select
            {...register('gender')}
            defaultValue="default"
            className={`${styles.input} ${styles.gender}`}
          >
            <option value="default" disabled>
              select gender
            </option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <p>{errors.gender?.message}</p>
        </div>

        <div className={`${styles.formField} ${styles.countryField}`}>
          {errors.country ? (
            <p className={styles.error}>{errors.country?.message}</p>
          ) : (
            <label>country:</label>
          )}
          <input
            {...register('country')}
            className={styles.input}
            type="text"
            value={inputValue}
            onInput={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={(e) => {
              handleCountryChange(e);

              setValue('country', e.target.value, { shouldValidate: true });
            }}
          />
          {isCountryFocused && (
            <Autocomplete handleCountrySelect={handleCountrySelect} />
          )}
        </div>

        <div className={styles.fileField}>
          <input type="file" {...register('file')} className={styles.file} />
          {errors.file ? (
            <label className={`${styles.error} ${styles.fileError}`}>
              {errors.file.message}
            </label>
          ) : (
            ''
          )}
          <MdCloudUpload className={styles.uploadIcon} />
        </div>

        <div className={styles.formField}>
          <div className={styles.termsField}>
            <input type="checkbox" {...register('terms')} />
            {errors.terms ? (
              <p className={styles.error}>{errors.terms?.message}</p>
            ) : (
              <label>I am agree to Terms and Conditions:</label>
            )}
          </div>
        </div>

        <button className={styles.button} disabled={!isValid} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export { ReactHookFormPage };
