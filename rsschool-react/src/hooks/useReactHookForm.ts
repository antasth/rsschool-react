import { RootState } from '@/store/store';
import { IForm } from '@/types';
import { useSelector } from 'react-redux';

export const useReactHookForm = (): { reactHookForms: IForm[] } => {
  const reactHookForms = useSelector((state: RootState) => state.reactHookForm);
  return { reactHookForms };
};
