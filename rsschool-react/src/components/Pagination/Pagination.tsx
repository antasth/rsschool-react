import { getPagesArray } from '../../utils/utils';
import styles from './Pagination.module.css';

const Pagination = (props: { gamesCount: number }): React.ReactElement => {
  const { gamesCount } = props;
  const pagesArray = getPagesArray(gamesCount, 20);
  return (
    <div className={styles.pagination}>
      <h1>{pagesArray.length}</h1>
    </div>
  );
};

export { Pagination };
