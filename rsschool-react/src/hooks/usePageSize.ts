import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const usePageSize = (): { pageSize: number } => {
  const pageSize = useSelector((state: RootState) => state.pageSize.value);

  return { pageSize };
};
