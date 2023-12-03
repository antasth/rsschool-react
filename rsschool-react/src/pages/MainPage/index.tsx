import { useReactHookForm } from '@/hooks/useReactHookForm';
import { useUncontrolledForm } from '@/hooks/useUncontrolledForm';
import { Link } from 'react-router-dom';
import styles from './MainPage.module.css';

const MainPage = (): React.ReactElement => {
  const { uncontrolledForms } = useUncontrolledForm();
  const { reactHookForms } = useReactHookForm();
  return (
    <main className={styles.main}>
      <h1>MainPage</h1>
      <section className={styles.links}>
        <Link to={'/uncontrolled-form'}>Uncontrolled form page</Link>
        <Link to={'/react-hook-form'}>React hook form page</Link>
      </section>
      <section className={styles.forms}>
        <div className={styles.formSection}>
          <h3>Uncontrolled forms</h3>
          <div className={styles.formsList}>
            <h4>formsList</h4>
            {uncontrolledForms.map((form) => (
              <div key={form.password}>{form.name}</div>
            ))}
          </div>
        </div>
        <div className={styles.formSection}>
          <h3>Controlled forms</h3>
          <div className={styles.formsList}>
            <h4>formsList</h4>
            {reactHookForms.map((form) => (
              <div key={form.password}>{form.name}</div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export { MainPage };
