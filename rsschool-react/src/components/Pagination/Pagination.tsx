import { getPagesArray } from '../../utils/utils';
import styles from './Pagination.module.css';

const Pagination = (props: {
  gamesCount: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}): React.ReactElement => {
  const { gamesCount, currentPage, setCurrentPage } = props;
  const pagesCount = Math.ceil(gamesCount / 20);
  const pagesArray = getPagesArray(currentPage, pagesCount);

  const nextPage = (): void => {
    if (currentPage < pagesCount) setCurrentPage(currentPage + 1);
  };
  const prevPage = (): void => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className={styles.pagination}>
      {currentPage > 1 && (
        <div className={styles.page} onClick={prevPage}>
          &#x276E;
        </div>
      )}
      {pagesArray.map((page) => (
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
      {currentPage < pagesCount && (
        <div className={styles.page} onClick={nextPage}>
          &#x276F;
        </div>
      )}
    </div>
  );
};

export { Pagination };
