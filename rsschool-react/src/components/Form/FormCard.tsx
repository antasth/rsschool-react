import { IForm } from '@/types';
import styles from './Form.module.css';

interface IFormCardProps {
  form: IForm;
}

const FormCard = (props: IFormCardProps): JSX.Element => {
  const {
    name,
    age,
    email,
    password,
    confirmPassword,
    gender,
    country,
    terms,
    file,
  } = props.form;

  return (
    <div className={styles.form}>
      <h3>name: {name}</h3>
      <h3>age: {age}</h3>
      <h3>email: {email}</h3>
      <h3>password: {password}</h3>
      <h3>confirmPassword: {confirmPassword}</h3>
      <h3>gender: {gender}</h3>
      <h3>country: {country}</h3>
      <h3>terms: {terms?.toString()}</h3>
      {typeof file === 'string' && (
        <img src={file} className={styles.img} alt={name} />
      )}
    </div>
  );
};

export { FormCard };
