import { FormCard } from '@/components/Form/FormCard';
import { useReactHookForm } from '@/hooks/useReactHookForm';
import { useUncontrolledForm } from '@/hooks/useUncontrolledForm';
import { Link, useLocation } from 'react-router-dom';
import styles from './MainPage.module.css';

const MainPage = (): React.ReactElement => {
  const { uncontrolledForms } = useUncontrolledForm();
  const { reactHookForms } = useReactHookForm();
  const location = useLocation();
  console.log(location.state);
  const { formId, formType } = location.state;

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
            {uncontrolledForms.map((form) => (
              <div
                key={form.id}
                className={
                  form.id === formId && formType === 'uncontrolled'
                    ? styles.lastSubmit
                    : ''
                }
              >
                <FormCard key={form.email} form={form} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.formSection}>
          <h3>Controlled forms</h3>
          <div className={styles.formsList}>
            {reactHookForms.map((form) => (
              <div
                key={form.id}
                className={
                  form.id === formId && formType === 'controlled'
                    ? styles.lastSubmit
                    : ''
                }
              >
                <FormCard key={form.email} form={form} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export { MainPage };
