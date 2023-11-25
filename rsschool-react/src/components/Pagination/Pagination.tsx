import { DEFAULT_PAGE_SIZE } from '@/constants';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { IPaginationProps } from '../../types';
import { getPagesArray } from '../../utils';
import styles from './Pagination.module.css';

const Pagination = ({
  gamesCount,
  currentPage,
  setCurrentPage,
}: IPaginationProps): React.ReactElement => {
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

  const pagesCount = Math.ceil(gamesCount / pageSize);
  const pagesArray = getPagesArray(currentPage, pagesCount);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleCurrentPageChange = (page: number): void => {
    setCurrentPage(page);
    if (searchParams) {
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.set('page', page.toString());
      const query = `?${current.toString()}`;
      router.push(`${pathname}${query}`);
    }
  };

  const handlePageSizeChange = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    if (searchParams) {
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      current.set('page_size', event.target.value);
      current.set('page', '1');
      setPageSize(+event.target.value);
      setCurrentPage(1);

      const query = `?${current.toString()}`;

      router.push(`${pathname}${query}`);
    }
  };

  const nextPage = (): void => {
    if (currentPage < pagesCount) {
      setCurrentPage(currentPage + 1);
      if (searchParams) {
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        current.set('page', (currentPage + 1).toString());
        const query = `?${current.toString()}`;
        router.push(`${pathname}${query}`);
      }
    }
  };

  const prevPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      if (searchParams) {
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        current.set('page', (currentPage - 1).toString());
        const query = `?${current.toString()}`;
        router.push(`${pathname}${query}`);
      }
    }
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
          onClick={(): void => handleCurrentPageChange(page)}
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
