import styles from './UncontrolledFormPage.module.css';

const UncontrolledFormPage = (): React.ReactElement => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <form action="" className={styles.form}>
          <label htmlFor="name">name: </label>
          <input type="text" placeholder="name" name="name" />
          <label htmlFor="age">age: </label>
          <input type="text" placeholder="age" name="age" />
          <label htmlFor="email">email: </label>
          <input type="text" placeholder="email" name="email" />
          <label htmlFor="password">password: </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            autoComplete="on"
          />
          <label htmlFor="confirm">confirm password: </label>
          <input
            type="password"
            placeholder="confirm password"
            name="confirm"
            autoComplete="on"
          />
          <label htmlFor="gender">gender: </label>
          <input type="select" placeholder="gender" name="gender" />
          <div className={styles.terms}>
            <label htmlFor="terms">T&C: </label>
            <input type="checkbox" name="terms" />
          </div>
          <input type="file" />
          <input type="select" placeholder="country" />
        </form>
      </div>
    </main>
  );
};

export { UncontrolledFormPage };
