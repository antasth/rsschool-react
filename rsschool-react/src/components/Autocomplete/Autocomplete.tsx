import { useAutoComplite } from '@/hooks/useAutoComplite';
import React from 'react';
import styles from './Autocomplete.module.css';

const Autocomplete = (props: {
  handleCountrySelect: (e: React.MouseEvent<HTMLLIElement>) => void;
}): React.ReactElement => {
  const { handleCountrySelect } = props;
  const { inputValue, suggestions } = useAutoComplite();
  return (
    <ul className={styles.autocomplete}>
      {suggestions
        .filter((suggestion) => {
          const searchValue = suggestion
            .toLowerCase()
            .slice(0, inputValue.length);
          return searchValue === inputValue.toLowerCase();
        })
        .slice(0, 7)
        .map((suggestion: string) => (
          <li key={suggestion} onClick={handleCountrySelect}>
            {suggestion}
          </li>
        ))}
    </ul>
  );
};

export { Autocomplete };
