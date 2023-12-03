import { RootState } from '@/store/store';
import { IUncontrolledForm } from '@/types';
import { useSelector } from 'react-redux';

export const useReactHookForm = (): IUncontrolledForm[] => {
  const formData = useSelector((state: RootState) => state.reactHookForm);
  return formData;
};
