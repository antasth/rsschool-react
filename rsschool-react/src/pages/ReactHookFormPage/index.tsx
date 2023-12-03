import { formSchema } from '@/constants/validation';
import { useActions } from '@/hooks/useActions';
import { IForm } from '@/types';
import { toBase64Converter } from '@/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import styles from './ReactHookFormPage.module.css';

const ReactHookFormPage = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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

  const onSubmit = async (formInputs: IForm): Promise<void> => {
    const file = formInputs.file ? formInputs.file[0] : '';
    try {
      if (file instanceof File) {
        const base64string = await toBase64Converter(file);
        const submitData = { ...formInputs, file: base64string };
        setReactHookFormData(submitData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { setReactHookFormData } = useActions();
  return (
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

      <div className={styles.formField}>
        <label>country:</label>
        <input {...register('country')} />
        <p>{errors.country?.message}</p>
      </div>

      <div className={styles.formField}>
        <label>file:</label>
        <input type="file" {...register('file')} />
        <p>{errors.file?.message}</p>
      </div>

      <div className={styles.formField}>
        <label>terms:</label>
        <input type="checkbox" {...register('terms')} />
        <p>{errors.country?.message}</p>
      </div>

      <input type="submit" />
    </form>
  );
};

export { ReactHookFormPage };
