import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { ChangeEvent } from 'react';
import styles from './Search.module.css';

const Search = (): React.ReactElement => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // setCurrentPage(1);
    if (searchParams) {
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      const inputValue = new FormData(e.target).get('search');
      if (inputValue !== null) {
        current.set('page', '1');
        current.set('search', inputValue.toString());
        const query = `?${current.toString()}`;
        router.push(`${pathname}${query}`);
      }
    }
  };

  return (
    <header className={styles.header}>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          data-testid="search-input"
          id="search"
          name="search"
          className={styles.input}
          type="text"
          placeholder="search..."
        />
        <button className={styles.button} type="submit" data-testid="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export { Search };
