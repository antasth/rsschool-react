import styles from '@/styles/NotFound.module.css';

const NotFound = (): React.ReactElement => {
  return (
    <div className={styles.container} data-testid="notfound">
      <h1>PAGE NOT FOUND</h1>
    </div>
  );
};

export default NotFound;
