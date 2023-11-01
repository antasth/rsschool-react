import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from '../../utils/utils';
import styles from './Header.module.css';

const Header = (props: {
  searchGames: (searchString: string) => void;
}): React.ReactElement => {
  const [searchQuery, setSearchQuery] = useState('');
  const { searchGames } = props;

  useEffect(() => {
    setSearchQuery(getFromLocalStorage());
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setSearchQuery(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    searchGames(searchQuery);
    saveToLocalStorage(searchQuery);
  };

  return (
    <header className={styles.header}>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="search..."
          value={searchQuery}
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
