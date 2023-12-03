import { IUncontrolledForm } from '@/types';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useUncontrolledForm = (): IUncontrolledForm[] => {
  const formData = useSelector((state: RootState) => state.uncontrolledForm);

  return formData;
};
