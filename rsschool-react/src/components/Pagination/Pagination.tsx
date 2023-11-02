import { getPagesArray } from '../../utils/utils';
import styles from './Pagination.module.css';

const Pagination = (props: {
  gamesCount: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}): React.ReactElement => {
  const { gamesCount, currentPage, setCurrentPage } = props;
  const pagesArray = getPagesArray(gamesCount, 20);
  const pages = pagesArray.length > 5 ? pagesArray.slice(0, 5) : pagesArray;
  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <div
          key={page}
          className={
            currentPage === page
              ? `${styles.page} ${styles.active}`
              : styles.page
          }
          onClick={(): void => setCurrentPage(page)}
        >
          {page}
        </div>
      ))}
      <div className={styles.dots}>...</div>
      <div
        className={
          currentPage === pagesArray.length
            ? `${styles.page} ${styles.active}`
            : styles.page
        }
        onClick={(): void => setCurrentPage(pagesArray.length)}
      >
        {pagesArray.length}
      </div>
    </div>
  );
};

export { Pagination };
