import { ChangeEvent } from 'react';
import { getPagesArray } from '../../utils/utils';
import styles from './Pagination.module.css';

const Pagination = (props: {
  gamesCount: number;
  currentPage: number;
  pageSize: number;
  setPageSize: (page: number) => void;
  setCurrentPage: (page: number) => void;
}): React.ReactElement => {
  const { gamesCount, currentPage, pageSize, setPageSize, setCurrentPage } =
    props;
  const pagesCount = Math.ceil(gamesCount / pageSize);
  const pagesArray = getPagesArray(currentPage, pagesCount);

  const nextPage = (): void => {
    if (currentPage < pagesCount) setCurrentPage(currentPage + 1);
  };

  const prevPage = (): void => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageSizeChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setPageSize(+e.target.value);
    setCurrentPage(1);
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
      {!!gamesCount && (
        <select
          className={styles.select}
          onChange={handlePageSizeChange}
          value={pageSize}
        >
          <option value={12}>12</option>
          <option value={20}>20</option>
          <option value={28}>28</option>
          <option value={36}>36</option>
        </select>
      )}
    </div>
  );
};

export { Pagination };
