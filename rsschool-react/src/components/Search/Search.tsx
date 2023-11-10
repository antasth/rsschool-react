import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { GamesContext } from '../../context/GamesContext';
import { saveToLocalStorage } from '../../utils';
import styles from './Search.module.css';

const Search = (props: {
  setCurrentPage: (page: number) => void;
}): React.ReactElement => {
  const { setCurrentPage } = props;
  const { searchString, setSearchString } = useContext(GamesContext);

  const [searchInputValue, setSearchInputValue] = useState(searchString);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setSearchInputValue(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setCurrentPage(1);
    setSearchString(searchInputValue);
    saveToLocalStorage('searchString', searchInputValue);
  };

  return (
    <header className={styles.header}>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
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
