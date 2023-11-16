import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { GamesContext } from '../../context/GamesContext';
import { useActions } from '../../hooks/useActions';
import { useSearch } from '../../hooks/useSearch';
import { saveToLocalStorage } from '../../utils';
import styles from './Search.module.css';

const Search = (): React.ReactElement => {
  const { setCurrentPage } = useContext(GamesContext);

  const { saveSearchString } = useActions();
  const { searchString } = useSearch();

  const [searchInputValue, setSearchInputValue] = useState(searchString);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setSearchInputValue(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setCurrentPage(1);
    saveToLocalStorage('searchString', searchInputValue);
    saveSearchString(searchInputValue);
  };

  return (
    <header className={styles.header}>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          aria-label="search-input"
          id="search"
          className={styles.input}
          type="text"
          placeholder="search..."
          value={searchInputValue}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export { Search };
