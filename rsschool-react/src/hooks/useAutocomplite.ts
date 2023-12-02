import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useAutocomplite = (): {
  inputValue: string;
  suggestions: string[];
} => {
  const inputValue = useSelector(
    (state: RootState) => state.autocomplete.inputValue
  );
  const suggestions = useSelector(
    (state: RootState) => state.autocomplete.suggestions
  );

  return { inputValue, suggestions };
};
