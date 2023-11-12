import { ChangeEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GamesContext } from '../../context/GamesContext';
import { getPagesArray } from '../../utils';
import styles from './Pagination.module.css';

const Pagination = (): React.ReactElement => {
  const {
    gamesCount,
    currentPage,
    pageSize,
    setPageSize,
    setCurrentPage,
    searchString,
  } = useContext(GamesContext);
  const pagesCount = Math.ceil(gamesCount / pageSize);
  const pagesArray = getPagesArray(currentPage, pagesCount);

  const navigate = useNavigate();

  const nextPage = (): void => {
    if (currentPage < pagesCount) {
      setCurrentPage(currentPage + 1);
      const url = `?page=${
        currentPage + 1
      }&search=${searchString}&page_size=${pageSize}`;
      navigate(url);
    }
  };

  const prevPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      const url = `?page=${
        currentPage - 1
      }&search=${searchString}&page_size=${pageSize}`;
      navigate(url);
    }
  };

  const handlePageSizeChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setPageSize(+e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className={styles.pagination}>
      {currentPage > 1 && (
        <div className={styles.page} onClick={prevPage} data-testid="prev">
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
        <div className={styles.page} onClick={nextPage} data-testid="next">
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
