import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useLoadingFlag = (): { isLoading: boolean } => {
  const isLoading = useSelector((state: RootState) => state.loadingFlag.value);

  return { isLoading };
};
