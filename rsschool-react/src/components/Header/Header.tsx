import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { saveToLocalStorage } from '../../utils/utils';
import styles from './Header.module.css';

const Header = (props: {
  searchQuery: string;
  setCurrentPage: (page: number) => void;
  setSearchQuery: (search: string) => void;
}): React.ReactElement => {
  const { searchQuery, setSearchQuery, setCurrentPage } = props;
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    setSearchString(searchQuery);
  }, [searchQuery]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setSearchString(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setCurrentPage(1);
    setSearchQuery(searchString);
    saveToLocalStorage(searchQuery);
  };

  return (
    <header className={styles.header}>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="search..."
          value={searchString}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export { Header };
