import { IForm } from '@/types';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useUncontrolledForm = (): { uncontrolledForms: IForm[] } => {
  const uncontrolledForms = useSelector(
    (state: RootState) => state.uncontrolledForm
  );

  return { uncontrolledForms };
};
