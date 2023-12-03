import { Autocomplete } from '@/components/Autocomplete/Autocomplete';
import { formSchema } from '@/constants/validation';
import { useActions } from '@/hooks/useActions';
import { useAutoComplite } from '@/hooks/useAutoComplite';
import { useReactHookForm } from '@/hooks/useReactHookForm';
import { IForm } from '@/types';
import { toBase64Converter } from '@/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './ReactHookFormPage.module.css';

const ReactHookFormPage = (): React.ReactElement => {
  const [isCountryFocused, setIsCountryFocused] = useState(false);
  const { inputValue } = useAutoComplite();
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
    defaultValues: {
      name: '',
      age: undefined,
      email: '',
      password: '',
      confirmPassword: '',
      gender: undefined,
      country: '',
      terms: false,
      file: undefined,
    },
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
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formField}>
          <label>name:</label>
          <input {...register('name')} />
          <p>{errors.name?.message}</p>
        </div>

        <div className={styles.formField}>
          <label>age:</label>
          <input {...register('age')} />
          <p>{errors.age?.message}</p>
        </div>

        <div className={styles.formField}>
          <label>email:</label>
          <input {...register('email')} />
          <p>{errors.email?.message}</p>
        </div>

        <div className={styles.formField}>
          <label>password:</label>
          <input {...register('password')} />
          <p>{errors.password?.message}</p>
        </div>

        <div className={styles.formField}>
          <label>confirm password:</label>
          <input {...register('confirmPassword')} />
          <p>{errors.confirmPassword?.message}</p>
        </div>

        <div className={styles.formField}>
          <label>gender:</label>
          <select {...register('gender')}>
            <option value="default">select gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <p>{errors.gender?.message}</p>
        </div>

        <div className={`${styles.formField} ${styles.countryField}`}>
          <label>country:</label>
          <input
            {...register('country')}
            type="text"
            value={inputValue}
            onInput={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={(e) => {
              handleCountryChange(e);

              setValue('country', e.target.value, { shouldValidate: true });
            }}
          />
          <p>{errors.country?.message}</p>
          {isCountryFocused && (
            <Autocomplete handleCountrySelect={handleCountrySelect} />
          )}
        </div>

        <div className={styles.formField}>
          <label>file:</label>
          <input type="file" {...register('file')} />
          <p>{errors.file?.message}</p>
        </div>

        <div className={styles.formField}>
          <label>terms:</label>
          <input type="checkbox" {...register('terms')} />
          <p>{errors.terms?.message}</p>
        </div>

        <button disabled={!isValid} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export { ReactHookFormPage };
