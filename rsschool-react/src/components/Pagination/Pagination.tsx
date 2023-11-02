import styles from './Pagination.module.css';

const Pagination = (props: { gamesCount: number }): React.ReactElement => {
  const { gamesCount } = props;
  return (
    <div className={styles.pagination}>
      <h1>{gamesCount}</h1>
    </div>
  );
};

export { Pagination };
