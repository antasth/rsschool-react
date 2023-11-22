import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useSearch = (): { searchString: string } => {
  const searchString = useSelector((state: RootState) => state.search.value);

  return { searchString };
};
