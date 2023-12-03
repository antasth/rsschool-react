import { RootState } from '@/store/store';
import { IForm } from '@/types';
import { useSelector } from 'react-redux';

export const useReactHookForm = (): IForm[] => {
  const formData = useSelector((state: RootState) => state.reactHookForm);
  return formData;
};
